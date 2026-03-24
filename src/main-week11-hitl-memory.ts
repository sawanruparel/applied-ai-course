import { initDeck } from "./viewer";
import slideManifest from "../lectures/week11-hitl-memory/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week11-hitl-memory/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "Human-in-the-Loop & Memory",
  railTitle: "Human-in-the-Loop & Memory",
});
