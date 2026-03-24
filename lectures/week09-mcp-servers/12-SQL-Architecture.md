---
title: "SQL Server Architecture"
section: Building a SQL MCP Server
layout: diagram
---

# SQL Server Architecture

```
┌──────────────┐     JSON-RPC 2.0      ┌─────────────────────────┐
│              │     over stdio         │    MCP SQL Server       │
│  Claude      │◄──────────────────────►│                         │
│  Desktop     │                        │  ┌───────────────────┐  │
│              │  tools/list ──────────►│  │ Tool Registry     │  │
│  "Show me    │                        │  │                   │  │
│   sales by   │  tools/call ─────────►│  │ • list_tables     │  │
│   region"    │  {run_query, sql}      │  │ • describe_table  │  │
│              │                        │  │ • run_query       │  │
│              │  resources/read ──────►│  │ • explain_query   │  │
│              │  schema://main         │  └────────┬──────────┘  │
└──────────────┘                        │           │             │
                                        │  ┌────────▼──────────┐  │
                                        │  │ Database Layer    │  │
                                        │  │                   │  │
                                        │  │ • Connection pool │  │
                                        │  │ • Read-only mode  │  │
                                        │  │ • Query timeout   │  │
                                        │  │ • Row limit       │  │
                                        │  └────────┬──────────┘  │
                                        └───────────│─────────────┘
                                                    │
                                        ┌───────────▼─────────────┐
                                        │   SQLite / PostgreSQL   │
                                        │                         │
                                        │  employees | departments│
                                        │  orders    | products   │
                                        │  sales     | regions    │
                                        └─────────────────────────┘
```

All queries go through a **read-only connection** with timeout and row limits.
