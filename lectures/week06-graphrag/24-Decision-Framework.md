---
title: Decision Framework
section: When to Use It
layout: flow
---

## Do your queries need multi-hop reasoning?
If users ask questions that require connecting facts across 2+ documents — "Who reported to the manager that approved the failed audit?" — you need graph structure. Vector RAG cannot chain these connections.

## Is your domain entity-rich?
Finance (companies, deals, regulations), healthcare (patients, drugs, conditions), legal (cases, statutes, precedents) — if your data is full of named entities with meaningful relationships, a knowledge graph adds value.

## Do you need global summaries?
"What are the top themes across all reports?" requires corpus-wide synthesis. Only GraphRAG's community summaries (or LazyGraphRAG's on-demand equivalent) can handle this efficiently.

## Is the cost justified?
If your queries are mostly simple lookups and your corpus is small, vector RAG is sufficient. GraphRAG's value scales with corpus complexity and query sophistication — for simple use cases, the overhead isn't worth it.
