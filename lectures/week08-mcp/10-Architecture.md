---
title: System Architecture
section: Architecture
layout: diagram
---

# Host / Agent Runtime

```text
Host (Claude Desktop, IDE, Agent)
        ↓  creates 1:1
     MCP Client ──── JSON-RPC 2.0 ────  MCP Server(s)
                     (stdio or HTTP)         ↓
                                     Tools | Resources | Prompts
```

Transport: `stdio` for local processes, `Streamable HTTP` for remote servers. All messages are JSON-RPC 2.0 — requests, responses, and notifications.

## Sources

- [MCP Specification — Architecture](https://modelcontextprotocol.io)
- [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)
