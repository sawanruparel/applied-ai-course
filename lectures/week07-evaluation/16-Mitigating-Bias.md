---
title: "Mitigating Judge Bias"
section: LLM-as-a-Judge
layout: standard
---

# Mitigating Judge Bias

## Practical Techniques for More Reliable LLM Evaluation

## 1. Swap Positions (for Pairwise)

Run every comparison twice with A and B swapped. Only count a win if the same response wins in both orderings. Ties when results conflict.

```python
result_1 = judge(question, answer_a=X, answer_b=Y)  # X first
result_2 = judge(question, answer_a=Y, answer_b=X)  # Y first
final = X_wins if both agree else Tie
```

Reduces position bias from ~15% to ~3%.

## 2. Use Detailed Rubrics

Vague criteria ("rate quality 1-5") amplify all biases. Specific rubrics with concrete examples for each score level reduce variance by 20-30%.

## 3. Calibrate with Human Labels

- Score 100+ examples with both human raters and the LLM judge
- Compute Cohen's kappa or Spearman correlation
- If agreement < 0.6, revise your rubric or switch judge models
- Re-calibrate quarterly as models update

## 4. Use a Different Model as Judge

Avoid self-preference bias by using a different model family as judge. Common pattern: use GPT-4o to judge Claude outputs, or vice versa.

## 5. Multi-Metric Decomposition

Instead of one holistic "quality" score, evaluate multiple specific dimensions separately. Aggregating 4-5 narrow scores is more reliable than one broad score.

## 6. Control for Length

Add explicit instructions: "Do not prefer longer responses. A concise correct answer should score higher than a verbose partially-correct one."

## Validation Checklist

- [ ] Position bias test: < 5% swing when swapping A/B
- [ ] Length correlation: Spearman between score and length < 0.3
- [ ] Human agreement: Cohen's kappa > 0.6
- [ ] Test-retest reliability: same inputs produce same scores (>90%)

## Sources

- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (Zheng et al., 2023)](https://arxiv.org/abs/2306.05685)
