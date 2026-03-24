---
title: "Testing Your Server"
section: MCP Server Fundamentals
layout: standard
---

# Testing Your Server

**1. MCP Inspector — interactive debugging tool:**

```bash
npx @modelcontextprotocol/inspector node dist/index.js
```

- Opens a web UI to browse tools, resources, and prompts
- Send test tool calls and see raw JSON-RPC requests/responses
- Verify your schemas, descriptions, and error handling
- **Start here** — test every tool before connecting to a host

**2. Claude Desktop integration:**

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "my-sql-server": {
      "command": "node",
      "args": ["/absolute/path/to/dist/index.js"],
      "env": {
        "DATABASE_URL": "sqlite:///path/to/mydb.sqlite"
      }
    }
  }
}
```

Then restart Claude Desktop. Your tools appear in the tool list.

**3. Programmatic testing:**

```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";

const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
await server.connect(serverTransport);
await client.connect(clientTransport);

const result = await client.callTool({ name: "list_tables", arguments: {} });
assert(result.content[0].text.includes("users"));
```

## Sources

- [MCP Inspector](https://github.com/modelcontextprotocol/inspector)
- [MCP Inspector Documentation](https://modelcontextprotocol.io/docs/tools/inspector)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [Claude Desktop Download](https://claude.com/download)
