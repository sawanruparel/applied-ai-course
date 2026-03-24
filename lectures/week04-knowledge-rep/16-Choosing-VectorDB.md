---
title: "Choosing a Vector Database"
section: Vector Databases
layout: flow
---

# Choosing a Vector Database

There is no single best vector DB. The right choice depends on your constraints.

## Step 1: Define Your Scale

- **< 100K vectors**: Chroma (embedded), pgvector, or even in-memory with NumPy
- **100K - 10M vectors**: pgvector, Qdrant, Weaviate, Pinecone
- **10M - 1B vectors**: Pinecone, Qdrant (distributed), Weaviate (distributed)
- **> 1B vectors**: Pinecone serverless, custom Qdrant/Milvus clusters

## Step 2: Managed vs Self-Hosted

- **Managed** (Pinecone, Weaviate Cloud, Qdrant Cloud): zero ops overhead, pay-per-use, vendor lock-in risk
- **Self-hosted** (Qdrant, Weaviate, Milvus, pgvector): full control, data sovereignty, requires infrastructure team
- **Embedded** (Chroma, LanceDB, SQLite-VSS): runs in-process, no server needed, limited scale

## Step 3: Feature Requirements

- **Hybrid search needed?** Pinecone, Weaviate, Qdrant all support it; pgvector requires separate BM25 setup
- **Multi-tenancy?** Pinecone namespaces, Qdrant collection-per-tenant or payload filtering, Weaviate multi-tenancy
- **Rich metadata filtering?** Qdrant and Pinecone have the strongest filtering engines
- **Existing Postgres?** pgvector avoids adding a new database to your stack

## Step 4: Evaluate Total Cost

- **Storage**: raw vectors + indexes + metadata + replication
- **Compute**: queries per second, embedding dimensions, concurrent users
- **Operational**: monitoring, backups, upgrades, incident response
- **Pinecone serverless**: ~$2/month per 1M vectors (1536-dim) for storage; pay per query
- **pgvector on RDS**: included in existing Postgres costs; limited by instance size

## Step 5: Prototype and Benchmark

- Load your actual data (not synthetic benchmarks)
- Test with your actual query patterns and filters
- Measure: p50/p95 latency, recall@10, cost per 1000 queries
- Plan for 10x growth from day one
