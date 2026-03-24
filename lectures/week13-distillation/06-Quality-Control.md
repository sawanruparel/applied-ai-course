---
title: "Quality Control"
section: Synthetic Data Generation
layout: standard
---

# Quality Control for Synthetic Data

## The garbage-in-garbage-out problem

Synthetic data amplifies teacher mistakes. A 5% error rate in 10K examples means 500 bad training signals.

## Deduplication

```python
from datasketch import MinHash, MinHashLSH

# Near-duplicate detection with MinHash LSH
lsh = MinHashLSH(threshold=0.8, num_perm=128)

for idx, example in enumerate(dataset):
    mh = MinHash(num_perm=128)
    for word in example["text"].split():
        mh.update(word.encode("utf-8"))
    # Check for near-duplicates before inserting
    if not lsh.query(mh):
        lsh.insert(str(idx), mh)
        clean_dataset.append(example)
```

## Automated filtering

- **Length bounds:** Remove responses shorter than 20 tokens or longer than 2000
- **Format validation:** Parse JSON outputs, reject malformed ones
- **Self-consistency:** Generate 3 responses, keep only when majority agree
- **Perplexity filter:** Remove examples where a reference model is highly uncertain

## LLM-as-judge quality scoring

```python
JUDGE_PROMPT = """Rate this training example 1-5 on:
1. Correctness: Is the response factually accurate?
2. Relevance: Does it address the input?
3. Completeness: Is anything missing?
4. Format: Does it match the required schema?

Only keep examples scoring 4+ on ALL dimensions."""
```

## Human spot-checks

- Review 2-5% of generated data manually
- Focus on edge cases and low-confidence outputs
- Track error categories to fix the generation prompt
- **Budget rule:** 1 hour of human review per 1,000 synthetic examples
