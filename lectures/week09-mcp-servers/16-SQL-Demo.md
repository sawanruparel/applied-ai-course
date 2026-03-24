---
title: "SQL Server Demo"
section: Building a SQL MCP Server
layout: standard
---

# SQL Server Demo

**Putting it all together — the full server entry point:**

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import Database from "better-sqlite3";
import { z } from "zod";

const DB_PATH = process.env.DATABASE_URL ?? "./sample.db";
const db = new Database(DB_PATH, { readonly: true });
db.pragma("journal_mode = WAL");

const server = new McpServer({ name: "sql-explorer", version: "1.0.0" });

server.tool("list_tables", "List all tables in the database.", {}, async () => {
  const tables = db.prepare(
    "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name"
  ).all();
  return { content: [{ type: "text", text: JSON.stringify(tables) }] };
});

server.tool("run_query", "Execute a read-only SELECT query (max 100 rows).", {
  sql: z.string().describe("SQL SELECT query"),
}, async ({ sql }) => {
  if (!/^\s*SELECT\b/i.test(sql)) {
    return { content: [{ type: "text", text: "Only SELECT queries allowed." }], isError: true };
  }
  const rows = db.prepare(sql).all().slice(0, 100);
  return { content: [{ type: "text", text: JSON.stringify(rows, null, 2) }] };
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

**Try in Claude Desktop:**

> "What tables are in this database?"
> "How many orders were placed last month?"
> "Show me the top 5 customers by total spend"

The LLM discovers the schema, writes SQL, and answers — all through your MCP server.

## Sources

- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- [Zod](https://zod.dev/)
