---
title: "Composing Multiple MCP Servers"
section: Building Enterprise Connectors
layout: diagram
---

# Composing Multiple MCP Servers

An MCP host can connect to **multiple servers simultaneously**. Each server is independent — the LLM sees all tools from all servers and chooses which to call.

```
┌─────────────────────────────────────────────────────────┐
│                     MCP HOST                            │
│               (Claude Desktop / IDE)                    │
│                                                         │
│  User: "Find the Jira ticket about the sales drop,     │
│         query the DB for Q4 numbers, and post           │
│         a summary to #data-team on Slack."              │
│                                                         │
│  ┌───────────┐   ┌───────────┐   ┌───────────┐        │
│  │ MCP       │   │ MCP       │   │ MCP       │        │
│  │ Client 1  │   │ Client 2  │   │ Client 3  │        │
│  └─────┬─────┘   └─────┬─────┘   └─────┬─────┘        │
└────────│────────────────│────────────────│──────────────┘
         │                │                │
   ┌─────▼─────┐   ┌─────▼─────┐   ┌─────▼─────┐
   │ SQL MCP   │   │ Jira MCP  │   │ Slack MCP │
   │ Server    │   │ Server    │   │ Server    │
   │           │   │           │   │           │
   │ run_query │   │ search_   │   │ post_     │
   │ list_     │   │  issues   │   │  message  │
   │  tables   │   │ create_   │   │ search_   │
   │ describe_ │   │  issue    │   │  messages │
   │  table    │   │ update_   │   │ list_     │
   │           │   │  status   │   │  channels │
   └─────┬─────┘   └─────┬─────┘   └─────┬─────┘
         │                │                │
    ┌────▼────┐    ┌──────▼──────┐   ┌────▼────┐
    │ SQLite  │    │ Jira Cloud  │   │  Slack  │
    │   DB    │    │    API      │   │   API   │
    └─────────┘    └─────────────┘   └─────────┘
```

**The LLM orchestrates across all three** — no custom integration code needed between the servers. This is the power of MCP's composability.
