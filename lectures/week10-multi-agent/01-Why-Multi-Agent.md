---
title: "Why Single Agents Hit Limits"
section: Framing
layout: standard
---

# Why Single Agents Hit Limits

## Context Window Constraints
- Complex tasks require more context than a single agent can hold effectively
- Tool outputs, conversation history, and documents compete for token budget
- Performance degrades as context grows — the "lost in the middle" problem

## Role Confusion
- One agent asked to be researcher, writer, critic, and coder simultaneously
- System prompts become sprawling instruction manuals (2000+ words)
- The agent switches "hats" mid-task and loses focus on each role

## Error Cascading
- A single mistake early in a long chain corrupts everything downstream
- No second opinion — the agent cannot catch its own reasoning errors
- Retrying the whole pipeline is expensive; isolating the failure is hard

## The Single-Agent Ceiling
- Beyond a certain task complexity, adding more instructions yields diminishing returns
- You need **specialization**, not a longer prompt

## Sources

- [Lost in the Middle: How Language Models Use Long Contexts (Liu et al., 2023)](https://arxiv.org/abs/2307.03172)
- [Building Effective Agents (Anthropic, 2024)](https://www.anthropic.com/research/building-effective-agents)
