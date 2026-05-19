---
title: "Anti-Patterns"
section: Operations
layout: standard
---

# Common Ways to Waste Money on GraphRAG

## Anti-pattern 1: "Just turn on GraphRAG"

Running microsoft/graphrag with defaults on a corpus your team has never queried, then declaring it "improved retrieval" because anecdotes feel good.

- **What's wrong:** No baseline to compare against; no eval set; cost is now 100×; no one can prove (or disprove) whether it helps
- **Fix:** Always have a vector-RAG baseline + a measured eval set *before* turning on GraphRAG

## Anti-pattern 2: Building a graph for a corpus that doesn't have entities

A folder of well-written technical blog posts. The pipeline runs; the graph is mostly singleton nodes; community detection produces 200 tiny communities; global queries are worse than the vector baseline.

- **Fix:** Look at your extracted graph. If average degree is < 2, your corpus doesn't have the right shape for GraphRAG. Stay on vector + keyword

## Anti-pattern 3: Treating it as a vector-RAG replacement

GraphRAG is at its best on global and multi-hop queries; it's at best parity with vector RAG on local lookups. Replacing vector entirely makes the common case (point lookups) **worse**.

- **Fix:** Hybrid. Always.

## Anti-pattern 4: Re-indexing the whole corpus on every change

A 10M-token corpus with 5 new documents/day. Re-running the full pipeline nightly. Costs scale linearly with corpus size, not change size.

- **Fix:** LightRAG, or roll your own incremental: re-extract only the new chunks, merge into the existing graph, re-summarize only affected communities

## Anti-pattern 5: Believing the eval benchmarks transfer

The Microsoft GraphRAG paper showed +20–80% on **query-focused summarization** over **news/podcast transcripts**. Your corpus is engineering wikis and your queries are mostly "what does this code do" — those benchmarks tell you very little.

- **Fix:** Build your own eval set with your queries and your corpus. Always.

## Anti-pattern 6: Trusting the graph too much

The LLM extracted "Alice manages Bob" from a chunk that actually said "Alice mentioned Bob in passing". The graph now has a fabricated managerial relationship. Global queries about reporting structure surface fiction.

- **Fix:** Require the extractor to quote source spans; sample-audit the extracted graph; weight edges by extraction confidence

## Anti-pattern 7: Ignoring drift

A graph indexed in January is queried in November. Entities have been renamed, restructured, deprecated. Answers reflect history, not present.

- **Fix:** Time-stamp every chunk and entity; weight recent over old; re-index periodically; consider versioned graphs for audit-sensitive domains

Sources

- [Edge et al. — limitations section](https://arxiv.org/abs/2404.16130)
- [Microsoft Research — LazyGraphRAG analysis](https://www.microsoft.com/en-us/research/blog/lazygraphrag-setting-a-new-standard-for-quality-and-cost/)
