---
title: "Error Handling"
section: MCP Server Fundamentals
layout: standard
---

# Error Handling

Two levels of errors in MCP:

**1. Protocol-level errors** (JSON-RPC error codes) — transport/routing failures:

```typescript
import { McpError, ErrorCode } from "@modelcontextprotocol/sdk/types.js";

// Use for protocol-level problems
throw new McpError(ErrorCode.InvalidParams, "Missing required field: sql");
throw new McpError(ErrorCode.MethodNotFound, "Unknown tool: drop_table");
```

| Code   | Meaning             | When to use                    |
|--------|---------------------|--------------------------------|
| -32600 | InvalidRequest      | Malformed JSON-RPC             |
| -32601 | MethodNotFound      | Unknown method                 |
| -32602 | InvalidParams       | Schema validation failed       |
| -32603 | InternalError       | Unexpected server crash        |

**2. Tool-level errors** (isError in result) — business logic failures:

```typescript
// Use for expected business errors — the LLM sees these and can adapt
return {
  content: [{ type: "text", text: "Query timed out after 30s. Try a simpler query." }],
  isError: true,
};
```

**Best practices:**
- Catch exceptions from external systems and convert to `isError` responses
- Include actionable messages — the LLM will use them to retry or inform the user
- Never leak stack traces or internal credentials in error messages
- Log errors server-side for debugging, return sanitized messages to the client

## Sources

- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)
