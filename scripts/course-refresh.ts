/**
 * Weekly course-refresh script.
 *
 * For each `lectures/weekNN-topic/` directory, asks Claude Opus 4.7 (with the
 * server-side web_search + web_fetch tools) what's changed in that topic
 * recently and what the slides should plausibly be updated to reflect.
 *
 * Writes a single markdown report to `reports/course-refresh-YYYY-MM-DD.md`.
 * The reports/ directory is gitignored — suggestions don't pollute git unless
 * the instructor acts on them.
 *
 * Usage: ANTHROPIC_API_KEY=sk-... npm run course:refresh
 */

import Anthropic from "@anthropic-ai/sdk";
import * as fs from "node:fs";
import * as path from "node:path";

interface SlideEntry {
  file: string;
  label: string;
}

interface WeekInfo {
  dir: string;
  week: string;
  topic: string;
  slideTitles: string[];
  intro: string;
}

const SYSTEM_PROMPT = `You are a course-content reviewer for an applied AI graduate course.

Given a single lecture topic and its slide outline, search the web for the LATEST developments in that area (new papers, model releases, blog posts, framework changes, deprecations) and return concise, actionable refresh suggestions for the instructor.

Focus on what has CHANGED or what is NEW since the lecture was likely written. Prioritize:
- New research that contradicts, extends, or supersedes current slide content
- New tools, libraries, or frameworks that have become standard
- Recommendations on slides that are now considered outdated or deprecated
- Important benchmarks, evaluation methodologies, or empirical findings
- Notable model releases or capability shifts relevant to the topic

Output rules:
- Be concrete. Prefer "Update slide N (Topic) to mention X (cite: <url>)" over generic platitudes.
- Limit yourself to ~5–8 highest-value suggestions per lecture. Quality over quantity.
- If nothing material has changed in this topic in the last ~3 months, say so in one sentence and stop. Don't fabricate updates.
- Cite sources inline as markdown links. Prefer primary sources (arXiv, official blogs, GitHub releases) over secondary aggregation.
- Do not rewrite slides. The instructor decides what to incorporate.`;

const REFRESH_USER_TEMPLATE = (week: WeekInfo) => `# Week ${week.week}: ${week.topic}

## Current slide outline
${week.slideTitles.map((t) => `- ${t}`).join("\n")}

## Intro slide content
\`\`\`
${week.intro.trim()}
\`\`\`

---

Search the web for recent developments relevant to this lecture's topic. Return a refresh-suggestion list in markdown.`;

function listWeeks(repoRoot: string): WeekInfo[] {
  const lecturesDir = path.join(repoRoot, "lectures");
  const entries = fs
    .readdirSync(lecturesDir)
    .filter((name) => /^week\d{2}-/.test(name))
    .sort();

  return entries.map((name) => {
    const dir = path.join(lecturesDir, name);
    const weekMatch = name.match(/^week(\d{2})-(.+)$/);
    const week = weekMatch?.[1] ?? "??";
    const topic = weekMatch?.[2] ?? name;

    const slidesPath = path.join(dir, "slides.json");
    let slideTitles: string[] = [];
    if (fs.existsSync(slidesPath)) {
      try {
        const parsed = JSON.parse(fs.readFileSync(slidesPath, "utf-8")) as SlideEntry[];
        slideTitles = parsed.map((s) => s.label);
      } catch {
        slideTitles = [];
      }
    }

    const introPath = path.join(dir, "00-Intro.md");
    const intro = fs.existsSync(introPath) ? fs.readFileSync(introPath, "utf-8") : "";

    return { dir, week, topic, slideTitles, intro };
  });
}

async function refreshWeek(client: Anthropic, week: WeekInfo): Promise<string> {
  const response = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 16000,
    thinking: { type: "adaptive" },
    output_config: { effort: "high" },
    system: [
      {
        type: "text",
        text: SYSTEM_PROMPT,
        cache_control: { type: "ephemeral" },
      },
    ],
    tools: [
      { type: "web_search_20260209", name: "web_search" },
      { type: "web_fetch_20260209", name: "web_fetch" },
    ],
    messages: [{ role: "user", content: REFRESH_USER_TEMPLATE(week) }],
  });

  const textParts = response.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text.trim())
    .filter(Boolean);

  const usage = response.usage;
  const usageLine = `_tokens: input=${usage.input_tokens}, cached_read=${usage.cache_read_input_tokens ?? 0}, output=${usage.output_tokens}_`;

  return [textParts.join("\n\n"), "", usageLine].join("\n");
}

async function main(): Promise<void> {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY is not set.");
    process.exit(1);
  }

  const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
  const weeks = listWeeks(repoRoot);

  if (weeks.length === 0) {
    console.error("No lectures/weekNN-* directories found.");
    process.exit(1);
  }

  const client = new Anthropic();
  const date = new Date().toISOString().slice(0, 10);
  const sections: string[] = [
    `# Course Refresh — ${date}`,
    "",
    `Generated by \`scripts/course-refresh.ts\` against ${weeks.length} lectures. ` +
      "Each section is a snapshot of suggested updates based on a web search at the time of the run; " +
      "they are not authoritative. Drop or keep as you see fit.",
    "",
  ];

  for (const week of weeks) {
    console.error(`[${week.week}] ${week.topic} — querying…`);
    try {
      const suggestion = await refreshWeek(client, week);
      sections.push(`## Week ${week.week}: ${week.topic}`, "", suggestion, "");
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`[${week.week}] failed: ${message}`);
      sections.push(
        `## Week ${week.week}: ${week.topic}`,
        "",
        `**Error during refresh:** ${message}`,
        "",
      );
    }
  }

  const reportsDir = path.join(repoRoot, "reports");
  fs.mkdirSync(reportsDir, { recursive: true });
  const outputPath = path.join(reportsDir, `course-refresh-${date}.md`);
  fs.writeFileSync(outputPath, sections.join("\n"));
  console.error(`\nWrote ${path.relative(repoRoot, outputPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
