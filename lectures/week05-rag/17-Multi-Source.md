---
title: "Multi-Source RAG"
section: Advanced Techniques
layout: cards
---

# Multi-Source RAG: Combining Heterogeneous Knowledge

## Vector Store

Dense retrieval over document embeddings. Best for semantic similarity search over unstructured text -- technical docs, knowledge bases, support articles.

Typical stack: Pinecone, Weaviate, Qdrant, pgvector

## Structured Database

Text-to-SQL or text-to-query for structured data. Best for numerical queries, aggregations, filtering, and joins across relational data.

Typical stack: PostgreSQL, BigQuery, Snowflake

## API Endpoints

Real-time data from external services. Best for current information: stock prices, weather, user profiles, live system status.

Typical stack: REST/GraphQL APIs with tool-use integration

## Web Search

Broad internet search for fresh, general knowledge. Best as a fallback when internal sources lack coverage, or for recent events beyond the training cutoff.

Typical stack: Tavily, Serper, Brave Search API

## Knowledge Graph

Entity-relationship traversal for structured reasoning. Best for multi-hop questions involving relationships between entities -- org charts, dependency graphs, ontologies.

Typical stack: Neo4j, Amazon Neptune, property graphs

## Code Repositories

AST-aware retrieval over codebases. Best for code search, API usage examples, and understanding implementation details. Requires specialized chunking strategies.

Typical stack: GitHub Search API, Sourcegraph, tree-sitter based indexing
