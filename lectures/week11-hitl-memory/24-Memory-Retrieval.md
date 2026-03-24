---
title: "Memory Retrieval"
section: Implementation
layout: standard
---

# Memory Retrieval

When to remember what — relevance scoring and decay.

## The retrieval challenge
Having memories is useless if you retrieve the wrong ones. Good retrieval is the difference between a helpful agent and a confused one.

## Retrieval scoring: multi-factor ranking

```python
def score_memory(memory, query, current_time):
    """Score a memory based on multiple factors."""

    # 1. Semantic relevance (cosine similarity)
    relevance = cosine_similarity(embed(query), memory.embedding)

    # 2. Recency decay (exponential)
    age_hours = (current_time - memory.timestamp).total_seconds() / 3600
    recency = math.exp(-0.01 * age_hours)  # Half-life ~70 hours

    # 3. Importance (set at storage time)
    importance = memory.importance  # 0.0 - 1.0

    # 4. Access frequency (memories used often are more valuable)
    frequency = min(memory.access_count / 10, 1.0)

    # Weighted combination
    score = (
        0.4 * relevance +
        0.2 * recency +
        0.25 * importance +
        0.15 * frequency
    )
    return score
```

## Temporal decay models

| Model | Formula | Use case |
|-------|---------|----------|
| Exponential | `e^(-lambda * t)` | General purpose, smooth decay |
| Step function | `1 if t < threshold else 0` | "Forget after N days" |
| Power law | `t^(-alpha)` | Slow initial decay, long tail |
| No decay | `1.0` | Critical facts that never expire |

## Importance scoring at storage time

```python
IMPORTANCE_PROMPT = """Rate the importance of this memory on a scale of 0-10.

Memory: {memory_text}
Context: {conversation_context}

Consider:
- Is this a user preference or personal fact? (high)
- Is this a one-time procedural detail? (low)
- Would forgetting this cause problems later? (high)
- Is this widely available information? (low)

Return just the number."""
```

## Retrieval strategies:
- **Top-k similarity** — Simple, fast, good baseline
- **MMR (Maximum Marginal Relevance)** — Diverse results, avoids redundancy
- **Hybrid search** — Combine keyword (BM25) + semantic for better recall
- **Filtered retrieval** — Pre-filter by metadata before similarity search
- **Contextual compression** — Retrieve broadly, then re-rank with LLM

## Sources

- [Generative Agents: Interactive Simulacra of Human Behavior (Park et al., 2023)](https://arxiv.org/abs/2304.03442)
- [MemGPT: Towards LLMs as Operating Systems (Packer et al., 2023)](https://arxiv.org/abs/2310.08560)
