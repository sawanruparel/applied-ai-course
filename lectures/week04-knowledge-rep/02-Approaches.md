---
title: "Three Approaches to the Knowledge Gap"
section: Framing
layout: cards
---

# Three Approaches to the Knowledge Gap

## Fine-Tuning

- Bake knowledge directly into model weights
- Best for: style, format, domain vocabulary
- **Not ideal for factual recall** -- models still hallucinate fine-tuned facts
- Expensive: requires curated datasets, GPU hours, and ongoing maintenance
- Latency: days to weeks per update cycle
- Example: fine-tuning on legal language for contract analysis

## Retrieval-Augmented Generation (RAG)

- Retrieve relevant documents at inference time, inject into prompt
- Best for: factual Q&A, knowledge that changes frequently
- No model retraining required -- update the index, not the model
- Cost: embedding + storage + retrieval infrastructure
- Latency: adds 100-500ms per query for retrieval step
- The **dominant pattern** in production AI systems today

## Long Context

- Stuff everything into a massive context window (128K-2M tokens)
- Best for: small-to-medium corpora, document analysis tasks
- Simple architecture: no retrieval pipeline to maintain
- Cost: proportional to tokens processed per request
- Constraint: context windows have limits; 1M tokens is ~3,000 pages
- Emerging: Gemini 1.5 Pro (2M), Claude (200K), GPT-4o (128K)

## Sources

- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al., 2020)](https://arxiv.org/abs/2005.11401)
