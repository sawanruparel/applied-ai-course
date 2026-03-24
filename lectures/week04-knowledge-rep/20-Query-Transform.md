---
title: "Query Transformation"
section: Context Management
layout: cards
---

# Query Transformation

The user's query is often a poor retrieval signal. Transform it before searching.

## HyDE (Hypothetical Document Embeddings)

- Ask the LLM to **generate a hypothetical answer**, then embed THAT instead of the query
- Intuition: a hypothetical answer looks more like the stored documents than a short question does
- Example: "What is HNSW?" becomes a generated paragraph explaining HNSW, which better matches documentation
- **Cost**: one LLM call per query (~200-500ms)
- Works well for technical/factual queries; less useful for conversational ones

## Multi-Query Retrieval

- Generate **3-5 query variations** from different angles using an LLM
- Retrieve results for each variation, then deduplicate and merge
- Example: "How do I handle rate limits?" generates: "rate limiting best practices", "API throttling strategies", "429 error handling"
- **Benefit**: covers more of the embedding space, higher recall
- **Cost**: multiplies retrieval calls (but retrieval is cheap)

## Step-Back Prompting

- Generate a **more abstract version** of the query before retrieving
- "Why does my Python script fail with OOM on large CSV files?" steps back to "memory management for large file processing in Python"
- Retrieves broader conceptual context, not just narrow matches
- Combine with the original query for both specific and general results

## Query Decomposition

- Break **complex questions** into sub-questions, retrieve for each
- "Compare HNSW and IVF for a 100M vector dataset with real-time requirements" decomposes into: "HNSW performance at 100M scale", "IVF performance at 100M scale", "real-time vector search requirements"
- Especially useful for multi-hop reasoning and comparison questions
- **Pattern**: decompose, retrieve per sub-query, synthesize answer from all results

## Sources

- [Precise Zero-Shot Dense Retrieval without Relevance Labels — HyDE (Gao et al., 2022)](https://arxiv.org/abs/2212.10496)
- [Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models (Zheng et al., 2023)](https://arxiv.org/abs/2310.06117)
