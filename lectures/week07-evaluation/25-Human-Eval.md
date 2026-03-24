---
title: "Human Evaluation"
section: Production Evaluation
layout: standard
---

# Human Evaluation

## When You Still Need Humans in the Loop

## LLM Judges Are Not Enough

LLM judges fail or are unreliable for:

- **Novel domains**: The judge LLM may lack domain expertise (medical, legal, scientific)
- **Subjective quality**: Tone, brand voice, cultural appropriateness
- **Safety edge cases**: Subtle harmful content that LLMs don't flag
- **Calibration**: You need human labels to validate that your LLM judge is actually working
- **High-stakes decisions**: When wrong answers have legal or financial consequences

## Designing Human Evaluation

### Annotation Schema
- Use the SAME rubrics you give the LLM judge (enables direct comparison)
- Binary labels (good/bad) for quick passes; Likert scales (1-5) for nuanced analysis
- Always include "unsure" option to avoid forced guessing

### Sample Size Guidelines
| Confidence Level | Margin of Error | Required Samples |
|---|---|---|
| 90% | +/- 5% | ~270 |
| 95% | +/- 5% | ~385 |
| 95% | +/- 3% | ~1,068 |

### Inter-Annotator Agreement
- Have 2-3 annotators label the same samples
- Compute Cohen's kappa (2 raters) or Fleiss' kappa (3+ raters)
- Target kappa > 0.6 (substantial agreement) before trusting labels
- If kappa < 0.4, your rubric is ambiguous -- revise it

## The Hybrid Approach

1. **Calibration set**: 200 human-labeled examples
2. **Validate LLM judge**: Compare LLM scores to human labels (target agreement > 80%)
3. **Scale with LLM**: Use the validated LLM judge for the remaining thousands of examples
4. **Ongoing audit**: Human-review 5-10% of LLM-judged samples weekly to detect drift
5. **Escalation**: Route low-confidence LLM judgments to human reviewers
