---
title: "Wire Format: JSON-RPC 2.0"
section: Protocol
layout: standard
---

# Built on JSON-RPC 2.0

MCP is not a new wire format. It reuses [JSON-RPC 2.0](https://www.jsonrpc.org/specification): a minimal, transport-agnostic remote-procedure-call standard from 2010 that's already widely deployed (Ethereum, language servers, etc.).

## The three message shapes

```json
// Request — expects a response
{"jsonrpc": "2.0", "id": 7, "method": "tools/call",
 "params": {"name": "read_file", "arguments": {"path": "/tmp/x"}}}

// Response — paired by id
{"jsonrpc": "2.0", "id": 7, "result": {"content": [{"type": "text", "text": "..."}]}}

// Notification — fire-and-forget, no id
{"jsonrpc": "2.0", "method": "notifications/progress",
 "params": {"progressToken": "abc", "progress": 0.4}}
```

## Why JSON-RPC

- **Bidirectional** — servers can send notifications to clients (progress, log entries, resource changes); clients can issue requests to servers. No SSE or websocket gymnastics required at the protocol layer
- **Transport-agnostic** — the same envelope works over stdio (local server), HTTP+SSE (remote streaming), or streamable HTTP (long-poll friendly)
- **Battle-tested** — Language Server Protocol (LSP) has used JSON-RPC across every major editor for nearly a decade

## What MCP adds on top

- A negotiated set of methods (`initialize`, `tools/list`, `tools/call`, `resources/read`, `prompts/get`, …)
- Capability flags exchanged at handshake time (server says "I support tool listing changes notifications", client says "I support sampling")
- Structured content blocks (`text`, `image`, `resource`) for tool results, mirroring the model's own content model

Sources

- [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)
- [MCP — Base Protocol](https://modelcontextprotocol.io/specification/2025-03-26/basic)
- [LSP uses JSON-RPC](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/) — reference deployment
