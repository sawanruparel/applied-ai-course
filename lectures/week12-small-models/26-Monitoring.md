---
title: "Monitoring Quality After Downsizing"
section: Production Strategy
layout: standard
---

# Monitoring Quality Degradation After Model Downsizing

## The Silent Failure Problem

Small models fail differently than large models:
- They do not refuse — they confidently produce wrong answers
- Degradation is often gradual, not catastrophic
- Failures cluster on specific input types, not randomly
- Without monitoring, you may not notice for weeks

## What to Monitor

### Output Quality Signals
- **Format compliance**: JSON validity rate, schema adherence
- **Factual accuracy**: spot-check samples against ground truth
- **Hallucination rate**: claims not grounded in provided context
- **Completeness**: are outputs truncated or missing fields?
- **Consistency**: same input should produce similar outputs

### Behavioral Signals
- **Retry rate**: users asking the same question again
- **Edit rate**: users modifying model outputs before using them
- **Abandonment**: users leaving the feature without completing their task
- **Escalation**: users requesting human support after model interaction

### Drift Detection
- Monitor input distribution — are users sending different types of queries?
- Track output token length distribution — sudden changes signal problems
- Compare weekly quality scores against baseline
- Use embedding similarity to detect new query clusters the model has not seen

## Alerting Strategy

| Signal                    | Threshold           | Action                    |
|---------------------------|:-------------------:|---------------------------|
| Format failure rate       | > 2% (was < 0.5%)  | Auto-escalate to larger model |
| Accuracy on spot checks   | > 3% drop           | Alert + investigate       |
| User retry rate           | > 10% increase      | Alert + A/B test review   |
| Latency p99               | > 2x baseline       | Investigate infrastructure|
| Novel input cluster       | > 5% of traffic     | Manual review + eval      |

## The Feedback Loop

```
Monitor → Detect regression → Root cause analysis → Fix
                                    │
                    ┌───────────────┼──────────────┐
                    │               │              │
              Add training     Update prompt   Escalate to
              examples         template        larger model
```
