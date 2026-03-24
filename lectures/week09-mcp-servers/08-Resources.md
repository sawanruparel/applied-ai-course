---
title: "Implementing Resources"
section: MCP Server Fundamentals
layout: standard
---

# Implementing Resources

Resources provide **read-only context** that the host application can fetch and inject into the LLM's context window.

```typescript
// Static resource — fixed URI
server.resource(
  "db-schema",
  "schema://main",
  { description: "Complete database schema for all tables" },
  async (uri) => ({
    contents: [{
      uri: uri.href,
      mimeType: "text/plain",
      text: await db.getSchemaDescription(),
    }],
  })
);

// Resource template — dynamic URI with parameters
server.resource(
  "table-schema",
  new ResourceTemplate("schema://tables/{tableName}", {
    list: async () => {
      const tables = await db.listTables();
      return tables.map(t => ({
        uri: `schema://tables/${t.name}`,
        name: `Schema: ${t.name}`,
      }));
    },
  }),
  { description: "Schema for a specific table" },
  async (uri, { tableName }) => ({
    contents: [{
      uri: uri.href,
      mimeType: "application/json",
      text: JSON.stringify(await db.describeTable(tableName)),
    }],
  })
);
```

**When to use resources vs tools:**
- **Resources** — static or semi-static context (schemas, docs, config). Loaded by the host/app.
- **Tools** — dynamic operations the LLM invokes on demand (queries, API calls, writes).

## Sources

- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP Specification](https://modelcontextprotocol.io)
