import { initDeck } from "./viewer";
import slideManifest from "../lectures/week02-prompting/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week02-prompting/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "Advanced Prompt Engineering",
  railTitle: "Advanced Prompt Engineering",
});
