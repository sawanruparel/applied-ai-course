---
title: "Multi-Judge Panels"
section: LLM-as-a-Judge
layout: standard
---

# Multi-Judge Panels

## Aggregate Multiple LLM Judges for Robustness

## The Idea

Just as academic papers use multiple reviewers, use multiple LLM judges and aggregate their scores. This reduces individual model biases and increases reliability.

## Panel Configurations

**Same model, different prompts:**
```python
scores = [
    judge(rubric_v1, answer),   # Rubric focused on accuracy
    judge(rubric_v2, answer),   # Rubric focused on completeness
    judge(rubric_v3, answer),   # Rubric focused on clarity
]
final_score = median(scores)
```

**Different models, same prompt:**
```python
scores = [
    gpt4o_judge(rubric, answer),      # GPT-4o
    claude_judge(rubric, answer),      # Claude 3.5 Sonnet
    gemini_judge(rubric, answer),      # Gemini Pro
]
final_score = majority_vote(scores)  # or median
```

## Aggregation Strategies

| Strategy | When to Use | Robustness |
|---|---|---|
| Majority vote | Pairwise comparisons | High -- eliminates outlier judges |
| Mean | Pointwise scores, smooth distribution | Medium -- sensitive to outliers |
| Median | Pointwise scores, noisy judges | High -- robust to outliers |
| Weighted average | When you know which judge is best | Highest -- requires calibration data |

## Practical Considerations

- **Cost**: 3 judges = 3x cost. Budget ~$0.03-0.15 per evaluation
- **Latency**: Run judges in parallel to avoid 3x latency
- **Diminishing returns**: 3 judges captures most of the benefit; 5+ judges rarely worth the cost
- **Disagreement signal**: When judges disagree strongly, flag for human review

## The PoLL Protocol (Verga et al., 2024)

Panel of LLM Evaluators showed that a panel of smaller, diverse models outperforms a single large model judge. Three GPT-3.5-level models in a panel achieved higher human agreement than a single GPT-4 judge, at lower cost.

## Sources

- [Replacing Judges with Juries: Evaluating LLM Generations with a Panel of Diverse Models (Verga et al., 2024)](https://arxiv.org/abs/2404.18796)
