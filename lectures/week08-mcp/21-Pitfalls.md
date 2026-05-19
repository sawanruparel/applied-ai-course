---
title: "Common Pitfalls"
section: Operations
layout: standard
---

# What Goes Wrong in Practice

The protocol is small; most production trouble comes from how tools are *designed*, not from MCP itself.

## Tool-design pitfalls

| Pitfall | Symptom | Fix |
|---------|---------|-----|
| Too many tools | Model picks the wrong one; context bloats | Consolidate; use tool search |
| Tool name collisions across servers | Random failures, model confusion | Namespace at the host (`server.tool`) |
| Stateful tools (turn 1 returns a handle, turn 2 uses it) | Session drift, weird retries | Make tools stateless; return all needed data |
| Returning huge results inline | Context exhaustion in 2 turns | Return a resource URI; let the host decide whether to inline |
| Tool descriptions written for humans | Model fails to invoke correctly | Write descriptions like API docs *for the model* |
| Schemas without enums or formats | Hallucinated arg values | Use `enum`, `format: date-time`, regex `pattern` |

## Protocol-level pitfalls

- **Forgetting `notifications/initialized`** — server might emit `tools/list_changed` before the client is ready, dropping the event
- **Mismatched protocol versions** — the spec requires version negotiation, but some early servers hardcode a version and crash if a newer client connects. Pin to the lowest supported version in your handshake handler
- **stdio servers writing to stdout for non-JSON output** — logs go to **stderr**. A debug `print` to stdout will corrupt the JSON-RPC stream

## Operational pitfalls

- **Cold-start latency** on stdio servers can be hundreds of ms — a long-running daemon mode is usually better than spinning up per request
- **Process leaks** — the host is supposed to kill the server subprocess on disconnect, but bugs (and crashes) leak processes
- **Auth tokens in config files** — most hosts pin tokens in plaintext config. Treat those files like SSH keys

## Debugging checklist

- Run the server outside the host (`python server.py < input.jsonl`) — proves it's not a host bug
- Use the [`mcp-inspector`](https://github.com/modelcontextprotocol/inspector) — a browser-based debugger that talks to any MCP server
- Turn on debug logging on the host and the server; compare timestamps to find which side hung

Sources

- [MCP Inspector](https://github.com/modelcontextprotocol/inspector)
- [Anthropic — Tool use best practices](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview)
