---
title: "Rate Limiting and Quotas"
section: Building Enterprise Connectors
layout: standard
---

# Rate Limiting and Quotas

LLMs can be aggressive tool callers. A single user request might trigger 5-10 tool calls. Without guardrails, you'll hit API rate limits fast.

**1. Client-side rate limiting in your MCP server:**

```typescript
import Bottleneck from "bottleneck";

const limiter = new Bottleneck({
  maxConcurrent: 2,        // Max parallel requests to upstream API
  minTime: 200,            // Min 200ms between requests
  reservoir: 100,          // Max 100 requests per window
  reservoirRefreshAmount: 100,
  reservoirRefreshInterval: 60 * 1000,  // Reset every minute
});

// Wrap your API calls
async function searchJira(jql: string) {
  return limiter.schedule(() =>
    jiraClient.searchJira(jql, { maxResults: 20 })
  );
}
```

**2. Respect upstream rate limit headers:**

```typescript
// After each API call, check headers
const remaining = parseInt(res.headers["x-ratelimit-remaining"] ?? "100");
if (remaining < 10) {
  const resetAt = parseInt(res.headers["x-ratelimit-reset"] ?? "0");
  const waitMs = resetAt * 1000 - Date.now();
  if (waitMs > 0) await new Promise(r => setTimeout(r, waitMs));
}
```

**3. Tool-level budgets:**
- Track calls per tool per session
- Return an error after N calls: "Rate limit reached. Try again in 60 seconds."
- This also protects against LLM loops where the model calls the same tool repeatedly

**4. Response size limits:**
- Cap result sizes to avoid blowing up the context window
- Paginate large result sets: return first page + a "next page" indicator

## Sources

- [Bottleneck — Rate Limiter](https://www.npmjs.com/package/bottleneck)
