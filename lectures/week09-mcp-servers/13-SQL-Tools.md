---
title: "SQL Server Tools"
section: Building a SQL MCP Server
layout: cards
---

# SQL Server Tools

## list_tables

```typescript
server.tool(
  "list_tables",
  "List all tables in the database " +
  "with row counts. Call this first " +
  "to discover available data.",
  {},
  async () => {
    const tables = await db.all(`
      SELECT name FROM sqlite_master
      WHERE type='table'
      ORDER BY name
    `);
    return {
      content: [{
        type: "text",
        text: JSON.stringify(tables),
      }],
    };
  }
);
```

## describe_table

```typescript
server.tool(
  "describe_table",
  "Get column names, types, and " +
  "constraints for a specific table. " +
  "Call before writing queries.",
  {
    table: z.string()
      .describe("Table name to describe"),
  },
  async ({ table }) => {
    const safeName = table.replace(
      /[^a-zA-Z0-9_]/g, ""
    );
    const cols = await db.all(
      `PRAGMA table_info(${safeName})`
    );
    return {
      content: [{
        type: "text",
        text: JSON.stringify(cols, null, 2),
      }],
    };
  }
);
```

## run_query

```typescript
server.tool(
  "run_query",
  "Execute a read-only SQL SELECT " +
  "query. Returns max 100 rows. " +
  "Use parameter binding for values.",
  {
    sql: z.string()
      .describe("SQL SELECT query"),
    params: z.array(
      z.union([z.string(), z.number()])
    ).optional()
      .describe("Query parameter values"),
  },
  async ({ sql, params }) => {
    if (!sql.trim().toUpperCase()
        .startsWith("SELECT")) {
      return {
        content: [{ type: "text",
          text: "Only SELECT allowed" }],
        isError: true,
      };
    }
    const rows = await db.all(
      sql, params ?? []
    );
    return {
      content: [{ type: "text",
        text: JSON.stringify(
          rows.slice(0, 100), null, 2
        ),
      }],
    };
  }
);
```

## explain_query

```typescript
server.tool(
  "explain_query",
  "Get the execution plan for a SQL " +
  "query. Use to understand " +
  "performance before running.",
  {
    sql: z.string()
      .describe("SQL query to explain"),
  },
  async ({ sql }) => {
    const plan = await db.all(
      `EXPLAIN QUERY PLAN ${sql}`
    );
    return {
      content: [{
        type: "text",
        text: JSON.stringify(plan, null, 2),
      }],
    };
  }
);
```
