---
title: Frameworks & Tooling
section: Architecture
layout: standard
---

# Frameworks & Tooling

| Framework | What It Does | Best For |
|-----------|-------------|----------|
| `microsoft/graphrag` | Reference implementation — full pipeline in Python | Production GraphRAG with all features |
| LlamaIndex `PropertyGraphStore` | GraphRAG abstractions with Neo4j backend, built-in community detection | Teams already using LlamaIndex |
| LangChain + Neo4j | Cypher query generation, multi-hop reasoning, relationship-aware retrieval | Teams already using LangChain |
| `nano-graphrag` | Minimal ~500-line implementation | Prototyping and learning |
| Flexible GraphRAG | Supports 8 graph DBs, 10 vector DBs, Docling/LlamaParse ingestion | Multi-backend flexibility |
| FalkorDB GraphRAG-SDK | Build GraphRAG apps at scale with FalkorDB | High-performance in-memory graphs |

- Most frameworks converge on the same pipeline: chunk → extract → build → index → query
- The differentiators are **which LLM** for extraction, **which graph DB** for storage, and **how much** you pre-compute vs. defer to query time

## Sources

- [microsoft/graphrag — GitHub](https://github.com/microsoft/graphrag)
- [LlamaIndex Property Graph Index](https://docs.llamaindex.ai/en/stable/examples/property_graph/property_graph_basic/)
- [LangChain Neo4j Integration](https://docs.langchain.com/oss/python/integrations/providers/neo4j)
- [nano-graphrag — GitHub](https://github.com/gusye1234/nano-graphrag)
- [FalkorDB GraphRAG-SDK — GitHub](https://github.com/FalkorDB/GraphRAG-SDK)
