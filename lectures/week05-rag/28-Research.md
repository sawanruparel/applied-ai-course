---
title: "Key Papers"
section: Production
layout: standard
---

# Key Papers in Self-Correcting RAG

| Paper | Authors | Venue | Core Contribution |
|-------|---------|-------|-------------------|
| [Corrective RAG (CRAG)](https://arxiv.org/abs/2401.15884) | Yan et al. | ICLR 2024 | Retrieval evaluator triggers web search fallback when internal retrieval is poor; knowledge refinement at sentence level |
| [Self-RAG](https://arxiv.org/abs/2310.11511) | Asai et al. | ICLR 2024 | Single LM learns when to retrieve and self-evaluates via special reflection tokens; inference-time controllable |
| [Adaptive-RAG](https://arxiv.org/abs/2403.14403) | Jeong et al. | NAACL 2024 | Query complexity classifier routes to single-step, multi-step, or no-retrieval strategies |
| [RAG-Fusion](https://arxiv.org/abs/2402.03367) | Rackauckas | 2024 | Generate multiple query variants and merge results via reciprocal rank fusion for broader recall |
| [REPLUG](https://arxiv.org/abs/2301.12652) | Shi et al. | NAACL 2024 | Treat LM as black box; train retriever using LM perplexity as supervision signal |
| [Active RAG (FLARE)](https://arxiv.org/abs/2305.06983) | Jiang et al. | EMNLP 2023 | Actively decide retrieval timing using forward-looking active retrieval |
| [Self-Knowledge Guided RAG](https://arxiv.org/abs/2310.05002) | Wang et al. | EMNLP 2023 | Model assesses its own knowledge to decide when retrieval is needed vs. parametric answer |
| [IRCoT](https://arxiv.org/abs/2212.10509) | Trivedi et al. | ACL 2023 | Interleave chain-of-thought reasoning with retrieval for multi-hop question answering |

**Recommended reading order** -- Start with CRAG and Self-RAG for the core self-correction patterns. Then read Adaptive-RAG for routing. IRCoT for multi-step retrieval. RAG-Fusion for query expansion.
