---
title: Comparison
section: Comparison
layout: standard
---

# MCP vs Alternatives

| Approach | Limitation | MCP Advantage |
| --- | --- | --- |
| OpenAI function calling | Locked to OpenAI API format | Model-agnostic, works with any LLM |
| LangChain tools | Requires LangChain runtime | Protocol-level, no framework dependency |
| REST APIs | No discovery, no typing for agents | Runtime discovery via `tools/list` |
| ChatGPT Plugins | Deprecated, static manifests | Dynamic capabilities, bidirectional |

## Sources

- [MCP Specification](https://modelcontextprotocol.io)
- [OpenAPI Specification](https://www.openapis.org/)
- [LangChain](https://www.langchain.com)
