---
title: "Temperature and Sampling Strategy"
section: Reliability Engineering
layout: two-column
---

# Temperature, Top-p, and Sampling Strategy

## Low Temperature (0.0 - 0.3)

**Use for**: extraction, classification, structured output, code generation, factual Q&A.

```python
# Deterministic extraction
response = client.chat.completions.create(
    model="gpt-4o",
    temperature=0.0,
    messages=[...]
)
```

**Behavior**:
- Greedy or near-greedy decoding
- Most probable tokens selected
- Highly reproducible outputs
- Less creative, more predictable
- Lower risk of hallucination

**Temperature 0 does not guarantee determinism** — model routing and batching can still cause variation.

## High Temperature (0.7 - 1.2)

**Use for**: creative writing, brainstorming, diverse candidate generation, self-consistency sampling.

```python
# Creative brainstorming
response = client.chat.completions.create(
    model="gpt-4o",
    temperature=0.9,
    top_p=0.95,
    messages=[...]
)
```

**Behavior**:
- Samples from a flattened distribution
- Lower-probability tokens get selected more often
- Greater output diversity across runs
- Better for self-consistency (need diverse paths)
- Higher risk of incoherence above 1.0

**Top-p (nucleus sampling)**: Instead of a fixed temperature, keep the smallest set of tokens whose cumulative probability exceeds p. Typically top_p=0.95. Prefer top-p over temperature when you want diversity without incoherence.
