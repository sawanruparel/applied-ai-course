import { initDeck } from "./viewer";
import slideManifest from "../lectures/week15-capstone/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week15-capstone/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "Capstone Showcase",
  railTitle: "Capstone Showcase",
});
