---
title: LinearRAG
section: The Landscape
layout: standard
---

# LinearRAG (ICLR 2026)

- **Core claim:** explicit relation extraction is unstable, costly, and often produces noisy graphs with incorrect relationships
- **Solution:** eliminate relation extraction entirely — build a **relation-free graph**
- Nodes are still entities, but edges are based on **co-occurrence** and **structural proximity** rather than LLM-extracted relationships

- Dramatically reduces indexing cost — no LLM calls for relationship classification
- Avoids the "hallucinated edge" problem where LLMs invent relationships that don't exist in the source text
- Competitive accuracy with full GraphRAG on standard benchmarks

- Tradeoff: loses the rich semantic edge labels ("developed", "treats", "reports_to") that enable precise graph queries
- Best for domains where entity co-occurrence is a strong signal of relatedness

> LinearRAG challenges a core assumption: do we actually need LLM-extracted relationships, or is co-occurrence enough?

## Sources

- [LinearRAG: Linear Graph Retrieval Augmented Generation on Large-scale Corpora (Zhuang et al., ICLR 2026)](https://arxiv.org/abs/2510.10114)
- [DEEP-PolyU/LinearRAG — GitHub](https://github.com/DEEP-PolyU/LinearRAG)
