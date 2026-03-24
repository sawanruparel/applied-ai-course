---
title: "Chunking Strategies"
section: Embeddings Deep Dive
layout: cards
---

# Chunking Strategies

How you split documents into chunks is often **more important** than which embedding model you use.

## Fixed-Size Chunking

- Split every N tokens/characters with optional overlap
- Simple and predictable -- easy to reason about storage and costs
- Overlap (e.g., 10-20%) prevents information loss at boundaries
- **Problem**: splits mid-sentence, mid-paragraph, mid-thought
- Good baseline; use 256-512 tokens with 50-token overlap
- Best for: homogeneous text, quick prototyping

## Semantic Chunking

- Split where the meaning shifts, not at arbitrary boundaries
- Compute embeddings for sentences, split when cosine similarity drops below threshold
- Produces variable-length chunks aligned to topic boundaries
- More expensive: requires embedding each sentence during ingestion
- Best for: articles, reports, heterogeneous documents

## Recursive / Hierarchical

- Try large separators first (##, \n\n), fall back to smaller ones (\n, ., " ")
- Respects document structure: headers, paragraphs, sentences
- LangChain's RecursiveCharacterTextSplitter is the classic implementation
- Controllable: set max chunk size, it finds the best split points
- Best for: markdown, code, structured documents

## Document-Aware / Agentic

- Use document structure: HTML tags, PDF sections, table boundaries
- Specialized parsers for each format (e.g., table rows stay together)
- Can use an LLM to generate chunk summaries or propositions
- Highest quality but highest cost and complexity
- Best for: technical docs, legal contracts, multi-format corpora

## Sources

- [LangChain RecursiveCharacterTextSplitter (LangChain)](https://reference.langchain.com/python/langchain-text-splitters/character/RecursiveCharacterTextSplitter)
