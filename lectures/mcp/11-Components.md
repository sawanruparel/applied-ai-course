---
title: Components
section: Architecture
layout: two-column
---

## MCP Client
- Lives inside the host app (Claude Desktop, Cursor, Zed)
- Sends `initialize` with client capabilities and protocol version
- Calls `tools/call`, `resources/read`, `prompts/get`
- Maintains a 1:1 connection per server

## MCP Server
- Responds to `initialize` with its own capabilities
- Exposes tools, resources, and prompts via `list` methods
- Can run as a local `stdio` process or remote HTTP service
- Examples: `@modelcontextprotocol/server-filesystem`, `server-github`, `server-postgres`

## Sources

- [MCP Specification](https://modelcontextprotocol.io)
- [MCP GitHub Organization](https://github.com/modelcontextprotocol)
