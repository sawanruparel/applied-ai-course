---
title: "Authentication Patterns"
section: Building Enterprise Connectors
layout: standard
---

# Authentication Patterns

Your MCP server needs credentials to talk to external APIs. Never hardcode them.

**1. Environment variables (simplest, good for local dev):**

```typescript
// In your MCP server
const JIRA_TOKEN = process.env.JIRA_API_TOKEN;
const JIRA_HOST = process.env.JIRA_HOST;
if (!JIRA_TOKEN || !JIRA_HOST) {
  throw new Error("Missing JIRA_API_TOKEN or JIRA_HOST env vars");
}
```

```json
// claude_desktop_config.json
{
  "mcpServers": {
    "jira": {
      "command": "node",
      "args": ["dist/index.js"],
      "env": {
        "JIRA_HOST": "https://mycompany.atlassian.net",
        "JIRA_API_TOKEN": "your-token-here"
      }
    }
  }
}
```

**2. OAuth 2.0 (for production, user-scoped access):**
- MCP supports an OAuth-based authorization flow for remote servers
- The host redirects the user to your auth endpoint
- Server receives scoped tokens per user session
- Best for multi-tenant deployments

**3. Secret management (production):**
- Use a secret store (AWS Secrets Manager, Vault, 1Password CLI)
- Fetch secrets at server startup, not at import time
- Rotate tokens without redeploying the server

**Key principle:** The MCP server authenticates to the external API on behalf of the user. The MCP protocol itself handles client-server trust through the transport layer.

## Sources

- [MCP Specification — Authorization](https://modelcontextprotocol.io/specification/2025-03-26/basic/authorization)
- [MCP Specification](https://modelcontextprotocol.io)
