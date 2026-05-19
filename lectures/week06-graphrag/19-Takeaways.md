---
title: "Takeaways"
section: Close
layout: standard
---

# What to Remember

## Five claims

1. **GraphRAG indexes relationships, not just chunks.** The LLM does extra work at index time so retrieval can traverse a graph at query time
2. **Local and global search are different code paths.** Local = entity-centered drill-down. Global = map-reduce over community summaries
3. **The biggest cost is indexing**, not querying. Most production trouble is about making that cost amortize
4. **Hybrid wins.** Vector + graph + keyword + reranker is the actual production architecture. Pure GraphRAG is for special-purpose workloads
5. **The benchmarks don't transfer.** Build your own eval set with your queries and corpus before committing — and especially before claiming GraphRAG "works" for your case

## What you should be able to do after this lecture

- Sketch the indexing pipeline (chunks → extract → merge → cluster → summarize)
- Decide whether a query is local or global
- Read a community summary and explain how it would be used in global search
- Pick between microsoft/graphrag, LightRAG, LazyGraphRAG, HippoRAG given constraints
- Identify cost and quality trade-offs of each
- Write a 50-line PageRank-on-entity-graph baseline if asked

## What's next

- **Week 7 — Evaluation & LLM-as-a-Judge.** The eval harness you need to actually measure whether GraphRAG (or any retrieval change) helps
- **Week 11 — HITL & Memory.** Long-term memory is graph-shaped; many of the same patterns apply

Sources

- [Edge et al. — GraphRAG paper](https://arxiv.org/abs/2404.16130)
- [Microsoft Research — LazyGraphRAG](https://www.microsoft.com/en-us/research/blog/lazygraphrag-setting-a-new-standard-for-quality-and-cost/)
- [Guo et al. — LightRAG](https://arxiv.org/abs/2410.05779)
- [Gutiérrez et al. — HippoRAG](https://arxiv.org/abs/2405.14831)
- [microsoft/graphrag](https://github.com/microsoft/graphrag)
- [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG)
