---
title: "ReAct Execution Flow"
section: Advanced Patterns
layout: diagram
---

# ReAct Execution Flow

```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant M as Model
    participant T as search tool
    U->>M: Compare Q1 revenue of Apple and Microsoft
    Note over M: Thought 1: I need Apple's Q1 revenue
    M->>T: search("Apple Q1 2025 revenue")
    T-->>M: $124.3B
    Note over M: Thought 2: Now I need Microsoft's
    M->>T: search("Microsoft Q1 FY2025 revenue")
    T-->>M: $65.6B
    Note over M: Thought 3: I have both figures
    M-->>U: finish(comparison summary)
```

## The Loop

```mermaid
flowchart LR
    T[Thought] --> A[Action]
    A --> O[Observation]
    O --> D{Done?}
    D -- no --> T
    D -- yes --> F[finish]
```

**Thought** (reason about state) → **Action** (call a tool) → **Observation** (receive result) → repeat until **finish**.

The model decides **when to stop** — it calls `finish()` when it has enough information. If an action fails, Thought re-plans.

## Sources

- [ReAct: Synergizing Reasoning and Acting in Language Models (Yao et al., 2022)](https://arxiv.org/abs/2210.03629)
