---
title: "Sparse & Hybrid Representations"
section: Vector Databases
layout: standard
---

# Beyond Dense Vectors: Sparse & Hybrid

Dense embeddings capture meaning but miss exact terms -- product IDs, error codes, proper nouns. Two representation strategies bridge the gap:

- **Keyword / sparse (BM25):** exact lexical matching -- perfect for codes and names, no embedding model needed. "Error E-4021" always matches "Error E-4021"; "automobile" never matches "car"
- **Learned-sparse embeddings (SPLADE, BGE-M3):** trained like embedding models but emit *sparse* vectors that carry both lexical and semantic signal -- stored and searched like a keyword index. Increasingly first-class in Pinecone, Qdrant, and Weaviate

Combining dense + sparse signals ("hybrid search") consistently beats either alone -- dense for meaning, sparse for exact matches.

> This slide is about how knowledge is **represented**. The retrieval-side mechanics -- fusion (Reciprocal Rank Fusion), tuning, and the production hybrid pipeline -- are covered in **Week 5 (RAG 2.0)**.

## Sources

- [SPLADE: Sparse Lexical and Expansion Model for First Stage Ranking (Formal et al., 2021)](https://arxiv.org/abs/2107.05720)
- [BGE M3-Embedding: Multi-Lingual, Multi-Functionality, Multi-Granularity (Chen et al., 2024)](https://arxiv.org/abs/2402.03216)
- [Okapi BM25 (Wikipedia)](https://en.wikipedia.org/wiki/Okapi_BM25)
