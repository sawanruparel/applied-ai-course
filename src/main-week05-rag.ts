import { initDeck } from "./viewer";
import slideManifest from "../lectures/week05-rag/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week05-rag/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "RAG 2.0",
  railTitle: "RAG 2.0",
});
