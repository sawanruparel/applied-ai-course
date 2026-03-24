---
title: Vector RAG Recap
section: Framing
layout: two-column
---

## How Vector RAG Works
- Chunk documents into passages
- Embed each chunk into a vector space
- At query time, embed the question and retrieve top-k nearest chunks
- Feed retrieved chunks as context to the LLM

## What It Does Well
- Semantic similarity search — finds passages "about" the query
- Simple to set up — chunk, embed, store, retrieve
- Works great for factoid Q&A over focused document sets
- Fast retrieval at scale with approximate nearest neighbors

> Vector RAG treats every chunk as an independent island — no awareness of how facts connect across documents.

## Sources

- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al., 2020)](https://arxiv.org/abs/2005.11401)
