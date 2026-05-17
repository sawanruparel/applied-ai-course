---
title: Dynamic Discovery
section: Architecture
layout: center
---

> "What can I do right now?"

The client calls `tools/list` at connection time — the server responds with every tool's name, description, and input schema. No hardcoded manifests.

Servers can also send `notifications/tools/list_changed` to signal that capabilities have updated mid-session.

Discuss: why is dynamic discovery better than static plugin registries like ChatGPT's `ai-plugin.json`?

## Sources

- [MCP Specification](https://modelcontextprotocol.io)
