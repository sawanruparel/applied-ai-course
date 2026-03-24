---
title: LightRAG
section: The Landscape
layout: standard
---

# LightRAG

- Removes community detection entirely — simplifies the pipeline
- **Dual-level retrieval:** combines low-level (specific entity lookup) and high-level (thematic) knowledge discovery
- Achieves faster retrieval with lower latency than standard GraphRAG
- Maintains multi-hop reasoning through **coherent graph traversal** without hierarchical summaries

- Tradeoff: loses the global search capability that community summaries enable
- Best suited for domains where local and semi-local queries dominate
- Simpler to deploy and maintain — fewer moving parts, no community summarization step

> LightRAG is GraphRAG for teams that want graph-structured retrieval without the full indexing overhead.

## Sources

- [LightRAG: Simple and Fast Retrieval-Augmented Generation (Guo et al., 2024)](https://arxiv.org/abs/2410.05779)
- [HKUDS/LightRAG — GitHub](https://github.com/HKUDS/LightRAG)
