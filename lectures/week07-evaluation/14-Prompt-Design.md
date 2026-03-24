---
title: "Designing Judge Prompts"
section: LLM-as-a-Judge
layout: standard
---

# Designing Judge Prompts

## Rubrics, Criteria, and Scoring Scales

## Anatomy of a Good Judge Prompt

A well-designed judge prompt has five components:

1. **Role**: "You are an expert evaluator assessing the quality of AI-generated responses."
2. **Criteria**: Exactly what dimension(s) to evaluate (one at a time is best)
3. **Rubric**: Concrete descriptions for each score level
4. **Input format**: Where to find the question, answer, context, reference
5. **Output format**: Structured scoring with mandatory reasoning before the score

## Example: Faithfulness Rubric

```
Score 5: Every claim is directly supported by the provided context.
Score 4: Nearly all claims supported; one minor unsupported detail.
Score 3: Most claims supported, but 1-2 significant unsupported claims.
Score 2: Multiple unsupported claims that materially affect accuracy.
Score 1: The response contains fabricated information not in the context.
```

## Best Practices

- **One criterion per prompt**: Evaluating helpfulness AND safety in one call degrades both
- **Chain-of-thought first**: Require the judge to explain reasoning BEFORE giving a score (reduces random scoring)
- **Anchor with examples**: Include 1-2 scored examples in the prompt to calibrate
- **Use odd scales**: 1-5 works better than 1-4 (avoids forced middle) or 1-10 (too granular, inconsistent)
- **Structured output**: Use JSON output format for reliable parsing

```json
{
  "reasoning": "The answer correctly states X and Y from the context,
                but the claim about Z is not supported...",
  "score": 3
}
```
