---
title: "Key Takeaways"
section: Close
layout: cards
---

# Key Takeaways

## Embeddings Are the Foundation

- Embeddings turn text into computable representations where semantic similarity equals geometric proximity
- Model choice matters: evaluate on YOUR data, not just MTEB leaderboards
- Matryoshka embeddings let you trade dimensions for cost without retraining
- Chunking strategy often has more impact than embedding model choice

## Vector Databases Are Infrastructure

- HNSW is the default algorithm; start there
- Hybrid search (vector + BM25) consistently outperforms either alone
- Metadata filtering is essential -- design your schema upfront
- Choose managed vs self-hosted based on team capacity, not just features

## Context Management Is the Differentiator

- Naive RAG (embed, retrieve, stuff) is a starting point, not a destination
- Reranking is the highest-ROI addition to a basic RAG pipeline
- Query transformation (HyDE, multi-query) improves recall significantly
- Parent-child retrieval and contextual retrieval solve the "lost context" problem

## Evaluate Relentlessly

- Build a golden test set of real queries and expected answers
- Measure retrieval metrics (Recall@k, MRR) AND generation metrics (faithfulness, relevance)
- Automate evaluation: run it on every pipeline change
- The best RAG systems are built through iterative measurement and improvement
