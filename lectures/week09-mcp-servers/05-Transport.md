---
title: "Transport Layer"
section: MCP Server Fundamentals
layout: two-column
---

# Transport Layer

## stdio (Local)

Best for local development and Claude Desktop.

```typescript
import { McpServer } from
  "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from
  "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "my-sql-server",
  version: "1.0.0",
});

// ... register tools ...

const transport = new StdioServerTransport();
await server.connect(transport);
```

- Host spawns server as a child process
- Communication over stdin/stdout
- Simple, no network config needed
- **Use this for the lab**

## Streamable HTTP (Remote)

Best for production, shared servers.

```typescript
import { McpServer } from
  "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from
  "@modelcontextprotocol/sdk/server/streamableHttp.js";
import express from "express";

const app = express();
const server = new McpServer({
  name: "my-sql-server",
  version: "1.0.0",
});

// ... register tools ...

app.post("/mcp", async (req, res) => {
  const transport =
    new StreamableHTTPServerTransport({ ... });
  await server.connect(transport);
  await transport.handleRequest(req, res);
});

app.listen(3001);
```

- Single HTTP endpoint (POST)
- Supports SSE for streaming
- Deploy anywhere: Docker, cloud, etc.

## Sources

- [MCP Specification — Transports](https://modelcontextprotocol.io)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
