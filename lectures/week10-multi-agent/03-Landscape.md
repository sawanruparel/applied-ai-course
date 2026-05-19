---
title: "Multi-Agent Framework Landscape"
section: Framing
layout: standard
---

# Multi-Agent Framework Landscape

## AutoGen → Microsoft Agent Framework (Microsoft)
- Conversation-driven multi-agent framework; **AutoGen v1.0 GA** ships the v2 API as the default
- Agents communicate through chat-like message passing
- Strong support for human-in-the-loop workflows; GroupChat abstraction for multi-party agent conversations
- Microsoft has **merged AutoGen with Semantic Kernel into the Microsoft Agent Framework (MAF)**, targeting enterprise .NET with production middleware and observability

## CrewAI
- Role-based agent teams with a "crew" metaphor
- Declarative: define agents, tasks, and processes in config
- Now ships **enterprise observability and scheduling**; powers **~2 billion agentic executions** and is used by **60%+ of the Fortune 500**
- **CrewAI Flows** is the recommended architecture for production multi-agent pipelines

## LangGraph (LangChain)
- Graph-based orchestration with explicit state machines
- Nodes are agents or functions, edges are conditional transitions
- Fine-grained control over routing, loops, and error handling; best for complex workflows where you need deterministic control flow
- **v0.4 (April 2026)** adds redesigned HITL checkpoints that surface automatically in `.invoke()` responses, durable Postgres/Redis state persistence, and improved graph-based audit trails; it now leads CrewAI in GitHub stars

## Claude Agent SDK (Anthropic)
- Lightweight Python SDK for building agent loops with Claude
- Built-in support for tool use, handoffs between agents, and guardrails
- First-class MCP integration for connecting agents to external services
- Designed for production: tracing, streaming, structured output

## How to Choose
- **Graph-shaped, stateful workflows with audit needs?** LangGraph
- **Declarative role-based crews?** CrewAI
- **.NET enterprise or conversational GroupChat?** AutoGen / Microsoft Agent Framework
- **Production with Claude?** Claude Agent SDK
- **Prototyping quickly?** CrewAI for declarative crews, AutoGen for flexible conversation patterns

## Sources

- [AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation (Wu et al., 2023)](https://arxiv.org/abs/2308.08155)
- [AutoGen GitHub Repository (Microsoft)](https://github.com/microsoft/autogen)
- [CrewAI GitHub Repository](https://github.com/crewAIInc/crewAI)
- [LangGraph Documentation (LangChain)](https://langchain-ai.github.io/langgraph/)
- [Claude Agent SDK (Anthropic)](https://github.com/anthropics/claude-agent-sdk-python)
- [LangGraph v0.4: HITL checkpoints & state persistence — AI Tech Connect](https://aitechconnect.in/news/langgraph-v04-hitl-checkpoints-state-persistence)
- [AI agent frameworks compared (AutoGen v1.0, MAF) — PE Collective](https://pecollective.com/blog/ai-agent-frameworks-compared/)
- [Multi-agent AI in 2026: CrewAI, LangGraph, AutoGen — dev.to](https://dev.to/ottoaria/multi-agent-ai-in-2026-build-production-systems-with-crewai-langgraph-autogen-5e40)
- [LangGraph vs CrewAI vs AutoGen: which framework for your enterprise in 2026 — Towards AI](https://pub.towardsai.net/langgraph-vs-crewai-vs-autogen-which-ai-agent-framework-should-your-enterprise-use-in-2026-3a9ebb407b09)
