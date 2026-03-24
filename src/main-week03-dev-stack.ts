import { initDeck } from "./viewer";
import slideManifest from "../lectures/week03-dev-stack/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week03-dev-stack/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "The Developer Stack",
  railTitle: "The Developer Stack",
});
