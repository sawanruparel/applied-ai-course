// Sanity-check the three rewritten lectures by visiting a few slides each and
// screenshotting them. Used during the rewrite PR; not part of the standard
// build. Requires dev server on :4173 + system Chrome.
import { chromium } from "playwright";

const samples: [string, number, string][] = [
  ["week08-mcp", 1, "w08-problem"],
  ["week08-mcp", 5, "w08-lifecycle"],
  ["week08-mcp", 18, "w08-build-server"],
  ["week06-graphrag", 3, "w06-enter"],
  ["week06-graphrag", 8, "w06-global-search"],
  ["week06-graphrag", 13, "w06-hybrid"],
  ["week15-capstone", 2, "w15-models"],
  ["week15-capstone", 4, "w15-architecture"],
  ["week15-capstone", 6, "w15-cost"],
];

async function main() {
  const b = await chromium.launch({ channel: "chrome" });
  try {
    const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
    const p = await ctx.newPage();
    for (const [lecture, slide, name] of samples) {
      const url = `http://localhost:4173/${lecture}.html?slide=${slide}`;
      await p.goto(url, { waitUntil: "networkidle" });
      await p.waitForSelector(".mermaid[data-processed]", { timeout: 10_000 }).catch(() => {});
      await p.screenshot({ path: `/tmp/${name}.png` });
      console.log(`saved /tmp/${name}.png`);
    }
  } finally {
    await b.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
