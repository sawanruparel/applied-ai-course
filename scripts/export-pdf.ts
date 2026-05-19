/**
 * Export lecture decks to PDF for review.
 *
 * Renders every slide of each lecture exactly as it appears in the deck viewer
 * (mermaid diagrams, layouts, and all) and assembles one PDF per lecture, one
 * slide per page. Because it captures the *rendered* slide, the PDF doubles as
 * an overflow/clipping review artifact — a cramped slide looks cramped here too.
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
const SCALE = 0.5; // PNG px → PDF pt; 1440x900 → 720x450pt pages
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

async function exportLecture(page: Page, slug: string): Promise<void> {
  const n = slideCount(slug);
  const pdf = await PDFDocument.create();

  for (let i = 0; i < n; i++) {
    await page.goto(`${BASE}/pages/${slug}.html?slide=${i}`, { waitUntil: "networkidle" });
    // Give mermaid a chance to render; not all slides have a diagram.
    await page.waitForSelector(".mermaid[data-processed]", { timeout: 4000 }).catch(() => {});
    await page.waitForTimeout(250);

    const png = await page.screenshot({ type: "png" });
    const img = await pdf.embedPng(png);
    const w = VIEWPORT.width * SCALE;
    const h = VIEWPORT.height * SCALE;
    const p = pdf.addPage([w, h]);
    p.drawImage(img, { x: 0, y: 0, width: w, height: h });
  }

  const outPath = path.join(OUT_DIR, `${slug}.pdf`);
  fs.writeFileSync(outPath, await pdf.save());
  console.log(`  ${slug}: ${n} slides → ${outPath}`);
}

async function main(): Promise<void> {
  const only = process.argv[2];
  const slugs = only ? [only] : lectureSlugs();
  if (only && !fs.existsSync(`lectures/${only}/slides.json`)) {
    console.error(`Unknown lecture: ${only}`);
    process.exit(1);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Fail fast if the server isn't up.
  try {
    await fetch(BASE);
  } catch {
    console.error(`No server at ${BASE}. Run \`npm run dev\` (or \`npm run preview\`) first.`);
    process.exit(1);
  }

  const browser = await chromium.launch({ channel: "chrome" });
  try {
    const page = await browser.newContext({ viewport: VIEWPORT }).then((c) => c.newPage());
    console.log(`Exporting ${slugs.length} lecture(s) to ${OUT_DIR}/`);
    for (const slug of slugs) {
      await exportLecture(page, slug);
    }
    console.log("Done.");
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
