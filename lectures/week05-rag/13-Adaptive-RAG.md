---
title: "Adaptive RAG"
section: Self-Correcting Retrieval
layout: flow
---

# Adaptive RAG: Route Queries by Complexity

**Paper** -- Jeong et al., "Adaptive-RAG: Learning to Adapt Retrieval-Augmented Large Language Models through Question Complexity" (NAACL 2024)

## Classify Query Complexity

A lightweight classifier (trained on silver labels from LLM evaluation) categorizes each incoming query:

- **Level A** -- Simple factoid questions answerable by a single passage
- **Level B** -- Moderate questions requiring synthesis across 2-3 sources
- **Level C** -- Complex multi-hop questions requiring iterative reasoning

## Route to Strategy

| Complexity | Strategy | Example |
|-----------|----------|---------|
| A (Simple) | Single-step retrieval | "When was Python 3.12 released?" |
| B (Moderate) | Retrieve + rerank + verify | "How does Python's GIL affect async performance?" |
| C (Complex) | Multi-step iterative RAG | "Compare Python and Rust memory safety approaches and their impact on web framework performance" |

## Execute Retrieval

- **Level A**: Single retrieval pass, direct generation. Fast and cheap.
- **Level B**: Retrieve, rerank, verify relevance, generate with self-check.
- **Level C**: Iterative retrieval with query decomposition. Each sub-question triggers its own retrieval cycle. Results are aggregated before final generation.

## Generate with Appropriate Depth

Match generation effort to query complexity. Simple queries get concise answers; complex queries get structured, multi-part responses with citations.

## Sources

- [Adaptive-RAG: Learning to Adapt Retrieval-Augmented LLMs through Question Complexity (Jeong et al., NAACL 2024)](https://arxiv.org/abs/2403.14403)
