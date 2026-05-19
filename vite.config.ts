import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 4173,
  },
  preview: {
    port: 4173,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "week01-landscape": resolve(__dirname, "pages/week01-landscape.html"),
        "week02-prompting": resolve(__dirname, "pages/week02-prompting.html"),
        "week03-dev-stack": resolve(__dirname, "pages/week03-dev-stack.html"),
        "week04-knowledge-rep": resolve(__dirname, "pages/week04-knowledge-rep.html"),
        "week05-rag": resolve(__dirname, "pages/week05-rag.html"),
        "week06-graphrag": resolve(__dirname, "pages/week06-graphrag.html"),
        "week07-evaluation": resolve(__dirname, "pages/week07-evaluation.html"),
        "week08-mcp": resolve(__dirname, "pages/week08-mcp.html"),
        "week09-mcp-servers": resolve(__dirname, "pages/week09-mcp-servers.html"),
        "week10-multi-agent": resolve(__dirname, "pages/week10-multi-agent.html"),
        "week11-hitl-memory": resolve(__dirname, "pages/week11-hitl-memory.html"),
        "week12-small-models": resolve(__dirname, "pages/week12-small-models.html"),
        "week13-distillation": resolve(__dirname, "pages/week13-distillation.html"),
        "week14-safety": resolve(__dirname, "pages/week14-safety.html"),
        "week15-capstone": resolve(__dirname, "pages/week15-capstone.html"),
      },
    },
  },
});
