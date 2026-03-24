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
        mcp: resolve(__dirname, "mcp.html"),
        graphrag: resolve(__dirname, "graphrag.html"),
        "week01-landscape": resolve(__dirname, "week01-landscape.html"),
        "week02-prompting": resolve(__dirname, "week02-prompting.html"),
        "week03-dev-stack": resolve(__dirname, "week03-dev-stack.html"),
        "week04-knowledge-rep": resolve(__dirname, "week04-knowledge-rep.html"),
        "week05-rag": resolve(__dirname, "week05-rag.html"),
        "week07-evaluation": resolve(__dirname, "week07-evaluation.html"),
        "week09-mcp-servers": resolve(__dirname, "week09-mcp-servers.html"),
        "week10-multi-agent": resolve(__dirname, "week10-multi-agent.html"),
        "week11-hitl-memory": resolve(__dirname, "week11-hitl-memory.html"),
        "week12-small-models": resolve(__dirname, "week12-small-models.html"),
        "week13-distillation": resolve(__dirname, "week13-distillation.html"),
        "week14-safety": resolve(__dirname, "week14-safety.html"),
        "week15-capstone": resolve(__dirname, "week15-capstone.html"),
      },
    },
  },
});
