---
title: "Key Takeaways"
section: Production Patterns
layout: cards
---

# Key Takeaways

## The SDK Does the Heavy Lifting

You don't implement JSON-RPC or transport yourself. The MCP SDK handles protocol negotiation, message routing, and schema validation. **You write tool handlers — that's your business logic.**

## Tool Descriptions Are Prompts

The quality of your tool descriptions directly determines how well the LLM uses your tools. Be specific about when to use each tool, what it returns, and what its constraints are. Iterate on descriptions like you iterate on prompts.

## Safety Is Non-Negotiable

Read-only connections, query validation, parameter binding, row limits, rate limiting. Every layer of defense matters when an LLM is generating the inputs. The LLM is a capable but unpredictable user of your API.

## Composability Is the Killer Feature

One MCP host can connect to many servers. The LLM orchestrates across all of them without custom integration code. Build small, focused servers that do one thing well — then compose them.

## Test Before You Ship

Use MCP Inspector to validate every tool interactively. Write programmatic tests with InMemoryTransport. Test error paths, not just happy paths. The LLM will find every edge case you missed.

## Start Local, Go Remote

Begin with stdio transport for development and Claude Desktop testing. Move to Streamable HTTP when you need shared access, centralized secrets, or horizontal scaling.
