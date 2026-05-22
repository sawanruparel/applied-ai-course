---
title: "Reranking"
section: Context Management
layout: standard
---

# Reranking: From Recall to Precision

Embedding-based retrieval casts a wide net (high recall); a reranker narrows it to the most relevant results (high precision).

- **Bi-encoders** (embedding models): encode query and document *independently* -- fast, but no cross-attention between them
- **Cross-encoders** (rerankers): process query AND document *together* through full attention -- 100-1000x slower, but capture fine-grained relevance
- The standard pattern is two-stage: retrieve 50-100 candidates with the bi-encoder, then rerank to the top 5-10 with a cross-encoder

> Reranking is fundamentally a **retrieval-pipeline** technique. The reranker model landscape (Cohere, bge, ColBERT late-interaction) and where reranking sits in a production RAG pipeline are covered in **Week 5 (RAG 2.0)**.

## Sources

- [ColBERTv2: Effective and Efficient Retrieval via Lightweight Late Interaction (Santhanam et al., 2022)](https://arxiv.org/abs/2112.01488)
