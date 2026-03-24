import { initDeck } from "./viewer";
import slideManifest from "../lectures/week12-small-models/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week12-small-models/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "The Small Model Strategy",
  railTitle: "The Small Model Strategy",
});
