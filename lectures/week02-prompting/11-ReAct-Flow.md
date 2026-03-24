---
title: "ReAct Execution Flow"
section: Advanced Patterns
layout: diagram
---

# ReAct Execution Flow

```
  ┌───────────────────────────────────────────────────────────┐
  │                     USER QUERY                            │
  │  "Compare Q1 revenue of Apple and Microsoft this year"    │
  └──────────────────────────┬────────────────────────────────┘
                             ▼
  ┌──────────────────────────────────────────────────────────┐
  │ THOUGHT 1: I need Apple's Q1 revenue. Let me search.    │
  └──────────────────────────┬───────────────────────────────┘
                             ▼
  ┌──────────────────────────────────────────────────────────┐
  │ ACTION 1: search("Apple Q1 2025 revenue")               │
  └──────────────────────────┬───────────────────────────────┘
                             ▼
  ┌──────────────────────────────────────────────────────────┐
  │ OBSERVATION 1: Apple Q1 FY2025 revenue: $124.3 billion  │
  └──────────────────────────┬───────────────────────────────┘
                             ▼
  ┌──────────────────────────────────────────────────────────┐
  │ THOUGHT 2: Got Apple's data. Now I need Microsoft's.    │
  └──────────────────────────┬───────────────────────────────┘
                             ▼
  ┌──────────────────────────────────────────────────────────┐
  │ ACTION 2: search("Microsoft Q1 FY2025 revenue")         │
  └──────────────────────────┬───────────────────────────────┘
                             ▼
  ┌──────────────────────────────────────────────────────────┐
  │ OBSERVATION 2: Microsoft Q1 FY2025 revenue: $65.6B      │
  └──────────────────────────┬───────────────────────────────┘
                             ▼
  ┌──────────────────────────────────────────────────────────┐
  │ THOUGHT 3: I have both figures. Apple ($124.3B) earned   │
  │ roughly 1.9x Microsoft's Q1 revenue ($65.6B).           │
  └──────────────────────────┬───────────────────────────────┘
                             ▼
  ┌──────────────────────────────────────────────────────────┐
  │ ACTION 3: finish(comparison summary with cited figures)  │
  └──────────────────────────────────────────────────────────┘
```

## The Loop

**Thought** (reason about state) → **Action** (call a tool) → **Observation** (receive result) → repeat until **finish**.

The model decides **when to stop** — it calls `finish()` when it has enough information. If an action fails, Thought re-plans.

## Sources

- [ReAct: Synergizing Reasoning and Acting in Language Models (Yao et al., 2022)](https://arxiv.org/abs/2210.03629)
