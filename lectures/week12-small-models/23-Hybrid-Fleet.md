---
title: "The Hybrid Fleet"
section: Production Strategy
layout: diagram
---

# The Hybrid Fleet: Mixing Model Sizes in One Application

```mermaid
flowchart TB
    subgraph App[Application Layer]
        Chat[Chat UI]
        Search[Search]
        Batch[Pipeline batch]
        Admin[Admin Tools]
    end
    Chat --> GW
    Search --> GW
    Batch --> GW
    Admin --> GW
    GW[Model Gateway / Router<br/>by task, complexity, SLA]
    GW -->|70%| T1["Tier 1: 1B-3B<br/>Self-hosted Llama 3B<br/>~$0.03 / 1K"]
    GW -->|15%| T2["Tier 2: 7B-14B<br/>Self-hosted Qwen 8B<br/>~$0.10 / 1K"]
    GW -->|10%| T3["Tier 3: API small<br/>GPT-4.1 nano / Gemini Flash<br/>~$0.50 / 1K"]
    GW -->|5%| T4["Tier 4: API large<br/>Claude Sonnet / Opus<br/>~$5.00 / 1K"]
```

## Fleet Composition Per Feature

| Feature              | Tier 1 (3B) | Tier 2 (8B) | Tier 3 (API small) | Tier 4 (Frontier) |
|----------------------|:-----------:|:-----------:|:------------------:|:-----------------:|
| Intent classification| 100%        | —           | —                  | —                 |
| FAQ / simple Q&A     | 80%         | 15%         | 5%                 | —                 |
| Document extraction  | —           | 90%         | 10%                | —                 |
| Complex chat         | —           | 20%         | 50%                | 30%               |
| Code generation      | —           | 40%         | 40%                | 20%               |
| Report writing       | —           | —           | 30%                | 70%               |
