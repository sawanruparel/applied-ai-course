import { initDeck } from "./viewer";
import slideManifest from "../lectures/week13-distillation/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week13-distillation/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "Knowledge Distillation & Fine-Tuning",
  railTitle: "Knowledge Distillation & Fine-Tuning",
});
