---
title: "When CoT Fails"
section: Chain-of-Thought
layout: standard
---

# When CoT Fails

CoT is not universally beneficial. Understanding its failure modes is critical for choosing the right strategy.

## Simple Tasks Get Worse

CoT adds latency and cost. For tasks the model can already solve in one pass (sentiment classification, simple extraction), forcing reasoning steps can **decrease** accuracy by introducing overthinking and error accumulation.

```
# CoT HURTS here — the model "reasons" itself into the wrong answer:
Q: What sentiment is "I love this product!"?
A: Let me think step by step. The word "love" is positive, but it could
   be sarcastic. The exclamation mark might indicate frustration...
   Sentiment: uncertain.  ← WRONG
```

## Faithfulness Concerns

- **Post-hoc rationalization**: the model may decide the answer first, then generate a plausible-looking chain that doesn't reflect actual computation (Turpin et al., 2023)
- **Unfaithful chains**: biased by the order of few-shot examples, not by logical structure
- CoT is **not** a window into the model's "thinking" — it is generated text optimized to look like reasoning

## Other Limitations

- **Token cost**: reasoning chains consume context window and increase API spend
- **Latency**: 3-10x slower than direct prompting for typical tasks
- **Small model ceiling**: models below ~10B parameters show minimal CoT benefit
- **Compounding errors**: a mistake in step 2 propagates through all subsequent steps

## Rule of Thumb

Use CoT when the task requires **multi-step reasoning** that a human would also need to work through. Skip it for pattern matching and recall tasks.

## Sources

- [Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting (Turpin et al., 2023)](https://arxiv.org/abs/2305.04388)
- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (Wei et al., 2022)](https://arxiv.org/abs/2201.11903)
