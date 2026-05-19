---
title: "Anatomy of an MCP Server"
section: Framing
layout: diagram
---

# Anatomy of an MCP Server

```mermaid
flowchart TB
    subgraph Host["MCP Host (Claude Desktop / IDE)"]
      Client[MCP Client]
    end
    subgraph Server["MCP Server"]
      Transport["Transport layer<br/>(stdio or HTTP)"]
      Router["Request handler<br/>initialize, tools/*, resources/*"]
      Registry["Tool & resource registry<br/>(your business logic)"]
      Transport --> Router --> Registry
    end
    External[("External system<br/>DB / API / SaaS")]
    Client <-->|JSON-RPC 2.0| Transport
    Registry --> External
```

The SDK handles transport + request routing. **You implement the tools and resources.**

## Sources

- [MCP Specification](https://modelcontextprotocol.io)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
