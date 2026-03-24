---
title: "Defining Tools"
section: MCP Server Fundamentals
layout: standard
---

# Defining Tools

Every tool has three parts: **name**, **description**, and **inputSchema**.

The description is critical — it's what the LLM reads to decide when to use the tool.

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const server = new McpServer({
  name: "sql-server",
  version: "1.0.0",
});

server.tool(
  // Tool name — concise, snake_case
  "run_query",

  // Description — be specific about what it does and when to use it
  "Execute a read-only SQL SELECT query against the database. " +
  "Use this when the user wants to retrieve or analyze data. " +
  "Always prefer parameterized queries. Returns up to 100 rows.",

  // Input schema using Zod (auto-converted to JSON Schema)
  {
    sql: z.string().describe("The SQL SELECT query to execute"),
    params: z.array(z.union([z.string(), z.number()]))
      .optional()
      .describe("Parameterized query values for ? placeholders"),
  },

  // Handler — we'll cover this next
  async ({ sql, params }) => {
    // ... implementation ...
  }
);
```

**Tips for good tool descriptions:**
- Explain *when* the LLM should use this tool, not just *what* it does
- Mention constraints (read-only, row limits, required fields)
- Use parameter `.describe()` to guide the LLM on each input

## Sources

- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [Zod — TypeScript Schema Validation](https://zod.dev/)
