import * as fs from "fs";
import * as path from "path";
import { Open } from "unzipper";
import { parseStringPromise } from "xml2js";

// ── Types ──────────────────────────────────────────────────────────────

interface Paragraph {
  text: string;
  level: number;
  isBullet: boolean;
  isNumbered: boolean;
  isTitle: boolean;
}

interface SlideData {
  index: number;
  title: string;
  paragraphs: Paragraph[];
}

interface SlideMarkdown {
  filename: string;
  label: string;
  content: string;
}

// ── PPTX Parsing ───────────────────────────────────────────────────────

async function readZipEntry(
  directory: Awaited<ReturnType<typeof Open.file>>,
  entryPath: string
): Promise<string | null> {
  const entry = directory.files.find(
    (f) => f.path.toLowerCase() === entryPath.toLowerCase()
  );
  if (!entry) return null;
  const buffer = await entry.buffer();
  return buffer.toString("utf-8");
}

async function getSlideOrder(
  directory: Awaited<ReturnType<typeof Open.file>>
): Promise<string[]> {
  const presentationXml = await readZipEntry(
    directory,
    "ppt/presentation.xml"
  );
  if (!presentationXml) throw new Error("Missing ppt/presentation.xml");

  const relsXml = await readZipEntry(
    directory,
    "ppt/_rels/presentation.xml.rels"
  );
  if (!relsXml)
    throw new Error("Missing ppt/_rels/presentation.xml.rels");

  const presentation = await parseStringPromise(presentationXml);
  const rels = await parseStringPromise(relsXml);

  // Build rId → target map
  const relMap = new Map<string, string>();
  const relationships =
    rels.Relationships?.Relationship || [];
  for (const rel of relationships) {
    const rId = rel.$.Id as string;
    const target = rel.$.Target as string;
    relMap.set(rId, target);
  }

  // Get slide rIds in order from presentation.xml
  const sldIdLst =
    presentation["p:presentation"]?.["p:sldIdLst"]?.[0]?.["p:sldId"] || [];

  const slideFiles: string[] = [];
  for (const sldId of sldIdLst) {
    const rId = sldId.$["r:id"] as string;
    const target = relMap.get(rId);
    if (target) {
      // target is like "slides/slide1.xml" — prepend "ppt/"
      slideFiles.push(target.startsWith("ppt/") ? target : `ppt/${target}`);
    }
  }

  return slideFiles;
}

function extractText(node: any): string {
  if (typeof node === "string") return node;
  if (!node || typeof node !== "object") return "";

  // <a:t> elements contain the actual text
  if (node["a:t"]) {
    const parts = Array.isArray(node["a:t"]) ? node["a:t"] : [node["a:t"]];
    return parts.map((t: any) => (typeof t === "string" ? t : t._ || "")).join("");
  }

  let text = "";
  for (const key of Object.keys(node)) {
    const child = node[key];
    if (Array.isArray(child)) {
      for (const item of child) {
        text += extractText(item);
      }
    } else {
      text += extractText(child);
    }
  }
  return text;
}

function isShapeTitle(sp: any): boolean {
  // Check nvSpPr → nvPr → ph type
  const ph =
    sp?.["p:nvSpPr"]?.[0]?.["p:nvPr"]?.[0]?.["p:ph"]?.[0]?.$;
  if (!ph) return false;
  const phType = ph.type || "";
  return phType === "title" || phType === "ctrTitle";
}

function isShapeSubtitle(sp: any): boolean {
  const ph =
    sp?.["p:nvSpPr"]?.[0]?.["p:nvPr"]?.[0]?.["p:ph"]?.[0]?.$;
  if (!ph) return false;
  return ph.type === "subTitle";
}

function extractParagraphs(sp: any, isTitle: boolean): Paragraph[] {
  const txBody = sp?.["p:txBody"]?.[0];
  if (!txBody) return [];

  const paragraphs: Paragraph[] = [];
  const aParagraphs = txBody["a:p"] || [];

  for (const aP of aParagraphs) {
    const text = extractText(aP).trim();
    if (!text) continue;

    const pPr = aP["a:pPr"]?.[0];
    const level = pPr?.$?.lvl ? parseInt(pPr.$.lvl, 10) : 0;

    // Check for bullet/numbered
    const buNone = pPr?.["a:buNone"];
    const buAutoNum = pPr?.["a:buAutoNum"];
    const buChar = pPr?.["a:buChar"];

    let isBullet = false;
    let isNumbered = false;

    if (buAutoNum) {
      isNumbered = true;
    } else if (buChar) {
      isBullet = true;
    } else if (!buNone && !isTitle && level >= 0) {
      // Default body text with no explicit buNone is typically a bullet
      isBullet = !isTitle;
    }

    paragraphs.push({ text, level, isBullet, isNumbered, isTitle });
  }

  return paragraphs;
}

async function parseSlide(
  directory: Awaited<ReturnType<typeof Open.file>>,
  slidePath: string,
  index: number
): Promise<SlideData> {
  const xml = await readZipEntry(directory, slidePath);
  if (!xml) throw new Error(`Missing slide: ${slidePath}`);

  const parsed = await parseStringPromise(xml);
  const spTree =
    parsed["p:sld"]?.["p:cSld"]?.[0]?.["p:spTree"]?.[0];

  let title = "";
  const allParagraphs: Paragraph[] = [];

  if (spTree) {
    const shapes = spTree["p:sp"] || [];
    for (const sp of shapes) {
      const isTitleShape = isShapeTitle(sp);
      const isSubtitleShape = isShapeSubtitle(sp);
      const paragraphs = extractParagraphs(sp, isTitleShape || isSubtitleShape);

      if (isTitleShape && paragraphs.length > 0) {
        title = paragraphs.map((p) => p.text).join(" ");
      }

      allParagraphs.push(...paragraphs);
    }

    // Also check for group shapes
    const groupShapes = spTree["p:grpSp"] || [];
    for (const grp of groupShapes) {
      const innerShapes = grp["p:sp"] || [];
      for (const sp of innerShapes) {
        const isTitleShape = isShapeTitle(sp);
        const paragraphs = extractParagraphs(sp, isTitleShape);
        allParagraphs.push(...paragraphs);
      }
    }

    // Check for tables
    const graphicFrames = spTree["p:graphicFrame"] || [];
    for (const frame of graphicFrames) {
      const tbl =
        frame?.["a:graphic"]?.[0]?.["a:graphicData"]?.[0]?.["a:tbl"]?.[0];
      if (!tbl) continue;

      const rows = tbl["a:tr"] || [];
      for (const row of rows) {
        const cells = row["a:tc"] || [];
        const cellTexts = cells.map((cell: any) => extractText(cell).trim());
        allParagraphs.push({
          text: `| ${cellTexts.join(" | ")} |`,
          level: 0,
          isBullet: false,
          isNumbered: false,
          isTitle: false,
        });
      }
    }
  }

  if (!title) {
    // Use first title-flagged paragraph or first paragraph as title
    const titlePara = allParagraphs.find((p) => p.isTitle);
    title = titlePara?.text || `Slide ${index + 1}`;
  }

  return { index, title, paragraphs: allParagraphs };
}

// ── Markdown Generation ────────────────────────────────────────────────

function inferLayout(slide: SlideData): string {
  const bodyParas = slide.paragraphs.filter((p) => !p.isTitle);
  if (bodyParas.length === 0) return "center";
  if (bodyParas.length <= 2 && bodyParas.every((p) => !p.isBullet && !p.isNumbered))
    return "center";
  if (bodyParas.some((p) => p.text.startsWith("|"))) return "standard";
  return "standard";
}

function slugify(text: string): string {
  return text
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 40);
}

function slideToMarkdown(slide: SlideData): string {
  const layout = inferLayout(slide);
  const lines: string[] = [];

  lines.push("---");
  lines.push(`title: ${slide.title}`);
  lines.push(`section: Lecture`);
  lines.push(`layout: ${layout}`);
  lines.push("---");
  lines.push("");

  // Add title as h1
  lines.push(`# ${slide.title}`);
  lines.push("");

  const bodyParas = slide.paragraphs.filter((p) => !p.isTitle);

  // Check if we have table rows
  const tableRows = bodyParas.filter((p) => p.text.startsWith("|"));
  const nonTableParas = bodyParas.filter((p) => !p.text.startsWith("|"));

  for (const para of nonTableParas) {
    if (para.isNumbered) {
      lines.push(`1. ${para.text}`);
    } else if (para.isBullet) {
      const indent = "  ".repeat(para.level);
      lines.push(`${indent}- ${para.text}`);
    } else {
      lines.push(para.text);
    }
  }

  if (tableRows.length > 0) {
    lines.push("");
    // Insert header separator after first row
    for (let i = 0; i < tableRows.length; i++) {
      lines.push(tableRows[i].text);
      if (i === 0) {
        // Add separator row
        const colCount = tableRows[0].text.split("|").filter(Boolean).length;
        lines.push(`| ${Array(colCount).fill("---").join(" | ")} |`);
      }
    }
  }

  return lines.join("\n");
}

// ── Output Modes ───────────────────────────────────────────────────────

function writeIndividualFiles(
  slides: SlideMarkdown[],
  outputDir: string,
  relativeDir: string
): void {
  fs.mkdirSync(outputDir, { recursive: true });

  for (const slide of slides) {
    const filePath = path.join(outputDir, slide.filename);
    fs.writeFileSync(filePath, slide.content, "utf-8");
    console.log(`  wrote ${slide.filename}`);
  }

  // Write slides.json
  const manifest = slides.map((s) => ({
    file: `${relativeDir}/${s.filename}`,
    label: s.label,
  }));
  const manifestPath = path.join(outputDir, "slides.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf-8");
  console.log(`  wrote slides.json (${slides.length} slides)`);
}

function writeSingleFile(slides: SlideMarkdown[], outputPath: string): void {
  const combined = slides.map((s) => s.content).join("\n\n---\n\n");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, combined, "utf-8");
  console.log(`  wrote ${outputPath} (${slides.length} slides)`);
}

// ── Main ───────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const singleMode = args.includes("--single");
  const positional = args.filter((a) => !a.startsWith("--"));

  if (positional.length < 2) {
    console.error(
      "Usage: npx tsx scripts/pptx-to-md.ts <input.pptx> <output-dir> [--single]"
    );
    process.exit(1);
  }

  const inputPath = path.resolve(positional[0]);
  const outputDir = path.resolve(positional[1]);

  if (!fs.existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`);
    process.exit(1);
  }

  console.log(`Parsing ${path.basename(inputPath)}...`);

  const directory = await Open.file(inputPath);
  const slideFiles = await getSlideOrder(directory);
  console.log(`  found ${slideFiles.length} slides`);

  const slideDataList: SlideData[] = [];
  for (let i = 0; i < slideFiles.length; i++) {
    const data = await parseSlide(directory, slideFiles[i], i);
    slideDataList.push(data);
  }

  const slideMarkdowns: SlideMarkdown[] = slideDataList.map((slide) => {
    const paddedIndex = String(slide.index).padStart(2, "0");
    const slug = slugify(slide.title);
    const filename = `${paddedIndex}-${slug}.md`;
    const label = `${paddedIndex} ${slide.title}`;
    const content = slideToMarkdown(slide);
    return { filename, label, content };
  });

  console.log(`\nWriting output...`);

  if (singleMode) {
    const outputPath = path.join(outputDir, "slides.md");
    writeSingleFile(slideMarkdowns, outputPath);
  } else {
    // Derive relative dir for slides.json paths (e.g., "lectures/mcp")
    const cwd = process.cwd();
    const relativeDir = path.relative(cwd, outputDir);
    writeIndividualFiles(slideMarkdowns, outputDir, relativeDir);
  }

  console.log("\nDone!");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
