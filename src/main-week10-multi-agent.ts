import { initDeck } from "./viewer";
import slideManifest from "../lectures/week10-multi-agent/slides.json";

initDeck({
  slides: slideManifest,
  markdownModules: import.meta.glob("../lectures/week10-multi-agent/*.md", {
    query: "?raw",
    import: "default",
  }) as Record<string, () => Promise<string>>,
  deckTitle: "Multi-Agent Workflows",
  railTitle: "Multi-Agent Workflows",
});
