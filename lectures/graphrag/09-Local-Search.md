---
title: Local Search
section: Core Concepts
layout: standard
---

# Local Search

- Best for questions about **specific entities** mentioned in the corpus
- Starts from entities in the query, traverses their **graph neighborhood**
- Combines graph-derived context with the **original text chunks** those entities came from

1. Identify entities mentioned in the query
2. Look up those entities in the graph
3. Traverse 1-2 hops outward to gather related entities and relationships
4. Pull the source text chunks associated with the traversed nodes
5. Assemble structured context and pass to the LLM

- Efficient — only touches a subgraph, not the whole corpus
- Great for: "What is Entity X's relationship with Entity Y?" or "Tell me about Project Z"
- Limitation: cannot answer questions that require understanding the *whole* dataset

## Sources

- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization (Edge et al., 2024)](https://arxiv.org/abs/2404.16130)
