---
title: Multi-Server Model
section: Architecture
layout: diagram
---

# One Agent, Many Servers

```text
        Claude Desktop (Host)
       ↙        ↓          ↘
  Filesystem   GitHub    Postgres
  (stdio)      (stdio)   (HTTP)
  3 tools      15 tools  4 tools
```

Each client-server connection is 1:1. The host aggregates all tools into one unified list the LLM can choose from. Adding a server = adding capabilities with zero agent code changes.

## Sources

- [MCP Specification — Architecture](https://modelcontextprotocol.io)
