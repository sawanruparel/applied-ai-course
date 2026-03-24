import { initDeck } from "./viewer";
import slideManifest from "../lectures/week09-mcp-servers/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week09-mcp-servers/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "Building MCP Servers",
  railTitle: "Building MCP Servers",
});
