---
title: "Choosing the Right Pattern"
section: Core Patterns
layout: flow
---

# Choosing the Right Pattern for Your Use Case

## Step 1: Do You Actually Need Multi-Agent?
- Can a single agent with good tools solve this? **Start there.**
- Multi-agent adds latency, cost, and debugging complexity
- Rule of thumb: if your system prompt is under 500 words and you have fewer than 8 tools, a single agent is probably fine

## Step 2: Is the Workflow Fixed or Dynamic?
- **Fixed order** (A then B then C): use **Sequential Pipeline**
- **Dynamic routing** (depends on intermediate results): use **Supervisor** or **Swarm**
- **User-driven conversation** with shifting topics: use **Swarm**

## Step 3: How Many Distinct Roles Are Needed?
- **2 roles** (writer + critic): use **Collaborative** pattern
- **3-5 specialized roles** with a clear coordinator: use **Hierarchical**
- **Many interchangeable workers**: use **Supervisor** with a worker pool

## Step 4: How Important Is Output Quality vs. Speed?
- **Quality is paramount** and cost is acceptable: use **Competitive** (multiple proposals + judge)
- **Speed matters** and tasks are independent: use **Parallel workers** under a manager
- **Iterative refinement** is the goal: use **Collaborative** with max iterations

## Step 5: Summary Decision Matrix

| Scenario | Pattern | Why |
|---|---|---|
| ETL pipeline | Sequential | Fixed stages, clear data flow |
| Software project | Hierarchical | Manager decomposes, workers build |
| Blog post writing | Collaborative | Writer + editor iterate to quality |
| Architecture design | Competitive | Multiple proposals reduce risk |
| Customer support | Swarm | User needs shift dynamically |
| Complex research | Supervisor | Router picks next step based on findings |
