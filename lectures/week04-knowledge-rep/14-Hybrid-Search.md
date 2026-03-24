---
title: "Hybrid Search"
section: Vector Databases
layout: two-column
---

# Hybrid Search: Vector + Keyword

Neither vector search nor keyword search is sufficient alone. Combining them yields **significantly better recall**.

## Vector Search (Semantic)

**Strengths:**
- Understands meaning, synonyms, paraphrases
- "How to fix authentication errors" matches "login troubleshooting guide"
- Works across languages (with multilingual embeddings)

**Weaknesses:**
- Struggles with exact terms: product IDs, error codes, proper nouns
- "Error E-4021" may not match "Error E-4021" if the embedding model hasn't seen it
- Can return semantically similar but factually wrong results

## Keyword Search (BM25 / Sparse)

**Strengths:**
- Exact lexical matching -- perfect for IDs, codes, names
- Well-understood relevance scoring (TF-IDF based)
- No embedding model needed, works out of the box
- "Error E-4021" always matches "Error E-4021"

**Weaknesses:**
- No understanding of meaning or intent
- "automobile" won't match "car"
- Sensitive to vocabulary mismatch between query and document

### Fusion Strategies

| Method | How It Works | Typical Use |
|--------|-------------|-------------|
| **Reciprocal Rank Fusion (RRF)** | Score = sum(1 / (k + rank_i)) across result lists | Simple, no tuning needed |
| **Linear combination** | score = alpha * vector_score + (1 - alpha) * bm25_score | Tunable, requires normalized scores |
| **Learned fusion** | Train a model to combine scores | Highest quality, requires training data |

> **RRF** is the most common starting point. It requires no score normalization and is surprisingly effective. Typical k=60.

### Sparse Embeddings: Best of Both Worlds

- **SPLADE** and **BGE-M3** produce learned sparse vectors that capture both lexical and semantic signals
- Stored and searched like keyword indexes but trained like embedding models
- Increasingly supported: Pinecone, Qdrant, Weaviate all support sparse vectors

## Sources

- [Okapi BM25 (Wikipedia)](https://en.wikipedia.org/wiki/Okapi_BM25)
- [Reciprocal Rank Fusion Outperforms Condorcet and Individual Rank Learning Methods (Cormack et al., 2009)](https://cormack.uwaterloo.ca/cormacksigir09-rrf.pdf)
- [SPLADE: Sparse Lexical and Expansion Model for First Stage Ranking (Formal et al., 2021)](https://arxiv.org/abs/2107.05720)
- [BGE M3-Embedding: Multi-Lingual, Multi-Functionality, Multi-Granularity (Chen et al., 2024)](https://arxiv.org/abs/2402.03216)
