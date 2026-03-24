---
title: "Pattern 2: Hierarchical (Manager/Worker)"
section: Core Patterns
layout: diagram
---

# Pattern 2: Hierarchical — Manager Delegates to Workers

A manager agent breaks down tasks and delegates to specialized workers.

```
                      ┌──────────────────┐
                      │     MANAGER      │
                      │                  │
                      │ - Decomposes task│
                      │ - Assigns work   │
                      │ - Aggregates     │
                      │   results        │
                      └────────┬─────────┘
                               │
               ┌───────────────┼───────────────┐
               │               │               │
               v               v               v
        ┌────────────┐  ┌────────────┐  ┌────────────┐
        │  Worker A   │  │  Worker B   │  │  Worker C   │
        │  (Coder)    │  │ (Researcher)│  │  (Tester)   │
        │             │  │             │  │             │
        │ Tools:      │  │ Tools:      │  │ Tools:      │
        │ - file_edit │  │ - web_search│  │ - run_tests │
        │ - terminal  │  │ - read_url  │  │ - lint      │
        └────────────┘  └────────────┘  └────────────┘
               │               │               │
               └───────────────┼───────────────┘
                               │
                               v
                      ┌──────────────────┐
                      │  MANAGER reviews │
                      │  and synthesizes │
                      └──────────────────┘
```

## Key Design Decisions
- **Manager has NO tools** — it only plans, delegates, and synthesizes
- **Workers have NO planning ability** — they execute a specific sub-task
- Manager decides when the task is done or needs another iteration
- Workers report results back to the manager, not to each other

## When to Use
- Tasks requiring multiple distinct skills
- You want centralized control over workflow orchestration
- The manager can effectively decompose the problem
