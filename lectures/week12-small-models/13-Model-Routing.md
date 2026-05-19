---
title: "Model Routing"
section: Model Selection
layout: diagram
---

# Model Routing

## Send Easy Queries to Small Models, Hard Queries to Large Models

```mermaid
flowchart TB
    Q[User Query] --> R{Router<br/>classifier or rules}
    R -->|Simple| S["Llama 3.2 3B<br/>$0.03 / 1K"]
    R -->|Medium| M["Qwen 3 8B / Phi-4<br/>$0.15 / 1K"]
    R -->|Complex| L["Claude Sonnet 4<br/>$2.50 / 1K"]
```

## Router Implementation Options

| Approach                 | Latency  | Accuracy | Complexity |
|--------------------------|----------|----------|------------|
| Keyword/regex rules      | <1ms     | Low      | Simple     |
| Embedding similarity     | 5–10ms   | Medium   | Medium     |
| Small classifier (1B)    | 10–20ms  | High     | Medium     |
| LLM-as-judge             | 200ms+   | Highest  | High       |

## Real-World Impact

A typical support chatbot: 70% simple, 20% medium, 10% complex.
With routing: **60–80% cost reduction** vs sending everything to a frontier model.

## Sources

- [RouteLLM: Learning to Route LLMs with Preference Data — arXiv:2406.18665 (Ong et al., 2024)](https://arxiv.org/abs/2406.18665)
