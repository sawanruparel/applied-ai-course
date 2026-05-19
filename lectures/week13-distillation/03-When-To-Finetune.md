---
title: "When Fine-Tuning Beats Prompting"
section: Framing
layout: standard
---

# When Fine-Tuning Beats Prompting

## Signs you need fine-tuning

- **Consistent output format:** JSON schemas, structured extraction, specific templates
- **Domain vocabulary:** Medical, legal, financial terminology the base model fumbles
- **Cost reduction:** Paying $0.10/call when a fine-tuned small model does it for $0.001/call
- **Latency requirements:** Need <100ms responses that large models cannot deliver
- **Privacy constraints:** Data cannot leave your infrastructure

## Signs you should stick with prompting

- Task changes frequently (fine-tuning is a snapshot in time)
- You have fewer than 50 high-quality examples
- The frontier model already does it well and volume is low
- You need broad general knowledge, not narrow specialization

## The decision framework

```mermaid
flowchart TB
    V{Volume > 10K calls/day?}
    V -->|Yes| Q1{Prompting<br/>quality sufficient?}
    Q1 -->|Yes| P1[Stay with prompting<br/>monitor costs]
    Q1 -->|No| FT1[Fine-tune]
    V -->|No| Q2{Latency critical<br/>< 100ms?}
    Q2 -->|Yes| FT2[Fine-tune a small model]
    Q2 -->|No| P2[Prompt engineering + caching]
```

## Rule of thumb

**Fine-tuning ROI = (cost_per_api_call - cost_per_finetuned_call) x daily_volume x 30 - training_cost**

If positive within one month, fine-tuning is worth it.

## Fine-tune vs RAG vs distill (2026 consensus)

These techniques are complementary, not competing -- match the method to the problem:

- **RAG first** for *dynamic knowledge* -- facts that change often or are too large to bake into weights.
- **Fine-tune** for *style, format, and domain vocabulary* that RAG cannot inject through context alone.
- **Distill** when *deploying to constrained edge hardware* where you need the behavior in a small, self-contained model.

## Sources

- [Fine-Tuning LLMs: When RAG Isn't Enough (BigDataBoutique)](https://bigdataboutique.com/blog/fine-tuning-llms-when-rag-isnt-enough)
