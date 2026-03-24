---
title: "Key Papers & Research"
section: Close
layout: standard
---

# Key Papers & Research

Essential reading on agent memory and human-in-the-loop systems.

## Foundational papers

| Paper | Year | Key Contribution |
|-------|------|-----------------|
| [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560) | 2023 | Self-editing memory with tiered storage (main context + external). LLM manages its own memory like an OS manages virtual memory. |
| [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442) | 2023 | Full memory architecture: observation stream, reflection, planning. 25 agents with persistent memory living in a simulated town. |
| [Cognitive Architectures for Language Agents (CoALA)](https://arxiv.org/abs/2309.02427) | 2023 | Framework unifying agent memory types: working, episodic, semantic, procedural. Maps cognitive science to LLM agent design. |
| [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) | 2023 | Agents that reflect on failures and store lessons in episodic memory. Self-improvement through linguistic feedback rather than weight updates. |
| [Human-in-the-Loop Machine Learning](https://www.manning.com/books/human-in-the-loop-machine-learning) | 2021 | Comprehensive framework for HITL patterns: active learning, annotation, evaluation. Foundational taxonomy for human-AI collaboration. |

## Recommended tools and frameworks

| Tool | Purpose |
|------|---------|
| [LangGraph](https://langchain-ai.github.io/langgraph/) | State machines, checkpointing, interrupt/resume for HITL |
| [Mem0](https://github.com/mem0ai/mem0) | Managed long-term memory extraction and retrieval |
| [Zep](https://github.com/getzep/zep) | Temporal memory with entity graphs and session management |
| [Letta](https://github.com/letta-ai/letta) | MemGPT-based self-editing memory agent framework |
| [LangSmith](https://www.langchain.com/langsmith/observability) | Tracing and debugging agent memory and state transitions |

## Further reading:
- [LangGraph HITL documentation: interrupt patterns and breakpoints](https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/)
- [Anthropic research on Constitutional AI and human feedback](https://arxiv.org/abs/2212.08073)
- [OpenAI research on RLHF and InstructGPT methodology](https://arxiv.org/abs/2203.02155)
- [Episodic and Semantic Memory (Tulving, 1972)](https://psycnet.apa.org/record/1973-08477-007)
