---
title: Domain-Specific Servers
section: Design Patterns
layout: cards
---

## Finance MCP
Market data feeds, ledger queries, expense approvals. Example: `get_stock_price`, `approve_transaction`.

## DevOps MCP
Real servers exist: GitHub (issues, PRs), Sentry (errors), CloudWatch (logs). Example: `server-github` exposes 15+ tools.

## Communication MCP
Slack (`post_message`, `search`), Gmail, Twilio SMS. Example: `server-slack` wraps the Slack Web API as MCP tools.

## Sources

- [MCP GitHub Organization](https://github.com/modelcontextprotocol)
