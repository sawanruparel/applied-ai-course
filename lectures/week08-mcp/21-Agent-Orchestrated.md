---
title: Agent-Orchestrated Systems
section: Design Patterns
layout: center
---

# The Agent Decides

- Which server to query — filesystem for code, GitHub for issues, Slack for context
- Which tool to call — `create_issue` vs `post_message` based on intent
- When to ask for approval — human-in-the-loop before destructive actions
- How to compose results — chain outputs from one tool as inputs to another

The LLM sees all available tools across all connected servers and orchestrates them as a unified capability surface.
