---
title: Tools
section: Core Concepts
layout: two-column
---

## Definition
Tools are typed actions the model can call. Each tool has a `name`, `description`, and `inputSchema` (JSON Schema). The server exposes them via `tools/list`; the client invokes via `tools/call`.

## Examples
- `filesystem/read_file` — read a local file by path
- `github/create_issue` — open an issue with title and body
- `postgres/query` — run a SQL query and return rows

> Model-controlled: the LLM decides when and how to call them, with human-in-the-loop approval.

## Sources

- [MCP Specification — Tools](https://modelcontextprotocol.io)
