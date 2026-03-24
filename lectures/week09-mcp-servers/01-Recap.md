---
title: "MCP Recap from Week 8"
section: Framing
layout: standard
---

# MCP Recap from Week 8

- **Model Context Protocol (MCP)** — an open standard for connecting LLMs to external data and tools
- Three roles in the architecture:
  - **Host** — the application (Claude Desktop, IDE, custom app)
  - **Client** — manages 1:1 connection to a server (lives inside the host)
  - **Server** — exposes capabilities to the LLM
- Communication uses **JSON-RPC 2.0** over a transport layer
- Servers expose three primitive types:
  - **Tools** — functions the LLM can invoke (model-controlled)
  - **Resources** — data the LLM can read (application-controlled)
  - **Prompts** — reusable prompt templates (user-controlled)
- The LLM decides *when* to call tools based on the user's request
- Last week: consumed existing MCP servers. This week: **build our own**.

## Sources

- [MCP Specification](https://modelcontextprotocol.io)
- [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)
