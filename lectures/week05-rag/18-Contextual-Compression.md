---
title: "Contextual Compression"
section: Advanced Techniques
layout: standard
---

# Contextual Compression: Extract Only What Matters

**Problem** -- Retrieved chunks contain a mix of relevant and irrelevant information. Feeding entire chunks into the LLM wastes context window tokens and introduces noise that can degrade answer quality.

**Approach** -- After retrieval, apply a compression step that extracts or summarizes only the portions of each document relevant to the specific query.

**Technique 1: Extractive compression**

An LLM or smaller model identifies and extracts the specific sentences or passages within each retrieved chunk that are relevant to the query. Everything else is discarded.

- Fast with a small classification model
- Preserves original wording (important for citation accuracy)
- Can use sentence-level relevance scoring

**Technique 2: Abstractive compression**

An LLM summarizes each retrieved chunk into a concise statement that directly addresses the query. The summary replaces the original chunk in the generation context.

- Better information density per token
- Risk of introducing errors in the compression step
- Higher latency due to LLM call per chunk

**Technique 3: Contextual chunk headers**

Prepend each chunk with metadata context (document title, section heading, date) so the LLM can properly situate the information without reading surrounding chunks.

**Impact** -- Contextual compression typically reduces input tokens by 50-70% while maintaining or improving answer quality. On long-context queries, this directly translates to lower latency and cost.
