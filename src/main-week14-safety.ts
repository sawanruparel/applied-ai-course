import { initDeck } from "./viewer";
import slideManifest from "../lectures/week14-safety/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week14-safety/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "Safety & Red-Teaming",
  railTitle: "Safety & Red-Teaming",
});
