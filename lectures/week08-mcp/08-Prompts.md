---
title: Prompts
section: Core Concepts
layout: two-column
---

## Definition
Prompts are reusable message templates exposed via `prompts/list` and retrieved via `prompts/get`. They accept arguments and return structured message arrays ready for the LLM.

## Why They Matter
- Parameterized: `summarize-issue` takes `{repo, issue_number}`
- Composable: a prompt can embed resource URIs and suggest tools
- User-controlled: the user explicitly selects which prompt to use

> They shape how an interaction begins — think of them as "slash commands" for agents.

## Sources

- [MCP Specification — Prompts](https://modelcontextprotocol.io)
