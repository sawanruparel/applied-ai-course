---
title: Separation of Concerns
section: Deep Insights
layout: two-column
---

## Without MCP
Agent code mixes reasoning with API calls, auth handling, retries, and data formatting. Changing a tool means redeploying the agent.

## With MCP
- Agent handles reasoning and planning
- MCP server handles execution, auth, and system access
- Swap `server-postgres` for `server-mysql` without touching agent code

> Same separation as frontend/backend — the agent is the frontend, MCP servers are the backend.
