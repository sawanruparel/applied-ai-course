---
title: Operational Reality
section: Limitations
layout: center
---

# MCP Systems Are Distributed Systems

- **Latency**: each `tools/call` is a round-trip — stdio is fast (~ms), HTTP adds network latency
- **Failures**: a crashed server drops all its tools mid-conversation; no automatic reconnection yet
- **Concurrency**: multiple tool calls in flight need request ID tracking (JSON-RPC handles this)
- **Observability**: no standardized tracing — hard to debug why a tool call failed across the client-server boundary

## Sources

- [MCP Specification](https://modelcontextprotocol.io)
- [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)
