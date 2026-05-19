---
title: "Composing Multiple MCP Servers"
section: Building Enterprise Connectors
layout: diagram
---

# Composing Multiple MCP Servers

An MCP host can connect to **multiple servers simultaneously**. Each server is independent — the LLM sees all tools from all servers and chooses which to call.

```mermaid
flowchart TB
    subgraph Host["MCP Host (Claude Desktop)"]
      LLM[LLM]
      C1[client 1]
      C2[client 2]
      C3[client 3]
    end
    subgraph SQL["SQL MCP server"]
      SQLT["list_tables<br/>run_query"]
    end
    subgraph Jira["Jira MCP server"]
      JT["search_issues<br/>create_issue"]
    end
    subgraph Slack["Slack MCP server"]
      ST["post_message<br/>list_channels"]
    end
    C1 <--> SQL --> DB[(SQLite)]
    C2 <--> Jira --> JAPI[Jira Cloud API]
    C3 <--> Slack --> SAPI[Slack API]
```

> "Find the Jira ticket about the sales drop, query the DB for Q4 numbers, and post a summary to #data-team."

**The LLM orchestrates across all three** — no custom integration code needed between the servers. This is the power of MCP's composability.
