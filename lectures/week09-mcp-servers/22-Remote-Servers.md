---
title: "Remote MCP Servers"
section: Production Patterns
layout: standard
---

# Remote MCP Servers

Moving from local (stdio) to remote (Streamable HTTP) for production deployment.

**Streamable HTTP transport:**

```typescript
import express from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from
  "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { randomUUID } from "node:crypto";

const app = express();
app.use(express.json());

const server = new McpServer({ name: "sql-explorer", version: "1.0.0" });
// ... register tools and resources ...

const transports: Record<string, StreamableHTTPServerTransport> = {};

app.post("/mcp", async (req, res) => {
  // Check for existing session
  const sessionId = req.headers["mcp-session-id"] as string | undefined;
  let transport: StreamableHTTPServerTransport;

  if (sessionId && transports[sessionId]) {
    transport = transports[sessionId];
  } else {
    transport = new StreamableHTTPServerTransport({ sessionId: randomUUID() });
    transports[transport.sessionId!] = transport;
    await server.connect(transport);
  }
  await transport.handleRequest(req, res);
});

app.listen(3001, () => console.log("MCP server on :3001/mcp"));
```

**Why remote?**
- Shared server for a team — one deployment, many clients
- Centralized secrets — no tokens on developer machines
- Horizontal scaling — run behind a load balancer
- Easier updates — deploy once, all clients get the new version
- Access control — add auth middleware in front of the `/mcp` endpoint

## Sources

- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP Specification](https://modelcontextprotocol.io)
