---
title: "The Multi-Agent Thesis"
section: Framing
layout: two-column
---

# Specialized Agents > One Generalist Agent

## Single Generalist Agent
- One massive system prompt covering all responsibilities
- All tools loaded into one context (20+ tools)
- Agent must decide what "mode" it's in at every step
- Context window fills up fast with mixed concerns
- Hard to debug — which part of the prompt caused the error?
- Changing one capability risks breaking others
- Testing requires end-to-end runs every time

## Multi-Agent Team
- Each agent has a focused role and concise instructions
- Agents carry only the tools they need (3-5 tools each)
- Clear separation of concerns — researcher researches, writer writes
- Each agent gets a fresh, focused context window
- Failures are isolated to a single agent and easier to trace
- Swap or upgrade one agent without touching the rest
- Unit test each agent independently, integration test the team

---

**The key insight:** Multi-agent is not about having more LLM calls. It's about giving each call a smaller, clearer job.
