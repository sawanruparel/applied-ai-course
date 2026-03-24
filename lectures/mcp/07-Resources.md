---
title: Resources
section: Core Concepts
layout: two-column
---

## Definition
Resources are read-only data identified by URIs. The client discovers them via `resources/list` and fetches via `resources/read`. They return text or binary content with MIME types.

## Examples
- `file:///repo/README.md` — a local file
- `postgres://db/users/schema` — a table schema
- `screen://screenshot` — a live screenshot

> Application-controlled: the host decides which resources to include in context, not the model.

## Sources

- [MCP Specification — Resources](https://modelcontextprotocol.io)
