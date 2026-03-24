import * as fs from "fs";
import * as path from "path";
import { chromium, type Browser, type BrowserContext } from "playwright";

// ── Types ──────────────────────────────────────────────────────────────

interface LinkEntry {
  url: string;
  linkText: string;
  file: string;
  line: number;
}

interface ValidationResult {
  url: string;
  status: number | null;
  category: "ok" | "redirect" | "broken" | "error" | "content_mismatch" | "skipped";
  redirectUrl?: string;
  linkTexts: string[];
  files: string[];
  contentMatch?: boolean;
  matchedKeywords?: string[];
  missingKeywords?: string[];
  llmVerdict?: string;
  fetchMethod?: "fetch" | "browser";
  error?: string;
}

interface Report {
  timestamp: string;
  summary: {
    filesScanned: number;
    totalUrls: number;
    ok: number;
    redirects: number;
    broken: number;
    errors: number;
    contentMismatch: number;
    skipped: number;
    browserFetched: number;
  };
  results: ValidationResult[];
}

interface FetchResult {
  status: number | null;
  redirectUrl?: string;
  body?: string;
  error?: string;
  method: "fetch" | "browser";
}

// ── CLI Argument Parsing ───────────────────────────────────────────────

function parseArgs(argv: string[]) {
  const args = {
    dir: "lectures",
    json: false,
    jsonPath: "reports/url-validation.json",
    concurrency: 10,
    statusOnly: false,
    noBrowser: false,
    llm: false,
    llmBaseUrl: "http://localhost:11434/v1",
    llmModel: "llama3",
  };

  for (let i = 2; i < argv.length; i++) {
    switch (argv[i]) {
      case "--json":
        args.json = true;
        break;
      case "--dir":
        args.dir = argv[++i];
        break;
      case "--concurrency":
        args.concurrency = parseInt(argv[++i], 10);
        break;
      case "--status-only":
        args.statusOnly = true;
        break;
      case "--no-browser":
        args.noBrowser = true;
        break;
      case "--llm":
        args.llm = true;
        break;
      case "--llm-base-url":
        args.llmBaseUrl = argv[++i];
        break;
      case "--llm-model":
        args.llmModel = argv[++i];
        break;
      case "--help":
        console.log(`
Usage: tsx scripts/validate-urls.ts [options]

Options:
  --dir <path>            Lectures directory (default: lectures/)
  --json                  Output JSON report to reports/url-validation.json
  --concurrency <n>       Parallel request limit (default: 10)
  --status-only           Skip content validation, only check HTTP status
  --no-browser            Disable Playwright browser fallback for blocked sites
  --llm                   Enable LLM validation for inconclusive keyword matches
  --llm-base-url <url>    OpenAI-compatible API base URL (default: http://localhost:11434/v1)
  --llm-model <model>     Model name for LLM validation (default: llama3)
  --help                  Show this help message
`);
        process.exit(0);
    }
  }

  return args;
}

// ── File Discovery ─────────────────────────────────────────────────────

function findMarkdownFiles(dir: string): string[] {
  const results: string[] = [];

  function walk(current: string) {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith(".md")) {
        results.push(fullPath);
      }
    }
  }

  walk(dir);
  return results.sort();
}

// ── URL Extraction ─────────────────────────────────────────────────────

const SKIP_DOMAINS = ["evil.com", "example.com", "mycompany.atlassian.net"];

const MARKDOWN_LINK_RE = /\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g;

function extractLinks(filePath: string): LinkEntry[] {
  const content = fs.readFileSync(filePath, "utf-8");
  const links: LinkEntry[] = [];
  const lines = content.split("\n");

  for (let i = 0; i < lines.length; i++) {
    let match: RegExpExecArray | null;
    MARKDOWN_LINK_RE.lastIndex = 0;
    while ((match = MARKDOWN_LINK_RE.exec(lines[i])) !== null) {
      const url = match[2];
      const linkText = match[1];

      if (SKIP_DOMAINS.some((d) => url.includes(d))) continue;

      links.push({ url, linkText, file: filePath, line: i + 1 });
    }
  }

  return links;
}

// ── Keyword Extraction ─────────────────────────────────────────────────

const STOP_WORDS = new Set([
  "et", "al", "al.", "the", "a", "an", "of", "for", "in", "on", "with",
  "and", "or", "to", "from", "by", "its", "is", "are", "was", "were",
  "introducing", "new", "via", "using", "based", "toward", "towards",
  "paper", "docs", "documentation", "official", "github", "repository",
  "blog", "post", "guide", "tutorial", "api", "pricing", "page",
]);

function extractKeywords(linkText: string): string[] {
  // If the link text looks like a bare URL, skip keyword extraction
  if (/^https?:\/\//.test(linkText) || /^[a-z]+\.[a-z]+/.test(linkText)) {
    return [];
  }

  // Remove years like (2022), parenthetical content with years
  let cleaned = linkText.replace(/\(\d{4}\)/g, "").replace(/\d{4}/g, "");
  // Remove special chars but keep hyphens within words
  cleaned = cleaned.replace(/[—–:,|]/g, " ");
  // Split into words
  const words = cleaned
    .split(/\s+/)
    .map((w) => w.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, ""))
    .filter((w) => w.length > 1)
    .filter((w) => !STOP_WORDS.has(w.toLowerCase()));

  // Deduplicate case-insensitively
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of words) {
    const lower = w.toLowerCase();
    if (!seen.has(lower)) {
      seen.add(lower);
      unique.push(w);
    }
  }

  return unique;
}

// ── HTML to Text ───────────────────────────────────────────────────────

function htmlToText(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ── Concurrency Limiter ────────────────────────────────────────────────

async function parallelMap<T, R>(
  items: T[],
  concurrency: number,
  fn: (item: T, index: number) => Promise<R>
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const i = nextIndex++;
      results[i] = await fn(items[i], i);
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

// ── HTTP Fetching (fast, default) ──────────────────────────────────────

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

async function fetchWithNode(
  url: string,
  options: { timeout: number; retries: number }
): Promise<FetchResult> {
  const { timeout, retries } = options;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeout);

      const res = await fetch(url, {
        method: "GET",
        headers: { "User-Agent": USER_AGENT },
        signal: controller.signal,
        redirect: "manual",
      });

      clearTimeout(timer);

      // Handle redirects — follow to get final content
      if ([301, 302, 307, 308].includes(res.status)) {
        const location = res.headers.get("location");
        if (location) {
          const finalUrl = location.startsWith("http")
            ? location
            : new URL(location, url).toString();

          const controller2 = new AbortController();
          const timer2 = setTimeout(() => controller2.abort(), timeout);
          const finalRes = await fetch(finalUrl, {
            method: "GET",
            headers: { "User-Agent": USER_AGENT },
            signal: controller2.signal,
          });
          clearTimeout(timer2);

          const body = await finalRes.text();
          return { status: res.status, redirectUrl: finalUrl, body, method: "fetch" };
        }
        return { status: res.status, method: "fetch" };
      }

      const body = await res.text();
      return { status: res.status, body, method: "fetch" };
    } catch (err: unknown) {
      if (attempt === retries) {
        const message = err instanceof Error ? err.message : String(err);
        return { status: null, error: message, method: "fetch" };
      }
      await new Promise((r) => setTimeout(r, 1000));
    }
  }

  return { status: null, error: "max retries exceeded", method: "fetch" };
}

// ── Browser Fetching (Playwright fallback for blocked pages) ───────────

let _browserContext: BrowserContext | null = null;
let _browser: Browser | null = null;

async function getBrowserContext(): Promise<BrowserContext> {
  if (!_browserContext) {
    _browser = await chromium.launch({ headless: true });
    _browserContext = await _browser.newContext({
      userAgent: USER_AGENT,
      ignoreHTTPSErrors: true,
    });
  }
  return _browserContext;
}

async function closeBrowser(): Promise<void> {
  if (_browserContext) await _browserContext.close();
  if (_browser) await _browser.close();
  _browserContext = null;
  _browser = null;
}

async function fetchWithBrowser(
  url: string,
  options: { timeout: number }
): Promise<FetchResult> {
  try {
    const context = await getBrowserContext();
    const page = await context.newPage();

    try {
      const response = await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: options.timeout,
      });

      if (!response) {
        return { status: null, error: "no response from browser", method: "browser" };
      }

      // Wait briefly for JS to render
      await page.waitForTimeout(2000);

      const status = response.status();
      const finalUrl = page.url();
      const body = await page.content();

      const isRedirect = finalUrl !== url && new URL(finalUrl).hostname !== new URL(url).hostname;

      return {
        status,
        body,
        redirectUrl: isRedirect ? finalUrl : undefined,
        method: "browser",
      };
    } finally {
      await page.close();
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { status: null, error: message, method: "browser" };
  }
}

// ── Keyword Content Validation ─────────────────────────────────────────

function validateContent(
  keywords: string[],
  pageText: string
): { match: boolean; matched: string[]; missing: string[] } {
  if (keywords.length === 0) return { match: true, matched: [], missing: [] };

  const textLower = pageText.toLowerCase();
  const matched: string[] = [];
  const missing: string[] = [];

  for (const kw of keywords) {
    if (textLower.includes(kw.toLowerCase())) {
      matched.push(kw);
    } else {
      missing.push(kw);
    }
  }

  const ratio = matched.length / keywords.length;
  return { match: ratio >= 0.5, matched, missing };
}

// ── LLM Validation ────────────────────────────────────────────────────

async function llmValidate(
  linkText: string,
  pageSnippet: string,
  baseUrl: string,
  model: string
): Promise<string> {
  try {
    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content:
              "You verify that a web page matches a citation. Answer with YES or NO followed by a brief reason (one sentence).",
          },
          {
            role: "user",
            content: `Citation link text: "${linkText}"\n\nPage content (first 1500 chars):\n${pageSnippet.slice(0, 1500)}\n\nDoes this page content match the citation? Answer YES or NO with a brief reason.`,
          },
        ],
        max_tokens: 100,
        temperature: 0,
      }),
    });

    if (!res.ok) return `LLM error: HTTP ${res.status}`;

    const data = (await res.json()) as {
      choices: Array<{ message: { content: string } }>;
    };
    return data.choices[0]?.message?.content?.trim() ?? "No response";
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return `LLM error: ${msg}`;
  }
}

// ── Console Colors ─────────────────────────────────────────────────────

const c = {
  green: (s: string) => `\x1b[32m${s}\x1b[0m`,
  red: (s: string) => `\x1b[31m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  cyan: (s: string) => `\x1b[36m${s}\x1b[0m`,
  magenta: (s: string) => `\x1b[35m${s}\x1b[0m`,
  dim: (s: string) => `\x1b[2m${s}\x1b[0m`,
  bold: (s: string) => `\x1b[1m${s}\x1b[0m`,
};

// ── Check if fetch result looks bot-blocked ────────────────────────────

function isBotBlocked(fetchResult: FetchResult): boolean {
  if (fetchResult.status && [400, 403].includes(fetchResult.status)) return true;
  if (fetchResult.error?.includes("fetch failed")) return true;
  return false;
}

// ── Main ───────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs(process.argv);

  console.log(c.bold("\nURL Validation Report"));
  console.log("=====================\n");

  // 1. Find all markdown files
  const lecturesDir = path.resolve(args.dir);
  if (!fs.existsSync(lecturesDir)) {
    console.error(c.red(`Directory not found: ${lecturesDir}`));
    process.exit(1);
  }

  const mdFiles = findMarkdownFiles(lecturesDir);
  console.log(c.dim(`Scanning ${mdFiles.length} markdown files...\n`));

  // 2. Extract all links
  const allLinks: LinkEntry[] = [];
  for (const file of mdFiles) {
    allLinks.push(...extractLinks(file));
  }

  // 3. Group by URL
  const urlMap = new Map<string, { linkTexts: Set<string>; files: Set<string> }>();
  for (const link of allLinks) {
    const existing = urlMap.get(link.url);
    if (existing) {
      existing.linkTexts.add(link.linkText);
      existing.files.add(link.file);
    } else {
      urlMap.set(link.url, {
        linkTexts: new Set([link.linkText]),
        files: new Set([link.file]),
      });
    }
  }

  const uniqueUrls = Array.from(urlMap.keys());
  console.log(
    `Found ${c.bold(String(allLinks.length))} links (${c.bold(String(uniqueUrls.length))} unique URLs) across ${c.bold(String(mdFiles.length))} files\n`
  );

  // 4. Validate each URL — fast fetch first, browser fallback for blocked
  let completed = 0;
  let browserFetched = 0;
  const browserQueue: Array<{ url: string; index: number }> = [];

  // Phase 1: fast fetch all URLs
  const results = await parallelMap(uniqueUrls, args.concurrency, async (url, index) => {
    const entry = urlMap.get(url)!;
    const linkTexts = Array.from(entry.linkTexts);
    const files = Array.from(entry.files).map((f) => path.relative(process.cwd(), f));

    const result: ValidationResult = {
      url,
      status: null,
      category: "ok",
      linkTexts,
      files,
    };

    const fetchResult = await fetchWithNode(url, { timeout: 10_000, retries: 1 });
    result.status = fetchResult.status;
    result.fetchMethod = "fetch";

    // Check if bot-blocked — queue for browser fallback
    if (!args.noBrowser && isBotBlocked(fetchResult)) {
      browserQueue.push({ url, index });
      result.category = "ok"; // Temporary — will be resolved in phase 2
      result.error = "queued for browser verification";
      completed++;
      const pct = Math.round((completed / uniqueUrls.length) * 100);
      process.stdout.write(`\r${c.dim(`Phase 1 (fetch): ${completed}/${uniqueUrls.length} (${pct}%)`)}`);
      return result;
    }

    if (fetchResult.error) {
      result.category = "error";
      result.error = fetchResult.error;
    } else if (fetchResult.redirectUrl) {
      result.category = "redirect";
      result.redirectUrl = fetchResult.redirectUrl;
    } else if (fetchResult.status && fetchResult.status >= 400) {
      result.category = "broken";
    }

    // Content validation for successful fetches
    if (!args.statusOnly && (result.category === "ok" || result.category === "redirect") && fetchResult.body) {
      applyContentValidation(result, fetchResult.body, linkTexts, args);
    }

    completed++;
    const pct = Math.round((completed / uniqueUrls.length) * 100);
    process.stdout.write(`\r${c.dim(`Phase 1 (fetch): ${completed}/${uniqueUrls.length} (${pct}%)`)}`);

    return result;
  });

  process.stdout.write("\r" + " ".repeat(60) + "\r");

  // Phase 2: browser fallback for blocked URLs (sequential — shares one browser)
  if (browserQueue.length > 0) {
    console.log(c.dim(`\nPhase 2 (browser): ${browserQueue.length} blocked URLs to verify...\n`));

    let browserCompleted = 0;
    // Process browser queue with limited concurrency (browser tabs)
    const browserConcurrency = Math.min(3, browserQueue.length);

    await parallelMap(browserQueue, browserConcurrency, async ({ url, index }) => {
      const result = results[index];
      const linkTexts = result.linkTexts;

      const fetchResult = await fetchWithBrowser(url, { timeout: 15_000 });

      result.status = fetchResult.status;
      result.fetchMethod = "browser";
      result.error = undefined;
      browserFetched++;

      if (fetchResult.error) {
        result.category = "error";
        result.error = fetchResult.error;
      } else if (fetchResult.redirectUrl) {
        result.category = "redirect";
        result.redirectUrl = fetchResult.redirectUrl;
      } else if (fetchResult.status && fetchResult.status >= 400) {
        result.category = "broken";
      } else {
        result.category = "ok";
      }

      // Content validation
      if (!args.statusOnly && (result.category === "ok" || result.category === "redirect") && fetchResult.body) {
        const pageText = htmlToText(fetchResult.body).slice(0, 5000);
        applyContentValidation(result, fetchResult.body, linkTexts, args);
      }

      browserCompleted++;
      process.stdout.write(
        `\r${c.dim(`Phase 2 (browser): ${browserCompleted}/${browserQueue.length}`)}`
      );
    });

    await closeBrowser();
    process.stdout.write("\r" + " ".repeat(60) + "\r");
  }

  // 5. Categorize results
  const ok = results.filter((r) => r.category === "ok");
  const redirects = results.filter((r) => r.category === "redirect");
  const broken = results.filter((r) => r.category === "broken");
  const errors = results.filter((r) => r.category === "error");
  const contentMismatch = results.filter((r) => r.category === "content_mismatch");
  const skipped = results.filter((r) => r.category === "skipped");

  // 6. Print report
  console.log(c.green(`✓ ${ok.length} OK${args.statusOnly ? "" : " (status + content match)"}`));
  console.log(c.cyan(`⟳ ${redirects.length} Redirects`));
  console.log(c.red(`✗ ${broken.length} Broken`));
  console.log(c.yellow(`⚠ ${errors.length} Timeouts/Errors`));
  if (!args.statusOnly) {
    console.log(c.magenta(`⚑ ${contentMismatch.length} Content mismatch`));
  }
  if (skipped.length) {
    console.log(c.dim(`○ ${skipped.length} Skipped`));
  }
  if (browserFetched > 0) {
    console.log(c.dim(`🌐 ${browserFetched} verified via browser`));
  }

  if (broken.length > 0) {
    console.log(c.bold(c.red("\nBROKEN:")));
    for (const r of broken) {
      console.log(`  ${c.red("✗")} ${r.status} ${r.url}`);
      if (r.fetchMethod === "browser") console.log(`    ${c.dim("(verified via browser)")}`);
      for (const f of r.files) console.log(`    └─ ${c.dim(f)}`);
    }
  }

  if (contentMismatch.length > 0) {
    console.log(c.bold(c.magenta("\nCONTENT MISMATCH:")));
    for (const r of contentMismatch) {
      console.log(`  ${c.magenta("⚑")} ${r.url}`);
      console.log(`    Link text: ${c.dim(r.linkTexts[0])}`);
      if (r.missingKeywords?.length) {
        console.log(`    Missing keywords: ${c.yellow(r.missingKeywords.join(", "))}`);
      }
      if (r.llmVerdict) {
        console.log(`    LLM verdict: ${c.dim(r.llmVerdict)}`);
      }
      for (const f of r.files) console.log(`    └─ ${c.dim(f)}`);
    }
  }

  if (redirects.length > 0) {
    console.log(c.bold(c.cyan("\nREDIRECTS:")));
    for (const r of redirects) {
      console.log(`  ${c.cyan("⟳")} ${r.status} ${r.url}`);
      if (r.redirectUrl) console.log(`    → ${c.dim(r.redirectUrl)}`);
      if (r.fetchMethod === "browser") console.log(`    ${c.dim("(verified via browser)")}`);
      for (const f of r.files) console.log(`    └─ ${c.dim(f)}`);
    }
  }

  if (errors.length > 0) {
    console.log(c.bold(c.yellow("\nERRORS:")));
    for (const r of errors) {
      console.log(`  ${c.yellow("⚠")} ${r.url}`);
      if (r.error) console.log(`    ${c.dim(r.error)}`);
      for (const f of r.files) console.log(`    └─ ${c.dim(f)}`);
    }
  }

  // 7. JSON report
  if (args.json) {
    const report: Report = {
      timestamp: new Date().toISOString(),
      summary: {
        filesScanned: mdFiles.length,
        totalUrls: uniqueUrls.length,
        ok: ok.length,
        redirects: redirects.length,
        broken: broken.length,
        errors: errors.length,
        contentMismatch: contentMismatch.length,
        skipped: skipped.length,
        browserFetched,
      },
      results: results.sort((a, b) => {
        const order = { broken: 0, content_mismatch: 1, error: 2, redirect: 3, ok: 4, skipped: 5 };
        return order[a.category] - order[b.category];
      }),
    };

    const reportsDir = path.dirname(args.jsonPath);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    fs.writeFileSync(args.jsonPath, JSON.stringify(report, null, 2));
    console.log(`\n${c.dim(`JSON report written to ${args.jsonPath}`)}`);
  }

  console.log("");

  // Exit with error code if any broken URLs
  if (broken.length > 0) process.exit(1);
}

// ── Content Validation Helper ──────────────────────────────────────────

function applyContentValidation(
  result: ValidationResult,
  rawBody: string,
  linkTexts: string[],
  args: { statusOnly: boolean; llm: boolean; llmBaseUrl: string; llmModel: string }
) {
  const pageText = htmlToText(rawBody).slice(0, 5000);

  // Skip content validation for pages with very little text (JS-rendered SPAs)
  if (pageText.length < 100) {
    result.contentMatch = true;
    return;
  }

  const keywords = extractKeywords(linkTexts[0]);

  if (keywords.length === 0) {
    result.contentMatch = true; // No keywords to check (bare URL link text)
    return;
  }

  const { match, matched, missing } = validateContent(keywords, pageText);
  result.contentMatch = match;
  result.matchedKeywords = matched;
  result.missingKeywords = missing;

  if (!match) {
    result.category = "content_mismatch";
  }
}

// Async version for LLM fallback
async function applyContentValidationWithLLM(
  result: ValidationResult,
  rawBody: string,
  linkTexts: string[],
  args: { statusOnly: boolean; llm: boolean; llmBaseUrl: string; llmModel: string }
) {
  applyContentValidation(result, rawBody, linkTexts, args);

  // LLM fallback for inconclusive matches
  if (
    args.llm &&
    result.category === "content_mismatch" &&
    result.matchedKeywords &&
    result.matchedKeywords.length > 0
  ) {
    const pageText = htmlToText(rawBody).slice(0, 5000);
    result.llmVerdict = await llmValidate(
      linkTexts[0],
      pageText,
      args.llmBaseUrl,
      args.llmModel
    );
    if (result.llmVerdict.toUpperCase().startsWith("YES")) {
      result.contentMatch = true;
      result.category = "ok";
    }
  }
}

main().catch(async (err) => {
  await closeBrowser();
  console.error(c.red(`Fatal error: ${err.message}`));
  process.exit(1);
});
