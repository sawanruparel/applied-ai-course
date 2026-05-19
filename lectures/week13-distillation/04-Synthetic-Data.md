---
title: "Synthetic Data Generation"
section: Synthetic Data Generation
layout: standard
---

# Synthetic Data: Using Teacher Models to Generate Training Examples

## The core idea

Instead of manually labeling thousands of examples, use a powerful "teacher" model (GPT-4o, Claude Opus) to generate training data for a smaller "student" model.

```mermaid
flowchart LR
    Seed[Seed inputs<br/>topics, schema] --> T[Teacher model<br/>GPT-4o / Claude Opus]
    T --> D[Synthetic examples<br/>10K+ generated overnight]
    D --> Filter[Quality filter]
    Filter --> Train[Train student<br/>Llama 8B / Phi-4]
    Train --> Deploy[Deploy: cheap, fast]
```

## Why synthetic data works

- **Teacher models encode human preferences** -- they were trained on vast human feedback
- **Cheaper than human annotation** -- $0.01/example vs $1-5/example for human labelers
- **Scalable** -- generate 10,000 examples overnight
- **Consistent** -- no inter-annotator disagreement

## Real-world examples

| Project | Teacher | Student | Data Size | Result |
|---------|---------|---------|-----------|--------|
| Alpaca | text-davinci-003 | LLaMA 7B | 52K instructions | Matched teacher on many tasks |
| Orca | GPT-4 | LLaMA 13B | 5M explanations | Beat ChatGPT on benchmarks |
| Phi-1 | GPT-3.5 | 1.3B custom | 1B tokens (textbook) | Matched 10x larger models on code |
| WizardLM | ChatGPT | LLaMA 7B | 250K evolved | Beat Alpaca significantly |

## Key principle

**The student doesn't learn the teacher's knowledge -- it learns the teacher's behavior on your specific task.**

## Sources

- [Alpaca: A Strong, Replicable Instruction-Following Model (Taori et al., 2023)](https://crfm.stanford.edu/2023/03/13/alpaca.html)
- [Orca: Progressive Learning from Complex Explanation Traces of GPT-4 (Mukherjee et al., 2023)](https://arxiv.org/abs/2306.02707)
- [Textbooks Are All You Need / Phi-1 (Gunasekar et al., 2023)](https://arxiv.org/abs/2306.11644)
- [WizardLM: Empowering Large Language Models to Follow Complex Instructions (Xu et al., 2023)](https://arxiv.org/abs/2304.12244)
