---
title: "Pattern 3: Collaborative (Peer Discussion)"
section: Core Patterns
layout: diagram
---

# Pattern 3: Collaborative — Peer Agents Discuss and Iterate

Agents communicate as peers, refining each other's work through rounds of feedback.

```mermaid
sequenceDiagram
    participant P as Proposer
    participant C as Critic
    P->>C: Draft v1
    C->>P: Issues: missing X, wrong format
    P->>C: Draft v2 (addresses feedback)
    C->>P: Better — consider edge case
    P->>C: Draft v3
    C-->>P: Approved (or max_rounds hit)
```

## How It Works
- Agents take turns producing and critiquing output
- Each round uses the previous round's feedback as input
- Terminates when critic approves, max rounds hit, or quality threshold met

## Strengths
- Produces higher-quality output through iterative refinement
- Natural fit for writing, code review, and design tasks
- Simple two-agent setup can be very effective

## Watch Out For
- Agents can get stuck in "polite loops" — always finding something to critique
- Set a **max iteration count** (typically 3-5 rounds)
- Define clear acceptance criteria so the critic knows when to stop
