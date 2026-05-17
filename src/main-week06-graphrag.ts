import { initDeck } from "./viewer";
import slideManifest from "../lectures/week06-graphrag/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week06-graphrag/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "GraphRAG Lecture Deck",
  railTitle: "GraphRAG Slides",
});
