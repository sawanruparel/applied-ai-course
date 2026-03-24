---
title: "Observability"
section: Production Patterns
layout: standard
---

# Observability

You need to see what your MCP server is doing in production.

**1. Structured logging for every tool call:**

```typescript
import pino from "pino";
const logger = pino({ level: "info" });

function wrapToolHandler(name: string, handler: Function) {
  return async (params: any) => {
    const start = Date.now();
    logger.info({ tool: name, params }, "tool_call_start");
    try {
      const result = await handler(params);
      logger.info({
        tool: name,
        durationMs: Date.now() - start,
        isError: result.isError ?? false,
      }, "tool_call_end");
      return result;
    } catch (err) {
      logger.error({ tool: name, error: err, durationMs: Date.now() - start },
        "tool_call_error");
      throw err;
    }
  };
}
```

**2. Key metrics to track:**
- Tool call count by tool name (which tools are popular?)
- Tool call latency (p50, p95, p99)
- Error rate by tool
- Upstream API latency (is Jira slow? Is the DB overloaded?)
- Result size (are we returning too much data?)

**3. Request tracing:**
- Propagate a trace ID from the MCP client through to upstream API calls
- Correlate: user message -> LLM tool call -> MCP server -> external API
- Use OpenTelemetry for distributed tracing across the stack

**4. Alerts to set up:**
- Error rate spike on any tool
- Upstream API returning 429s (rate limited)
- Tool call latency exceeding timeout threshold

## Sources

- [Pino — Node.js JSON Logger](https://github.com/pinojs/pino)
- [OpenTelemetry](https://opentelemetry.io/)
