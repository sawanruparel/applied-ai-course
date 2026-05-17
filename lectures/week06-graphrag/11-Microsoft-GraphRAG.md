---
title: Microsoft GraphRAG
section: The Landscape
layout: standard
---

# Microsoft GraphRAG — The Original

- **Paper:** "From Local to Global: A Graph RAG Approach to Query-Focused Summarization" — Edge et al., April 2024
- **Open source:** `microsoft/graphrag` on GitHub (Python, modular pipeline)
- First to combine knowledge graphs with community detection for RAG at scale

- **Full pipeline:** chunk → LLM entity extraction → graph construction → Leiden community detection → LLM community summarization → local + global search
- **Key innovation:** hierarchical community summaries enable global queries over entire corpora
- **Cost:** indexing is expensive — every chunk needs multiple LLM calls for extraction and summarization
- **Now integrated into** Microsoft Discovery (Azure) for enterprise scientific research workflows

> The paper that launched the field — if you read one GraphRAG paper, make it this one.

## Sources

- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization (Edge et al., 2024)](https://arxiv.org/abs/2404.16130)
- [microsoft/graphrag — GitHub](https://github.com/microsoft/graphrag)
- [From Louvain to Leiden: Guaranteeing Well-Connected Communities (Traag et al., 2019)](https://arxiv.org/abs/1810.08473)
