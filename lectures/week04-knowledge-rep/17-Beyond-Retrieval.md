---
title: "Beyond Naive Retrieval"
section: Context Management
layout: standard
---

# Beyond Naive Retrieval: The Context Management Paradigm

"Naive RAG" -- embed query, retrieve top-k, stuff into prompt -- works for demos but fails in production.

### Where Naive RAG Breaks Down

- **Wrong chunks retrieved**: the query doesn't match the best documents semantically
- **Right chunks, wrong order**: the LLM attends more to the beginning and end of context (lost-in-the-middle effect)
- **Too much noise**: irrelevant chunks dilute the signal and increase hallucination
- **Missing context**: the retrieved chunk is a fragment; the LLM lacks surrounding information
- **Conflicting information**: multiple chunks contradict each other with no resolution

### The Shift: Retrieval to Context Management

**Retrieval** asks: "What documents are similar to the query?"

**Context management** asks: "What is the optimal set of information to place in the LLM's context window to produce the best answer?"

### The Context Management Stack

1. **Query understanding** -- transform the raw query into better retrieval signals
2. **Multi-stage retrieval** -- cast a wide net, then narrow with reranking
3. **Context selection** -- choose which chunks to include and which to discard
4. **Context ordering** -- arrange information for optimal LLM attention
5. **Context compression** -- summarize or extract to fit within token budgets

> This is where the engineering happens. Each stage is an opportunity to improve answer quality.

## Sources

- [Lost in the Middle: How Language Models Use Long Contexts (Liu et al., 2023)](https://arxiv.org/abs/2307.03172)
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al., 2020)](https://arxiv.org/abs/2005.11401)
