---
title: Where Vector RAG Breaks
section: Framing
layout: standard
---

# Where Vector RAG Breaks

- **Multi-hop questions** — "Which suppliers of our critical components had quality issues in the past 18 months?" requires joining facts across multiple documents
- **Global sensemaking** — "What are the main themes across all 500 incident reports?" cannot be answered by any single chunk
- **Entity-dense queries** — accuracy drops toward 0% when queries involve 5+ entities; vector search cannot disambiguate without structure
- **Relationship reasoning** — "How does Drug A interact with Drug B given Patient C's history?" needs traversal, not similarity
- **Contradictory sources** — vector RAG retrieves conflicting chunks with no way to reconcile them

> The problem isn't retrieval quality — it's that some questions require *structure*, not just *similarity*.

## Sources

- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization (Edge et al., 2024)](https://arxiv.org/abs/2404.16130)
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al., 2020)](https://arxiv.org/abs/2005.11401)
