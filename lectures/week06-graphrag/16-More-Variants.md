---
title: More Variants
section: The Landscape
layout: cards
---

## KET-RAG (KDD 2025)
Cost-efficient multi-granular indexing. Builds indices at multiple levels of granularity so you pay for detail only where needed. Targets the indexing cost problem from a different angle than LazyGraphRAG.

## E2GraphRAG (2025)
Combines LLM-built summary trees with SpaCy-based entity graphs. Uses traditional NER instead of LLM extraction for entities — faster and cheaper, with LLMs reserved for summarization only.

## nano-graphrag
Minimal, lightweight reference implementation. ~500 lines of core code. Useful for prototyping, benchmarking, and understanding the pipeline without framework overhead.

## FastGraphRAG / MiniRAG
Optimized for speed — compressed graph representations, pre-computed traversal indices. Target sub-100ms retrieval for production systems where latency matters more than completeness.

## Sources

- [KET-RAG: A Cost-Efficient Multi-Granular Indexing Framework for Graph-RAG (KDD 2025)](https://arxiv.org/abs/2502.09304)
- [E2GraphRAG: Streamlining Graph-based RAG for High Efficiency and Effectiveness (2025)](https://arxiv.org/abs/2505.24226)
- [nano-graphrag — GitHub](https://github.com/gusye1234/nano-graphrag)
- [FastGraphRAG — circlemind-ai/fast-graphrag — GitHub](https://github.com/circlemind-ai/fast-graphrag)
- [MiniRAG: Towards Extremely Simple Retrieval-Augmented Generation (Fan et al., 2025)](https://arxiv.org/abs/2501.06713)
- [spaCy — Industrial-Strength NLP](https://spacy.io)
