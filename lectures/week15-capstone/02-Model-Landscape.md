---
title: "The 2026 Model Landscape"
section: Stack
layout: standard
---

# What You're Choosing From

The frontier in May 2026 spans several model families. Costs and capabilities have shifted significantly since the start of the course; the numbers below reflect launch-time public pricing and may have shifted by your demo date.

| Family | Flagship | Context | $/1M in | $/1M out | Notable strengths |
|--------|----------|---------|---------|----------|-------------------|
| Anthropic | **Claude Opus 4.7** | 1M | $5 | $25 | Long-horizon agentic work; adaptive thinking; high-res vision |
| Anthropic | Claude Sonnet 4.6 | 1M | $3 | $15 | Best-effort balance; adaptive thinking |
| Anthropic | Claude Haiku 4.5 | 200K | $1 | $5 | Cost-efficient; tool use; fast |
| OpenAI | GPT-5 / o-series | 256K–1M | varies | varies | Strong tool use; broad ecosystem |
| Google | Gemini 2 Pro / Flash | 2M / 1M | varies | varies | Multimodal; long context |
| DeepSeek | DeepSeek R1 (open) | 128K | self-host | self-host | Open-weights reasoning; cheap inference |
| Meta | Llama 3.3 70B (open) | 128K | self-host | self-host | Strong general baseline; widely fine-tuned |
| Mistral | Large 3 / Codestral | 128K | varies | varies | EU-region availability; code |
| Specialized | Cohere Command R+ | 128K | varies | varies | RAG-tuned; multilingual |

```mermaid
flowchart TB
    Q[Capstone task] --> Q1{Open weights<br/>required?}
    Q1 -->|yes| Open["Llama 3.3 /<br/>DeepSeek R1 /<br/>Mistral"]
    Q1 -->|no| Q2{Long context<br/>(>500K)?}
    Q2 -->|yes| LC["Claude Opus 4.7 /<br/>Claude Sonnet 4.6 /<br/>Gemini 2 Pro"]
    Q2 -->|no| Q3{Heavy multimodal<br/>(images, video)?}
    Q3 -->|yes| MM["Gemini 2 /<br/>Claude Opus 4.7<br/>(high-res vision)"]
    Q3 -->|no| Q4{Reasoning-heavy?}
    Q4 -->|yes| R["Claude Opus 4.7 /<br/>GPT o-series"]
    Q4 -->|no| Cheap["Claude Haiku 4.5 /<br/>Gemini Flash"]
```

## Pricing-aware mental model

- **Haiku-tier / Flash-tier** ($1–$2 per M input) — classification, routing, summarization, simple tool use
- **Mid-tier** (Sonnet 4.6 at $3/M input) — chat, RAG, most agentic workflows
- **Top-tier** (Opus 4.7, o-series at $5+/M input) — long-horizon agents, hard reasoning, premium UX

A practical heuristic: build the prototype on Sonnet 4.6 or its equivalent. Move latency-sensitive subtasks to Haiku 4.5. Only escalate to Opus 4.7 when measured eval shows the mid-tier failing.

Sources

- [Anthropic — Pricing](https://www.anthropic.com/pricing)
- [Anthropic — Claude Opus 4.7 announcement](https://www.anthropic.com/news)
- [OpenAI — Models](https://platform.openai.com/docs/models)
- [Google DeepMind — Gemini 2 model card](https://deepmind.google/technologies/gemini/)
