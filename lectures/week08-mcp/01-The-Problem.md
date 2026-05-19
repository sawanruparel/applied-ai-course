---
title: "The Integration Problem"
section: Problem
layout: standard
---

# The N×M Integration Problem

Every LLM application that takes action needs the same plumbing: connect the model to tools, files, databases, APIs. Each integration is bespoke — different SDK, different auth, different schema. With **N** clients (Claude, ChatGPT, Cursor, Continue, custom apps) and **M** capabilities (Slack, GitHub, Postgres, Sentry, S3, …), the industry was on its way to writing **N × M** integrations.

```mermaid
flowchart LR
    subgraph Clients
      C1[Claude Desktop]
      C2[ChatGPT]
      C3[Cursor]
      C4[Custom Agent]
    end
    subgraph Capabilities
      S1[Slack]
      S2[GitHub]
      S3[Postgres]
      S4[Sentry]
      S5[S3]
    end
    C1 --> S1 & S2 & S3 & S4 & S5
    C2 --> S1 & S2 & S3 & S4 & S5
    C3 --> S1 & S2 & S3 & S4 & S5
    C4 --> S1 & S2 & S3 & S4 & S5
```

Every line is a custom integration: bespoke SDK glue, auth flow, error handling, schema documentation. The total cost grows multiplicatively.

## What this looks like in practice

- OpenAI function-calling JSON for GPT, Anthropic tool-use schema for Claude, LangChain Tool subclass for the framework path
- Auth code duplicated per integration (OAuth flow for Slack, PAT for GitHub, connection string for Postgres)
- Each new application starts from scratch — none of the prior glue is reusable

Sources

- [Anthropic — Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol)
- [USB analogy popularized in the MCP launch announcement](https://www.anthropic.com/news/model-context-protocol)
