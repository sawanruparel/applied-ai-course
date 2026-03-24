---
title: "Vector Database Landscape"
section: Vector Databases
layout: cards
---

# Vector Database Landscape

A vector database is a specialized store optimized for indexing, storing, and querying high-dimensional vectors at scale.

## Pinecone

- Fully managed, serverless option available
- Scales to billions of vectors without infrastructure management
- Sparse-dense hybrid search built in
- Namespaces for multi-tenant isolation
- **Tradeoff**: vendor lock-in, no self-hosted option, cost at scale

## Weaviate

- Open-source (BSL license), cloud or self-hosted
- Built-in vectorization modules (plug in OpenAI, Cohere, etc.)
- GraphQL API, hybrid (vector + BM25) search
- Multi-modal: text, images, audio in same collection
- **Tradeoff**: heavier resource footprint, complex configuration

## Qdrant

- Open-source (Apache 2.0), Rust-based, high performance
- Rich filtering with payload indexes (pre-filtering)
- Quantization support: scalar, product, binary
- gRPC and REST APIs, strong Python SDK
- **Tradeoff**: smaller ecosystem than Pinecone/Weaviate

## Chroma

- Open-source, designed for developer ergonomics
- Embedded mode: runs in-process (great for prototyping)
- Simple API: add, query, delete -- minimal boilerplate
- Integrates with LangChain, LlamaIndex out of the box
- **Tradeoff**: not designed for production scale (millions+ vectors)

## pgvector / PostgreSQL

- Vector search as a PostgreSQL extension
- Use your existing Postgres infrastructure and tooling
- HNSW and IVFFlat index types, hybrid with SQL queries
- Strong for: teams already on Postgres, moderate scale (<10M vectors)
- **Tradeoff**: not as fast as purpose-built vector DBs at large scale

## Sources

- [Pinecone Documentation (Pinecone)](https://docs.pinecone.io)
- [Weaviate Documentation (Weaviate)](https://weaviate.io/developers/weaviate)
- [Qdrant Documentation (Qdrant)](https://qdrant.tech/documentation/)
- [Chroma Documentation (Chroma)](https://docs.trychroma.com)
- [pgvector — Open-source vector similarity search for PostgreSQL](https://github.com/pgvector/pgvector)
