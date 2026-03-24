import { initDeck } from "./viewer";
import slideManifest from "../lectures/week04-knowledge-rep/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week04-knowledge-rep/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "Knowledge Representation",
  railTitle: "Knowledge Representation",
});
