---
title: Graph Databases
section: Architecture
layout: cards
---

## Neo4j
The default choice. Mature Cypher query language, deep LangChain and LlamaIndex integrations, native vector search for hybrid retrieval. Graph Data Science library includes community detection algorithms out of the box.

## FalkorDB
Open-source, in-memory property graph built on GraphBLAS. Redis module architecture. Cypher-compatible. Optimized specifically for GraphRAG workloads — benchmarks show strong performance on multi-hop queries.

## NebulaGraph
Distributed architecture for large-scale, high-throughput graph workloads. Horizontal scaling for billion-node graphs. Good fit when the knowledge graph outgrows single-machine capacity.

## PuppyGraph
Not a database — a graph *query engine* that runs graph analytics directly on your existing relational data (Postgres, Snowflake) without ETL. Useful when your entities already live in SQL tables.

## Sources

- [Neo4j Documentation](https://neo4j.com/docs/)
- [FalkorDB](https://docs.falkordb.com/)
- [NebulaGraph Database Manual](https://docs.nebula-graph.io/)
- [PuppyGraph Documentation](https://docs.puppygraph.com/)
