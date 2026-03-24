import { initDeck } from "./viewer";
import slideManifest from "../lectures/week01-landscape/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week01-landscape/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "The 2026 Landscape",
  railTitle: "The 2026 Landscape",
});
