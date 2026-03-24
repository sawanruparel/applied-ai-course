---
title: "BM25 and Keyword Search"
section: Hybrid Search
layout: standard
---

# BM25 and Keyword Search: When Exact Match Matters

**BM25 scoring** -- Best Match 25 ranks documents using term frequency (TF), inverse document frequency (IDF), and document length normalization. It rewards documents containing rare query terms and penalizes very long documents.

**BM25 formula (simplified)**

```
score(q, d) = SUM[ IDF(t) * (TF(t,d) * (k1 + 1)) / (TF(t,d) + k1 * (1 - b + b * |d|/avgdl)) ]
```

- `k1` controls term frequency saturation (typical: 1.2--2.0)
- `b` controls document length normalization (typical: 0.75)

**When BM25 wins over vectors**

- Exact entity lookup: product SKUs, error codes, legal citations
- Boolean queries with required terms
- Queries with rare or domain-specific terminology
- Structured metadata search (dates, identifiers, categories)
- Negation and exclusion patterns

**Practical considerations**

- BM25 requires a traditional inverted index (Elasticsearch, Lucene, SQLite FTS5)
- Tokenization and stemming choices directly affect recall
- No model inference required: sub-millisecond latency at scale
- Works out of the box with no training data
- Cannot handle synonyms, paraphrases, or semantic similarity without expansion

## Sources

- [The Probabilistic Relevance Framework: BM25 and Beyond (Robertson & Zaragoza, 2009)](https://www.staff.city.ac.uk/~sbrp622/papers/foundations_bm25_review.pdf)
- [Elasticsearch Documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)
- [SQLite FTS5 Extension](https://www.sqlite.org/fts5.html)
