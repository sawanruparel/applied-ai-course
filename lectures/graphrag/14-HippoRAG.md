---
title: HippoRAG
section: The Landscape
layout: standard
---

# HippoRAG & HippoRAG2

- **Inspiration:** hippocampal indexing theory — how the human brain indexes and retrieves memories
- **HippoRAG (NeurIPS 2024):** uses personalized PageRank-based random walk strategies for retrieval
- Compact prompt size (~1,000 tokens) — much smaller context than full GraphRAG
- Retrieval mimics how human memory "activates" related concepts through spreading activation

- **HippoRAG2 (ICML 2025):** "From RAG to Memory" — frames retrieval as non-parametric continual learning
- Outperforms standard RAG on factual, sensemaking, and **associative memory** tasks
- Key insight: the graph isn't just an index — it's a **memory system** that grows with new documents

> HippoRAG reframes the question: instead of "how do we retrieve documents?", ask "how do we build an AI memory system?"

## Sources

- [HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models (Gutierrez et al., NeurIPS 2024)](https://arxiv.org/abs/2405.14831)
- [From RAG to Memory: Non-Parametric Continual Learning for Large Language Models — HippoRAG2 (Gutierrez et al., ICML 2025)](https://arxiv.org/abs/2502.14802)
