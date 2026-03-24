---
title: "Inter-Agent Communication"
section: Architecture Deep Dive
layout: cards
---

# Inter-Agent Communication

## Message Passing
- Agents send structured messages directly to each other
- Each message includes sender, recipient, content, and metadata
- Natural fit for conversational patterns (AutoGen, Claude Agent SDK)
- **Pro:** Clear audit trail of who said what
- **Con:** Message history can grow large across many rounds
- Example: Agent A sends `{role: "researcher", content: "Found 3 relevant papers..."}` to Agent B

## Shared State (Blackboard)
- All agents read from and write to a central state object
- State is typically a dictionary or typed schema
- Natural fit for LangGraph (state is passed through graph edges)
- **Pro:** Agents don't need to know about each other — just the state
- **Con:** Race conditions if agents run in parallel without locks
- Example: `state["research_findings"] = [...]` written by researcher, read by writer

## Event-Driven (Pub/Sub)
- Agents publish events; other agents subscribe to event types
- Loose coupling — agents don't know who's listening
- Good for systems where new agents are added frequently
- **Pro:** Highly extensible; add new agents without changing existing ones
- **Con:** Harder to debug — event flows are implicit, not explicit
- Example: Researcher publishes `DataReady` event; Analyzer subscribes and activates

## Tool-as-Communication
- One agent invokes another agent as if it were a tool
- The "inner agent" runs and returns structured output
- Simplest pattern — no message bus or shared state needed
- **Pro:** Familiar tool-use interface; easy to implement
- **Con:** Only supports request-response, not multi-turn dialogue
- Example: Manager calls `run_agent(name="researcher", query="Find recent papers on X")`

## Sources

- [AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation (Wu et al., 2023)](https://arxiv.org/abs/2308.08155)
- [LangGraph Documentation (LangChain)](https://langchain-ai.github.io/langgraph/)
- [Claude Agent SDK (Anthropic)](https://github.com/anthropics/claude-agent-sdk-python)
