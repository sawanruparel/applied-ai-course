// Headless verification that mermaid blocks render as SVG in the deck viewer.
// Runs against the dev server on :4173. Exits non-zero on failure.
//
// Usage: tsx scripts/verify-mermaid.ts

import { chromium } from "playwright";

const slideCount = 30; // week01 has 30 slides; the test slide is at index 30 (file 99-*)

async function main() {
  const browser = await chromium.launch({ channel: "chrome" });
  try {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    page.on("pageerror", (err) => {
      console.error("[browser pageerror]", err.message);
    });
    page.on("console", (msg) => {
      if (msg.type() === "error") console.error("[browser console error]", msg.text());
    });

    const url = `http://localhost:4173/week01-landscape.html?slide=${slideCount}`;
    console.log(`Navigating to ${url}`);
    await page.goto(url, { waitUntil: "networkidle" });

    // Wait for the mermaid renderer to process the diagrams.
    await page.waitForSelector(".mermaid[data-processed]", { timeout: 10_000 });

    const processedCount = await page.locator(".mermaid[data-processed]").count();
    const svgCount = await page.locator(".mermaid svg").count();
    const fallbackCount = await page.locator(".diagram--mermaid-fallback").count();
    const codeBlockCount = await page.locator("pre.diagram code").count();

    console.log(`mermaid processed: ${processedCount}`);
    console.log(`mermaid SVG nodes: ${svgCount}`);
    console.log(`mermaid fallback (errors): ${fallbackCount}`);
    console.log(`non-mermaid code blocks: ${codeBlockCount}`);

    const slideTitle = await page.locator("#slide h1").first().textContent();
    console.log(`slide title: ${slideTitle}`);

    await page.screenshot({ path: "/tmp/mermaid-verify.png", fullPage: true });
    console.log("screenshot: /tmp/mermaid-verify.png");

    const diagrams = page.locator(".mermaid");
    await diagrams.nth(0).screenshot({ path: "/tmp/mermaid-flowchart.png" });
    await diagrams.nth(1).screenshot({ path: "/tmp/mermaid-sequence.png" });
    console.log("diagram screenshots: /tmp/mermaid-flowchart.png, /tmp/mermaid-sequence.png");

    if (processedCount < 2 || svgCount < 2) {
      console.error("FAIL: expected 2 rendered mermaid SVGs");
      process.exit(1);
    }
    if (codeBlockCount < 1) {
      console.error("FAIL: expected at least 1 non-mermaid code block to render as <pre><code>");
      process.exit(1);
    }
    console.log("PASS");
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
