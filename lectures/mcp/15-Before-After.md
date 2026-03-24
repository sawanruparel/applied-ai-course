---
title: Before vs After
section: Lifecycle
layout: two-column
---

## Before MCP
- Hardcoded API calls baked into agent code
- Tool schemas embedded in system prompts as text
- Switching from OpenAI to Anthropic = rewrite all integrations
- Each team builds custom "connectors" from scratch

## After MCP
- Tools described with JSON Schema, discovered at runtime
- Same server works with Claude, GPT, Gemini, or any client
- Add a new capability by pointing to a new server — zero code changes
- Community servers: 1000+ open-source MCP servers on GitHub

## Sources

- [MCP Specification](https://modelcontextprotocol.io)
- [MCP GitHub Organization](https://github.com/modelcontextprotocol)
