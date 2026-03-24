import { initDeck } from "./viewer";
import slideManifest from "../lectures/mcp/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/mcp/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "MCP Lecture Deck",
  railTitle: "MCP Slides",
});
