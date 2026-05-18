import "./styles/index.css";
import { COURSE_EYEBROW } from "./config/course";
import { renderMermaidIn } from "./mermaid-renderer";

type SlideMeta = {
  title?: string;
  section?: string;
  layout?: string;
};

type SlideRecord = {
  file: string;
  label: string;
};

type Block =
  | { type: "h1"; content: string }
  | { type: "paragraph"; content: string }
  | { type: "quote"; content: string }
  | { type: "list"; items: string[] }
  | { type: "ordered-list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "code"; content: string; lang?: string }
  | { type: "section"; title: string; content: string };

export type DeckConfig = {
  slides: SlideRecord[];
  markdownModules: Record<string, () => Promise<string>>;
  deckTitle: string;
  railTitle: string;
};

const ICON_SUN = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
const ICON_MOON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

export function initDeck(config: DeckConfig) {
  const { slides, markdownModules, deckTitle, railTitle } = config;

  const app = document.querySelector<HTMLDivElement>("#app");

  if (!app) {
    throw new Error("App container not found.");
  }

  app.innerHTML = `
    <div class="app-shell">
      <aside class="slide-rail" id="slide-rail"></aside>
      <main class="stage-shell">
        <header class="topbar">
          <div>
            <p class="eyebrow">${escapeHtml(COURSE_EYEBROW)}</p>
            <h1 id="deck-title">${escapeHtml(deckTitle)}</h1>
          </div>
          <div class="topbar-actions">
            <a href="/" class="ghost-button">All Lectures</a>
            <button id="toggle-theme" class="ghost-button icon-button" type="button">${ICON_SUN}</button>
            <button id="toggle-rail" class="ghost-button" type="button">Slides</button>
            <button id="fullscreen" class="ghost-button" type="button">Fullscreen</button>
          </div>
        </header>

        <section class="stage">
          <div class="stage-frame">
            <article id="slide" class="slide slide--loading"></article>
          </div>
        </section>

        <footer class="controls">
          <div class="progress-shell">
            <div id="progress-label" class="progress-label">Loading…</div>
            <div class="progress-track"><div id="progress-bar" class="progress-bar"></div></div>
          </div>
          <div class="control-buttons">
            <button id="prev" type="button">Previous</button>
            <button id="next" type="button">Next</button>
          </div>
        </footer>
      </main>
    </div>
  `;

  const slideRail = getRequiredElement<HTMLElement>("slide-rail");
  const slideEl = getRequiredElement<HTMLElement>("slide");
  const deckTitleEl = getRequiredElement<HTMLElement>("deck-title");
  const progressLabel = getRequiredElement<HTMLElement>("progress-label");
  const progressBar = getRequiredElement<HTMLElement>("progress-bar");
  const prevButton = getRequiredElement<HTMLButtonElement>("prev");
  const nextButton = getRequiredElement<HTMLButtonElement>("next");
  const toggleRailButton = getRequiredElement<HTMLButtonElement>("toggle-rail");
  const fullscreenButton = getRequiredElement<HTMLButtonElement>("fullscreen");
  const themeButton = getRequiredElement<HTMLButtonElement>("toggle-theme");

  let currentIndex = 0;

  void init();

  async function init() {
    const url = new URL(window.location.href);
    const indexParam = Number(url.searchParams.get("slide"));
    currentIndex = Number.isInteger(indexParam) ? clamp(indexParam, 0, slides.length - 1) : 0;

    renderRail();
    bindEvents();
    await renderSlide(currentIndex);
  }

  function bindEvents() {
    prevButton.addEventListener("click", () => void navigate(currentIndex - 1));
    nextButton.addEventListener("click", () => void navigate(currentIndex + 1));

    document.addEventListener("keydown", (event) => {
      if (event.key === " " && event.shiftKey) {
        event.preventDefault();
        void navigate(currentIndex - 1);
        return;
      }

      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        void navigate(currentIndex + 1);
      }

      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        void navigate(currentIndex - 1);
      }
    });

    let touchStartX = 0;
    let touchStartY = 0;

    slideEl.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.touches[0]?.clientX ?? 0;
        touchStartY = event.touches[0]?.clientY ?? 0;
      },
      { passive: true },
    );

    slideEl.addEventListener(
      "touchend",
      (event) => {
        const touchEndX = event.changedTouches[0]?.clientX ?? 0;
        const touchEndY = event.changedTouches[0]?.clientY ?? 0;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) < 50 || Math.abs(deltaY) > Math.abs(deltaX)) return;

        if (deltaX < 0) {
          void navigate(currentIndex + 1);
        } else {
          void navigate(currentIndex - 1);
        }
      },
      { passive: true },
    );

    toggleRailButton.addEventListener("click", () => {
      document.body.classList.toggle("rail-open");
    });

    themeButton.addEventListener("click", () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      document.documentElement.setAttribute("data-theme", isLight ? "dark" : "light");
      themeButton.innerHTML = isLight ? ICON_SUN : ICON_MOON;
    });

    fullscreenButton.addEventListener("click", async () => {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        return;
      }

      await document.exitFullscreen();
    });
  }

  async function navigate(index: number) {
    const nextIndex = clamp(index, 0, slides.length - 1);
    if (nextIndex === currentIndex) return;
    currentIndex = nextIndex;
    await renderSlide(currentIndex);
  }

  async function renderSlide(index: number) {
    const slide = slides[index];
    const moduleKey = `../${slide.file}`;
    const loader = markdownModules[moduleKey];

    if (!loader) {
      slideEl.className = "slide slide--center";
      slideEl.innerHTML = `<h1>Slide not found</h1><p>Could not locate source for <code>${escapeHtml(slide.file)}</code>.</p>`;
      updateRail();
      updateProgress({});
      syncUrl(index);
      return;
    }

    let raw: string;
    try {
      raw = await loader();
    } catch (err) {
      slideEl.className = "slide slide--center";
      slideEl.innerHTML = `<h1>Failed to load slide</h1><p>${escapeHtml(String(err))}</p>`;
      updateRail();
      updateProgress({});
      syncUrl(index);
      return;
    }

    const { meta, body } = parseFrontMatter(raw);

    deckTitleEl.textContent = meta.title || deckTitle;
    slideEl.className = `slide slide--${meta.layout || "standard"} slide--entering`;
    slideEl.innerHTML = renderMarkdown(body, meta.layout || "standard");
    slideEl.addEventListener("animationend", () => slideEl.classList.remove("slide--entering"), {
      once: true,
    });

    updateRail();
    updateProgress(meta);
    syncUrl(index);

    void renderMermaidIn(slideEl);
  }

  function renderRail() {
    slideRail.innerHTML = `
      <div class="rail-header">
        <p class="eyebrow">Deck Map</p>
        <h2>${escapeHtml(railTitle)}</h2>
      </div>
      <nav class="rail-list">
        ${slides
          .map(
            (slide, index) => `
              <button class="rail-link" data-index="${index}" type="button">
                <span>${escapeHtml(slide.label)}</span>
              </button>
            `,
          )
          .join("")}
      </nav>
    `;

    slideRail.addEventListener("click", (event) => {
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>(".rail-link");
      if (button) void navigate(Number(button.dataset.index));
    });
  }

  function updateRail() {
    slideRail.querySelectorAll<HTMLButtonElement>(".rail-link").forEach((button, index) => {
      button.classList.toggle("is-active", index === currentIndex);
    });

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
  }

  function updateProgress(meta: SlideMeta) {
    progressLabel.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")} • ${meta.section || "Lecture"}`;
    progressBar.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
  }

  function syncUrl(index: number) {
    const url = new URL(window.location.href);
    url.searchParams.set("slide", String(index));
    window.history.replaceState({}, "", url);
  }
}

function parseFrontMatter(raw: string): { meta: SlideMeta; body: string } {
  if (!raw.startsWith("---")) {
    return { meta: {}, body: raw.trim() };
  }

  const parts = raw.split(/^---$/m);
  const frontMatter = parts[1] ?? "";
  const rest = parts.slice(2).join("---").trim();
  const meta: SlideMeta = {};

  frontMatter
    .trim()
    .split("\n")
    .forEach((line) => {
      const separatorIndex = line.indexOf(":");
      if (separatorIndex === -1) return;
      const key = line.slice(0, separatorIndex).trim() as keyof SlideMeta;
      const value = line.slice(separatorIndex + 1).trim();
      meta[key] = value;
    });

  return { meta, body: rest };
}

function renderMarkdown(markdown: string, layout: string) {
  const blocks = parseBlocks(markdown);

  if (layout === "two-column") {
    const sections = blocks.filter(
      (block): block is Extract<Block, { type: "section" }> => block.type === "section",
    );
    const extras = blocks.filter((block) => block.type !== "section");
    return `
      <div class="slide-grid slide-grid--two">
        ${sections.slice(0, 2).map(renderSectionCard).join("")}
      </div>
      ${extras.map(renderBlock).join("")}
    `;
  }

  if (layout === "cards") {
    const cards = blocks.filter(
      (block): block is Extract<Block, { type: "section" }> => block.type === "section",
    );
    return `<div class="card-grid">${cards.map(renderSectionCard).join("")}</div>`;
  }

  if (layout === "cards-title") {
    const cards = blocks.filter(
      (block): block is Extract<Block, { type: "section" }> => block.type === "section",
    );
    const extras = blocks.filter((block) => block.type !== "section");
    return `
      ${extras.map(renderBlock).join("")}
      <div class="card-grid">${cards.map(renderSectionCard).join("")}</div>
    `;
  }

  return blocks.map(renderBlock).join("");
}

function parseBlocks(markdown: string): Block[] {
  const lines = markdown.split("\n");
  const blocks: Block[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = (lines[index] ?? "").trim();

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const lang = line.slice(3).trim() || undefined;
      const content: string[] = [];
      index += 1;
      while (index < lines.length && !(lines[index] ?? "").trimEnd().match(/^```\s*$/)) {
        content.push(lines[index] ?? "");
        index += 1;
      }
      index += 1;
      blocks.push({ type: "code", content: content.join("\n"), lang });
      continue;
    }

    if (line.startsWith("# ")) {
      blocks.push({ type: "h1", content: line.slice(2).trim() });
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      const title = line.slice(3).trim();
      const content: string[] = [];
      index += 1;
      while (index < lines.length && !(lines[index] ?? "").startsWith("## ")) {
        const current = lines[index] ?? "";
        content.push(current);
        if (current.trimEnd().startsWith("```")) {
          index += 1;
          while (index < lines.length && !(lines[index] ?? "").trimEnd().match(/^```\s*$/)) {
            content.push(lines[index] ?? "");
            index += 1;
          }
          if (index < lines.length) {
            content.push(lines[index] ?? "");
          }
        }
        index += 1;
      }
      blocks.push({ type: "section", title, content: content.join("\n").trim() });
      continue;
    }

    if (line.startsWith(">")) {
      const quoteLines: string[] = [];
      while (index < lines.length && (lines[index] ?? "").startsWith(">")) {
        quoteLines.push((lines[index] ?? "").replace(/^>\s?/, "").trim());
        index += 1;
      }
      blocks.push({ type: "quote", content: quoteLines.join(" ") });
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s/.test((lines[index] ?? "").trim())) {
        items.push((lines[index] ?? "").trim().replace(/^\d+\.\s/, ""));
        index += 1;
      }
      blocks.push({ type: "ordered-list", items });
      continue;
    }

    if (line.trim().startsWith("|")) {
      const rows: string[] = [];
      while (index < lines.length && (lines[index] ?? "").trim().startsWith("|")) {
        rows.push((lines[index] ?? "").trim());
        index += 1;
      }

      const [headerRow, dividerRow, ...bodyRows] = rows;
      const hasDivider = Boolean(dividerRow && dividerRow.includes("---"));
      const headers = splitTableRow(headerRow ?? "");
      const body = (hasDivider ? bodyRows : rows.slice(1)).map(splitTableRow);
      blocks.push({ type: "table", headers, rows: body });
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && (lines[index] ?? "").trim().startsWith("- ")) {
        items.push((lines[index] ?? "").trim().slice(2));
        index += 1;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    const paragraph: string[] = [];
    while (
      index < lines.length &&
      (lines[index] ?? "").trim() &&
      !isBlockStart(lines[index] ?? "")
    ) {
      paragraph.push((lines[index] ?? "").trim());
      index += 1;
    }
    blocks.push({ type: "paragraph", content: paragraph.join(" ") });
  }

  return blocks;
}

function isBlockStart(line: string) {
  const trimmed = line.trim();
  return (
    trimmed.startsWith("# ") ||
    trimmed.startsWith("## ") ||
    trimmed.startsWith(">") ||
    trimmed.startsWith("```") ||
    trimmed.startsWith("|") ||
    trimmed.startsWith("- ") ||
    /^\d+\.\s/.test(trimmed)
  );
}

function renderSectionCard(section: Extract<Block, { type: "section" }>): string {
  const inner = parseBlocks(section.content).map(renderBlock).join("");
  return `
    <section class="section-card">
      <h2>${escapeHtml(section.title)}</h2>
      ${inner}
    </section>
  `;
}

function renderBlock(block: Block): string {
  switch (block.type) {
    case "h1":
      return `<h1>${renderInline(block.content)}</h1>`;
    case "paragraph":
      return `<p>${renderInline(block.content)}</p>`;
    case "quote":
      return `<blockquote>${renderInline(block.content)}</blockquote>`;
    case "list":
      return `<ul>${block.items.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ul>`;
    case "ordered-list":
      return `<ol>${block.items.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ol>`;
    case "table":
      return `
        <table>
          <thead>
            <tr>${block.headers.map((item) => `<th>${renderInline(item)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${block.rows
              .map(
                (row) => `<tr>${row.map((item) => `<td>${renderInline(item)}</td>`).join("")}</tr>`,
              )
              .join("")}
          </tbody>
        </table>
      `;
    case "code":
      if (block.lang === "mermaid") {
        return `<div class="mermaid">${escapeHtml(block.content)}</div>`;
      }
      return `<pre class="diagram"${block.lang ? ` data-lang="${escapeHtml(block.lang)}"` : ""}><code>${escapeHtml(block.content)}</code></pre>`;
    case "section":
      return renderSectionCard(block);
  }
}

function renderInline(text: string) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}

function splitTableRow(row: string) {
  return row
    .split("|")
    .map((cell) => cell.trim())
    .filter(Boolean);
}

function escapeHtml(text: string) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getRequiredElement<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Required element #${id} was not found.`);
  }

  return element as T;
}
