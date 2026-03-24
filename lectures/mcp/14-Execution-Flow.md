---
title: Execution Flow
section: Lifecycle
layout: flow
---

# Lifecycle

1. Connect — client sends `initialize` with `protocolVersion` and `capabilities`
2. Discover — client calls `tools/list`, `resources/list`, `prompts/list`
3. Select — LLM picks a tool or the user selects a prompt
4. Execute — client sends `tools/call` with `name` and `arguments`
5. Respond — server returns `content[]` (text, images, or embedded resources)

`initialize → list → call/read/get → result`

## Sources

- [MCP Specification — Lifecycle](https://modelcontextprotocol.io)
