---
title: "The Cascade Pattern"
section: Model Selection
layout: diagram
---

# The Cascade Pattern

## Try Small First, Escalate If Quality Is Low

```mermaid
flowchart TB
    Q[User Query] --> S[Small model 3B]
    S --> QC1{Quality check}
    QC1 -->|Pass| R1[Return response]
    QC1 -->|Fail| M[Medium model 8B-14B]
    M --> QC2{Quality check}
    QC2 -->|Pass| R2[Return response]
    QC2 -->|Fail| F[Frontier model<br/>Claude / GPT-4]
    F --> R3[Return response]
```

## Quality Check Strategies

- **Confidence score**: model logprob / entropy threshold
- **Format validation**: does output match expected schema?
- **Length heuristic**: suspiciously short or long responses
- **Self-consistency**: generate twice, check agreement
- **Lightweight verifier**: small classifier trained on good/bad outputs

## Economics

If the cascade resolves 80% at tier 1 and 15% at tier 2:
- Only 5% of requests hit the expensive frontier model
- Average cost drops **10–20x** compared to frontier-only
