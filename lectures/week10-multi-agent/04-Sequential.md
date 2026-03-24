---
title: "Pattern 1: Sequential Pipeline"
section: Core Patterns
layout: diagram
---

# Pattern 1: Sequential Pipeline

Agent A's output becomes Agent B's input, forming a linear chain.

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Researcher  │────>│   Analyst   │────>│   Writer    │────>│   Editor    │
│              │     │             │     │             │     │             │
│ Gathers raw  │     │ Extracts    │     │ Drafts      │     │ Polishes    │
│ information  │     │ insights    │     │ content     │     │ final output│
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
      │                    │                   │                    │
      v                    v                   v                    v
  Raw Data            Key Findings        Draft Report        Final Report
```

## When to Use
- Tasks that naturally decompose into ordered stages
- Each stage has a clearly different skill requirement
- Output format of stage N matches input format of stage N+1

## Strengths
- Simple to reason about and debug
- Easy to swap out individual stages
- Each agent gets a focused context

## Weaknesses
- Slow — total latency is sum of all stages
- Errors in early stages propagate forward
- No feedback loops — agent C can't ask agent A for clarification
