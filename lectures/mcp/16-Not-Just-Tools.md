---
title: Not Just Tool Calling
section: Lifecycle
layout: center
---

# MCP Enables More Than Tool Calling

- **Tool execution** — `tools/call` lets the model take actions
- **Context retrieval** — `resources/read` injects data without executing anything
- **Guided workflows** — `prompts/get` provides structured interaction templates
- **Notifications** — servers push `notifications/tools/list_changed` when capabilities update
- **Sampling** — servers can request the client to run an LLM completion (bidirectional)

MCP is a runtime system, not a single feature.

## Sources

- [MCP Specification](https://modelcontextprotocol.io)
