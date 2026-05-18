// Dynamic, lazy mermaid loader. Mermaid is ~500KB minified — we only pay for
// it on slides that actually have a diagram. The first slide with a `.mermaid`
// node triggers the import; subsequent slides reuse the cached module.

let mermaidPromise: Promise<typeof import("mermaid").default> | null = null;

function pickTheme(): "dark" | "default" {
  const t = document.documentElement.getAttribute("data-theme");
  return t === "light" ? "default" : "dark";
}

function loadMermaid(): Promise<typeof import("mermaid").default> {
  if (!mermaidPromise) {
    mermaidPromise = import("mermaid").then((m) => {
      m.default.initialize({
        startOnLoad: false,
        theme: pickTheme(),
        securityLevel: "strict",
        fontFamily: "Inter, system-ui, sans-serif",
        flowchart: { useMaxWidth: true, htmlLabels: true },
        sequence: { useMaxWidth: true },
      });
      return m.default;
    });
  }
  return mermaidPromise;
}

export async function renderMermaidIn(container: HTMLElement): Promise<void> {
  const nodes = container.querySelectorAll<HTMLElement>(".mermaid:not([data-processed])");
  if (nodes.length === 0) return;

  try {
    const mermaid = await loadMermaid();
    await mermaid.run({ nodes: Array.from(nodes) });
  } catch (err) {
    console.error("mermaid render failed", err);
    // Fall back to showing the raw text as a code block so the slide isn't blank.
    nodes.forEach((node) => {
      if (node.dataset.processed) return;
      const raw = node.textContent ?? "";
      node.outerHTML = `<pre class="diagram diagram--mermaid-fallback"><code>${escapeHtml(raw)}</code></pre>`;
    });
  }
}

function escapeHtml(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
