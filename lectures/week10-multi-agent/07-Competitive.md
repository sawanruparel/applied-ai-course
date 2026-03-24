---
title: "Pattern 4: Competitive (Best Answer Wins)"
section: Core Patterns
layout: diagram
---

# Pattern 4: Competitive — Multiple Proposals, Best Wins

Multiple agents independently solve the same problem; a judge selects the best result.

```
                    ┌─────────────────┐
                    │   Same Prompt    │
                    │   distributed    │
                    │   to all agents  │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              v              v              v
       ┌────────────┐ ┌────────────┐ ┌────────────┐
       │  Agent A    │ │  Agent B    │ │  Agent C    │
       │ (Approach 1)│ │ (Approach 2)│ │ (Approach 3)│
       │             │ │             │ │             │
       │ Conservative│ │ Creative    │ │ Analytical  │
       │ solution    │ │ solution    │ │ solution    │
       └──────┬─────┘ └──────┬─────┘ └──────┬─────┘
              │              │              │
              └──────────────┼──────────────┘
                             │
                             v
                    ┌─────────────────┐
                    │     JUDGE       │
                    │                 │
                    │ Evaluates all   │
                    │ proposals on:   │
                    │ - Correctness   │
                    │ - Completeness  │
                    │ - Quality       │
                    │                 │
                    │ Selects winner  │
                    │ or merges best  │
                    │ parts           │
                    └─────────────────┘
```

## When to Use
- Problems with multiple valid approaches (creative tasks, architecture decisions)
- High-stakes outputs where diversity of thought reduces risk
- You can afford the extra compute cost (N parallel agent calls)

## Trade-offs
- **Pro:** Reduces variance — unlikely all agents make the same mistake
- **Pro:** Judge can merge the best parts of multiple proposals
- **Con:** N times the cost of a single agent
- **Con:** Judge must be capable of evaluating quality — non-trivial for complex tasks
