---
title: "Implementing Tool Handlers"
section: MCP Server Fundamentals
layout: standard
---

# Implementing Tool Handlers

The handler receives validated params and must return a `CallToolResult`.

```typescript
server.tool(
  "run_query",
  "Execute a read-only SQL SELECT query. Returns up to 100 rows.",
  {
    sql: z.string().describe("SQL SELECT query to execute"),
    params: z.array(z.union([z.string(), z.number()])).optional(),
  },
  async ({ sql, params }) => {
    // 1. Validate the query
    const trimmed = sql.trim().toUpperCase();
    if (!trimmed.startsWith("SELECT")) {
      return {
        content: [{
          type: "text",
          text: "Error: Only SELECT queries are allowed.",
        }],
        isError: true,
      };
    }

    // 2. Execute against your data source
    const rows = await db.query(sql, params ?? []);

    // 3. Return results as content
    return {
      content: [{
        type: "text",
        text: JSON.stringify(rows.slice(0, 100), null, 2),
      }],
    };
  }
);
```

**Handler contract:**
- Receives an object matching your Zod schema (already validated by the SDK)
- Must return `{ content: [...], isError?: boolean }`
- Content items can be `text`, `image`, or `resource` types
- Set `isError: true` to signal failure — the LLM will see the error message and can retry or ask the user
- Throw exceptions only for unexpected failures — prefer returning `isError` for business logic errors

## Sources

- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP Specification](https://modelcontextprotocol.io)
