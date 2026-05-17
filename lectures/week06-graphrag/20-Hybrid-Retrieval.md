---
title: Hybrid Retrieval
section: Architecture
layout: two-column
---

## Vector Path
- Embed query → retrieve top-k chunks by cosine similarity
- Fast, fuzzy, handles synonyms and paraphrasing
- No structural reasoning
- Good first-pass candidate retrieval

## Graph Path
- Identify entities in query → traverse graph neighborhood
- Precise, structured, handles multi-hop reasoning
- Slower, requires entity recognition
- Good for relationship verification and enrichment

- **HybridRAG pattern:** vector search for initial candidate retrieval, graph traversal for relationship verification and context enrichment
- Accepts 150-200ms orchestration overhead for **15-25% accuracy gains**
- Graph serves as "source of truth" while vector search handles broad recall

> The emerging consensus: don't choose between vector and graph — combine them. Use vectors for breadth, graphs for depth.

## Sources

- [HybridRAG: Integrating Knowledge Graphs and Vector Retrieval Augmented Generation (Sarmah et al., 2024)](https://arxiv.org/abs/2408.04948)
- [Towards Practical GraphRAG: Efficient Knowledge Graph Construction and Hybrid Retrieval at Scale (Min et al., 2025)](https://arxiv.org/abs/2507.03226)
