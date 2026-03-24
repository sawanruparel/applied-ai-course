---
title: "Similarity Metrics"
section: Embeddings Deep Dive
layout: two-column
---

# Similarity Metrics

How you measure "closeness" between vectors matters more than you think.

## The Metrics

**Cosine Similarity**
- Measures angle between vectors, ignores magnitude
- Range: [-1, 1] (1 = identical direction)
- Formula: cos(A,B) = (A . B) / (||A|| * ||B||)
- **Most common choice** -- works well when embeddings are normalized
- Invariant to document length effects on vector magnitude

**Dot Product (Inner Product)**
- Measures both angle AND magnitude
- Range: (-inf, +inf)
- Formula: A . B = sum(a_i * b_i)
- Use when magnitude carries meaning (e.g., document importance)
- Equivalent to cosine similarity when vectors are L2-normalized

**Euclidean Distance (L2)**
- Measures straight-line distance in vector space
- Range: [0, +inf) (0 = identical)
- Formula: ||A - B|| = sqrt(sum((a_i - b_i)^2))
- Sensitive to magnitude differences
- Less common in practice for text embeddings

## When to Use Which

**Use cosine similarity when:**
- Your embeddings come from different models or are unnormalized
- You care about semantic direction, not magnitude
- Default choice for most RAG systems

**Use dot product when:**
- Vectors are already L2-normalized (then it equals cosine)
- Your vector DB optimizes for dot product (many do internally)
- You want to factor in vector magnitude as a relevance signal

**Use Euclidean when:**
- Working with non-text embeddings (images, audio)
- Clustering tasks where absolute position matters
- Your vectors occupy a bounded region of space

> **Practical tip**: Most embedding APIs return normalized vectors. When normalized, cosine similarity and dot product give identical rankings. Check your model's documentation.
