---
title: "LangChain & LangGraph Ecosystem"
section: Frameworks Landscape
layout: standard
---

# LangChain & LangGraph Ecosystem

## LangChain: The Original

- Released late 2022, became the default starting point for LLM applications
- **Chains**: Sequential composition of prompts, LLM calls, and parsers
- **Agents**: LLM decides which tools to call via ReAct-style loops
- **Criticism**: Deep abstraction layers, hard to debug, frequent breaking changes
- **2026 packaging**: import `langchain-core` + `langgraph` rather than the monolithic `langchain` package — you pull in only the orchestration primitives you need

## Division of Labor with LlamaIndex (2026)

By mid-2026 the production consensus is to use the two together, not pick one:

- **LangChain / LangGraph** owns **orchestration** — control flow, agents, stateful workflows
- **LlamaIndex Workflows** owns **data and ingestion** — loading, indexing, retrieval
- Most production stacks combine both rather than forcing one framework to do everything

## LangGraph: The Evolution

- LangGraph is LangChain's answer to complex, stateful workflows
- Built on a **directed graph** model — nodes are functions, edges are transitions
- Key features that differentiate it:
  - **Typed state** that flows through the graph
  - **Conditional edges** — the LLM or code decides the next node
  - **Checkpointing** — save and resume graph execution at any point
  - **Human-in-the-loop** — pause execution, get approval, continue
  - **Streaming** — stream tokens from any node in the graph

## When LangGraph Earns Its Complexity

- Multi-turn conversations with branching logic
- Workflows requiring **approval gates** or **human review**
- Long-running tasks that must survive server restarts
- Systems where you need to **replay or debug** exact execution paths

## Sources

- [LangChain Documentation](https://docs.langchain.com)
- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- [LangSmith Observability Platform](https://www.langchain.com/langsmith/observability)
- [LangChain vs LlamaIndex: 2026 Update (Zen van Riel)](https://zenvanriel.com/ai-engineer-blog/langchain-vs-llamaindex-2026-update/)
- [ReAct: Synergizing Reasoning and Acting in Language Models (Yao et al., 2022)](https://arxiv.org/abs/2210.03629)
