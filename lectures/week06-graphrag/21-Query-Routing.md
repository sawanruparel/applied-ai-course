---
title: Query Routing
section: Architecture
layout: flow
---

## Classify the Query
Is this about specific entities, broad themes, or simple facts? A lightweight classifier (or LLM call) categorizes incoming queries.

## Route to Strategy
**Simple factoid** → vector search only. **Entity-specific** → local graph search. **Thematic / global** → global search over community summaries. **Multi-hop** → hybrid (vector + graph traversal).

## Execute & Assemble
Each strategy assembles context differently. Local search returns subgraph + source chunks. Global search returns ranked community summary excerpts. Hybrid merges both result sets.

## Generate
The LLM receives structured context — not a flat list of chunks, but entities, relationships, and summaries organized by relevance. This structure improves answer quality and reduces hallucination.
