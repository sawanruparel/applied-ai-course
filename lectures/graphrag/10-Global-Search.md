---
title: Global Search
section: Core Concepts
layout: standard
---

# Global Search

- Best for **sensemaking** questions that span the entire corpus
- Uses a **map-reduce** approach over community summaries

1. **Map phase:** each community summary generates a partial answer to the query, scored by relevance
2. **Reduce phase:** top-scoring partial answers are synthesized into a comprehensive final response

- Resource-intensive — touches all (or most) community summaries
- But dramatically cheaper than feeding every document to the LLM
- Great for: "What are the top 5 risks across all audit reports?" or "Summarize the main research themes"

> Global search is what makes GraphRAG fundamentally different from vector RAG — it can synthesize across an entire dataset, not just retrieve from it.

## Sources

- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization (Edge et al., 2024)](https://arxiv.org/abs/2404.16130)
