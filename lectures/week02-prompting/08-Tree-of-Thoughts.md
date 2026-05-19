---
title: "Tree of Thoughts"
section: Chain-of-Thought
layout: diagram
---

# Tree of Thoughts: Branching Exploration with Backtracking

Yao et al. (2023): Generalize CoT from a single chain to a tree. At each step, generate multiple candidate next-steps, evaluate them, and prune or backtrack.

```mermaid
flowchart TB
    P[Problem]
    P --> T1a["Thought 1a<br/>score: 8"]
    P --> T1b["Thought 1b<br/>score: 3 — prune"]
    P --> T1c["Thought 1c<br/>score: 7"]
    T1a --> T2a["Thought 2a<br/>score: 9"]
    T1a --> T2b["Thought 2b<br/>score: 4 — prune"]
    T1c --> T2c["Thought 2c<br/>score: 6"]
    T1c --> T2d["Thought 2d<br/>score: 2 — prune"]
    T2a --> Ans["Final answer<br/>(best path)"]
    T2c --> Back[Backup answer]
```

## How It Works

1. **Generate**: produce multiple candidate thoughts at each reasoning step
2. **Evaluate**: score each thought for promise (via LLM self-evaluation or heuristic)
3. **Search**: use BFS or DFS to explore the tree; prune low-scoring branches
4. **Backtrack**: if a path leads to contradiction, return to last branch point

## When to Use ToT

- Tasks with **dead ends** (e.g., Game of 24, crossword puzzles, planning)
- When the search space is **small enough** to explore (tens of branches, not thousands)
- Cost: 10-100x a single CoT call — reserve for high-value reasoning tasks

## Sources

- [Tree of Thoughts: Deliberate Problem Solving with Large Language Models (Yao et al., 2023)](https://arxiv.org/abs/2305.10601)
