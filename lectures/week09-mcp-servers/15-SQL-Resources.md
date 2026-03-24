---
title: "SQL Resources for Context"
section: Building a SQL MCP Server
layout: standard
---

# SQL Resources for Context

Resources give the LLM **pre-loaded context** so it can write better queries without calling tools first.

```typescript
import { ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";

// Resource: full database schema overview
server.resource(
  "database-schema",
  "schema://database",
  { description: "Complete schema for all tables including columns and types" },
  async (uri) => {
    const tables = await db.all(
      "SELECT name FROM sqlite_master WHERE type='table'"
    );
    const schema: Record<string, any> = {};
    for (const { name } of tables) {
      schema[name] = await db.all(`PRAGMA table_info(${name})`);
    }
    return {
      contents: [{
        uri: uri.href,
        mimeType: "application/json",
        text: JSON.stringify(schema, null, 2),
      }],
    };
  }
);

// Resource template: per-table sample data
server.resource(
  "table-sample",
  new ResourceTemplate("data://tables/{tableName}/sample", {
    list: async () => {
      const tables = await db.all(
        "SELECT name FROM sqlite_master WHERE type='table'"
      );
      return tables.map(t => ({
        uri: `data://tables/${t.name}/sample`,
        name: `Sample: ${t.name}`,
        description: `First 5 rows of the ${t.name} table`,
      }));
    },
  }),
  async (uri, { tableName }) => {
    const safeName = String(tableName).replace(/[^a-zA-Z0-9_]/g, "");
    const rows = await db.all(`SELECT * FROM ${safeName} LIMIT 5`);
    return {
      contents: [{
        uri: uri.href,
        mimeType: "application/json",
        text: JSON.stringify(rows, null, 2),
      }],
    };
  }
);
```

**Why this matters:** If the host preloads the schema resource, the LLM can go straight to writing SQL without calling `list_tables` + `describe_table` first.
