import { initDeck } from "./viewer";
import slideManifest from "../lectures/graphrag/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/graphrag/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "GraphRAG Lecture Deck",
  railTitle: "GraphRAG Slides",
});
