---
title: Cost Anatomy
section: Architecture
layout: standard
---

# The Cost of GraphRAG

| Component | Vector RAG | Full GraphRAG | LazyGraphRAG |
|-----------|-----------|---------------|--------------|
| Indexing (per 1M tokens) | $1-5 (embed only) | $500-2,000 (LLM extraction + summarization) | $1-5 (same as vector) |
| Storage | Vector DB | Vector DB + Graph DB | Vector DB + Graph DB |
| Query cost | Low (embed + lookup) | Moderate (subgraph traversal) | Low-moderate (on-demand summarization) |
| Infrastructure | ~$300-500/mo | ~$800-1,500/mo | ~$400-700/mo |

- **Biggest cost driver:** LLM calls during indexing — entity extraction and community summarization
- **How to reduce:** use smaller models for extraction (GPT-4o-mini), batch efficiently, use SpaCy for NER where possible
- **LazyGraphRAG** eliminates upfront summarization cost entirely
- **LinearRAG** eliminates relationship extraction cost
- Rule of thumb: if your corpus changes frequently, the re-indexing cost matters more than the initial build

## Sources

- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization (Edge et al., 2024)](https://arxiv.org/abs/2404.16130)
- [LazyGraphRAG (Microsoft Research, 2024)](https://www.microsoft.com/en-us/research/blog/lazygraphrag-setting-a-new-standard-for-quality-and-cost/)
- [LinearRAG: Linear Graph Retrieval Augmented Generation on Large-scale Corpora (Zhuang et al., ICLR 2026)](https://arxiv.org/abs/2510.10114)
- [spaCy — Industrial-Strength NLP](https://spacy.io)
