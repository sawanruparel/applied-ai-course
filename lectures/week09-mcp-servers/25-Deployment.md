---
title: "Deploying MCP Servers"
section: Production Patterns
layout: cards
---

# Deploying MCP Servers

## Docker Container

```dockerfile
FROM node:22-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY dist/ ./dist/

# For stdio transport (local):
ENTRYPOINT ["node", "dist/index.js"]

# For HTTP transport (remote):
# EXPOSE 3001
# CMD ["node", "dist/server.js"]
```

```bash
docker build -t my-mcp-server .
# stdio usage:
docker run -i my-mcp-server
# HTTP usage:
docker run -p 3001:3001 my-mcp-server
```

Stateless containers. Easy to version, rollback, and scale.

## Cloud Functions

Deploy each tool as a serverless function:

- **AWS Lambda** + API Gateway
- **Google Cloud Run** — container-based
- **Cloudflare Workers** — edge deployment

Good for low-traffic, bursty workloads. Pay per invocation. Cold starts can add latency.

Wrap the Streamable HTTP transport in your function handler.

## MCP Proxy Pattern

Run a lightweight proxy that routes to multiple backend MCP servers:

```
Client → MCP Proxy → SQL Server
                   → Jira Server
                   → Slack Server
```

The proxy handles:
- Authentication and authorization
- Rate limiting across all servers
- Centralized logging and metrics
- Server discovery and health checks

Useful for organizations managing many MCP servers across teams.

## npx / Registry

For open-source or shared servers:

```bash
# Publish to npm
npm publish

# Users run directly
npx @myorg/sql-mcp-server
```

Claude Desktop config:
```json
{
  "mcpServers": {
    "sql": {
      "command": "npx",
      "args": ["@myorg/sql-mcp-server"],
      "env": { "DB_URL": "..." }
    }
  }
}
```

Zero install for end users. Version pinning via npm.

## Sources

- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP Specification](https://modelcontextprotocol.io)
