/**
 * Export lecture decks to PDF for review.
 *
 * Renders every slide of each lecture exactly as it appears in the deck viewer
 * (mermaid diagrams, layouts, and all) and assembles one PDF per lecture, one
 * slide per page. Slides are scroll containers and most are taller than the
 * one-screen frame by design, so each slide is expanded to its FULL height
 * before capture — the PDF page is sized to the slide's real content height
 * (variable per slide), never truncated at one screen.
 *
 * Prerequisite: a server on http://localhost:4173 (run `npm run dev` or
 * `npm run preview` in another terminal first). Uses the system Chrome via
 * Playwright's `channel: "chrome"` to avoid a chromium download.
 *
 * Usage:
 *   npm run export-pdf              # all lectures → reports/pdf/<slug>.pdf
 *   npm run export-pdf week08-mcp   # just one lecture
 */

import { chromium, type Page } from "playwright";
import { PDFDocument } from "pdf-lib";
import * as fs from "node:fs";
import * as path from "node:path";

const BASE = "http://localhost:4173";
const VIEWPORT = { width: 1440, height: 900 };
const SCALE = 0.5; // PNG px → PDF pt; pages sized to each slide's full height
const OUT_DIR = "reports/pdf";

function lectureSlugs(): string[] {
  return fs
    .readdirSync("pages")
    .filter((f) => f.endsWith(".html"))
    .map((f) => f.replace(/\.html$/, ""))
    .sort();
}

function slideCount(slug: string): number {
  const manifest = JSON.parse(fs.readFileSync(`lectures/${slug}/slides.json`, "utf-8"));
  return manifest.length;
}

// Slides are scroll containers (.slide { overflow: auto }) — most are taller
// than the one-screen frame by design. Screenshotting the viewport would
// truncate them at 712px, so before capture we expand the frame/slide chain to
// full height and screenshot the #slide element itself. Each PDF page is then
// sized to that slide's real content height (variable per slide).
const EXPAND_CSS = `
  html, body, .app-shell, .stage-shell, .stage, .stage-frame, .slide {
    overflow: visible !important;
    height: auto !important;
    max-height: none !important;
    block-size: auto !important;
    min-block-size: 0 !important;
  }
  .stage-frame { inline-size: min(100%, 1160px) !important; }
  .slide.slide--entering { animation: none !important; }
`;

async function captureSlide(
  page: Page,
  url: string,
): Promise<{ png: Buffer; w: number; h: number }> {
  // SPA route navigations can race under `networkidle` (one goto interrupted by
  // the next). Use `domcontentloaded` + an explicit content wait, and retry.
  let lastErr: unknown;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      await page.goto(url, { waitUntil: "domcontentloaded" });
      // Wait for any rendered slide content. A direct-child selector matches
      // every block type (h1, p, ul, ol, blockquote, pre, table, .mermaid,
      // .card-grid) — narrower selectors miss list-only or quote-only slides.
      await page.waitForSelector("#slide > *", { timeout: 8000 });
      // Give mermaid a chance to render; not all slides have a diagram.
      await page.waitForSelector(".mermaid[data-processed]", { timeout: 4000 }).catch(() => {});
      await page.addStyleTag({ content: EXPAND_CSS });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(300);
      const slide = page.locator("#slide");
      const box = await slide.boundingBox();
      const png = await slide.screenshot({ type: "png" });
      return { png, w: box?.width ?? 1160, h: box?.height ?? 760 };
    } catch (err) {
      lastErr = err;
      await page.waitForTimeout(400);
    }
  }
  throw lastErr;
}

async function exportLecture(page: Page, slug: string): Promise<void> {
  const n = slideCount(slug);
  const pdf = await PDFDocument.create();

  for (let i = 0; i < n; i++) {
    const { png, w, h } = await captureSlide(page, `${BASE}/pages/${slug}.html?slide=${i}`);
    const img = await pdf.embedPng(png);
    const pw = w * SCALE;
    const ph = h * SCALE;
    const p = pdf.addPage([pw, ph]);
    p.drawImage(img, { x: 0, y: 0, width: pw, height: ph });
  }

  const outPath = path.join(OUT_DIR, `${slug}.pdf`);
  fs.writeFileSync(outPath, await pdf.save());
  console.log(`  ${slug}: ${n} slides → ${outPath}`);
}

async function main(): Promise<void> {
  // Args: optional lecture slugs to export, plus --force to redo existing PDFs.
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const named = args.filter((a) => !a.startsWith("--"));
  let slugs = named.length ? named : lectureSlugs();

  for (const s of named) {
    if (!fs.existsSync(`lectures/${s}/slides.json`)) {
      console.error(`Unknown lecture: ${s}`);
      process.exit(1);
    }
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Resume by default: skip lectures whose PDF already exists (written
  // atomically, so an existing file means a complete export). --force redoes.
  if (!force) {
    const before = slugs.length;
    slugs = slugs.filter((s) => !fs.existsSync(path.join(OUT_DIR, `${s}.pdf`)));
    const skipped = before - slugs.length;
    if (skipped)
      console.log(`Skipping ${skipped} already-exported lecture(s) (use --force to redo)`);
  }

  if (slugs.length === 0) {
    console.log("Nothing to export.");
    return;
  }

  // Fail fast if the server isn't up.
  try {
    await fetch(BASE);
  } catch {
    console.error(`No server at ${BASE}. Run \`npm run dev\` (or \`npm run preview\`) first.`);
    process.exit(1);
  }

  const browser = await chromium.launch({ channel: "chrome" });
  const failed: string[] = [];
  try {
    const page = await browser.newContext({ viewport: VIEWPORT }).then((c) => c.newPage());
    console.log(`Exporting ${slugs.length} lecture(s) to ${OUT_DIR}/`);
    for (const slug of slugs) {
      try {
        await exportLecture(page, slug);
      } catch (err) {
        failed.push(slug);
        console.error(`  ${slug}: FAILED — ${err instanceof Error ? err.message : String(err)}`);
      }
    }
  } finally {
    await browser.close();
  }

  if (failed.length) {
    console.error(`\n${failed.length} lecture(s) failed: ${failed.join(", ")}. Re-run to retry.`);
    process.exit(1);
  }
  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
