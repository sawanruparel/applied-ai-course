---
title: MCP Gateway
section: Design Patterns
layout: diagram
---

# Gateway Pattern

```text
Agent → MCP Gateway → Stripe API
                    → Salesforce
                    → Internal DB
                    → Slack
```

The gateway is itself an MCP server that aggregates downstream services. The agent sees one server with many tools. Useful for auth consolidation, rate limiting, and audit logging in production.

## Sources

- [MCP Specification](https://modelcontextprotocol.io)
