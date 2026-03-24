import { initDeck } from "./viewer";
import slideManifest from "../lectures/week07-evaluation/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week07-evaluation/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "Evaluation & LLM-as-Judge",
  railTitle: "Evaluation & LLM-as-Judge",
});
