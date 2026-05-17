---
title: CLI-First Systems
section: Design Patterns
layout: diagram
---

# CLI Flow

```text
Claude Code (CLI)
    ↓ stdio
  MCP Servers (filesystem, git, GitHub)
    ↓
  Local files + Remote APIs
```

No GUI required. Claude Code connects to MCP servers over `stdio`, discovers tools at startup, and the LLM orchestrates everything from the terminal. The same servers work in desktop apps or web clients.

## Sources

- [Claude Code](https://claude.com/product/claude-code)
- [MCP Specification](https://modelcontextprotocol.io)
