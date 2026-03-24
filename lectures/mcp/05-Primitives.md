---
title: MCP Primitives
section: Core Concepts
layout: cards
---

## Tools (Model-controlled)
Actions the LLM decides to call. Example: `tools/call` with `create_issue`. The model picks when and how.

## Resources (App-controlled)
Read-only data the host attaches to context. Example: `resources/read` a file URI. The app decides what to include.

## Prompts (User-controlled)
Templated workflows the user explicitly selects. Example: `prompts/get` for `summarize-issue`. Think slash commands.

## Sources

- [MCP Specification — Primitives](https://modelcontextprotocol.io)
