---
title: "Anatomy of an MCP Server"
section: Framing
layout: diagram
---

# Anatomy of an MCP Server

```
┌─────────────────────────────────────────────────┐
│                   MCP HOST                      │
│  (Claude Desktop / IDE / Custom App)            │
│                                                 │
│   ┌──────────┐                                  │
│   │MCP Client│──── JSON-RPC 2.0 ────┐          │
│   └──────────┘                       │          │
└──────────────────────────────────────│──────────┘
                                       │
                              ┌────────▼─────────┐
                              │   MCP SERVER      │
                              │                   │
                              │ ┌───────────────┐ │
                              │ │  Transport    │ │  ← stdio or Streamable HTTP
                              │ │  Layer        │ │
                              │ └───────┬───────┘ │
                              │         │         │
                              │ ┌───────▼───────┐ │
                              │ │  Request      │ │  ← Routes initialize,
                              │ │  Handler      │ │    tools/list, tools/call,
                              │ └───────┬───────┘ │    resources/read
                              │         │         │
                              │ ┌───────▼───────┐ │
                              │ │  Tool & Rsrc  │ │  ← Your business logic:
                              │ │  Registry     │ │    SQL queries, API calls,
                              │ └───────┬───────┘ │    data transforms
                              │         │         │
                              └─────────│─────────┘
                                        │
                              ┌─────────▼─────────┐
                              │  External System   │
                              │  (DB / API / SaaS) │
                              └────────────────────┘
```

The SDK handles transport + request routing. **You implement the tools and resources.**

## Sources

- [MCP Specification](https://modelcontextprotocol.io)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
