import { initDeck } from "./viewer";
import slideManifest from "../lectures/week08-mcp/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week08-mcp/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "MCP Lecture Deck",
  railTitle: "MCP Slides",
});
