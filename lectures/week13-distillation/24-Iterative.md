---
title: "Iterative Distillation"
section: Production Distillation
layout: standard
---

# Iterative Distillation: Refine Based on Student Failures

## The key insight

Your first distillation pass will not be perfect. The student will fail on edge cases, rare categories, and inputs that differ from the training distribution. Use these failures to improve.

## The iterative loop

```
Round 1: Generate 5K examples -> Train student -> Evaluate -> Find failures
Round 2: Generate 2K targeted examples for failure modes -> Retrain -> Evaluate
Round 3: Generate 1K hard examples -> Retrain -> Evaluate
...until quality target is met
```

## Mining failures for targeted data generation

```python
# After evaluation, collect failure cases
failures = [ex for ex in test_results if ex["correct"] == False]

# Categorize failures
failure_categories = {}
for f in failures:
    category = classify_failure(f)  # e.g., "long_input", "ambiguous", "multi_label"
    failure_categories.setdefault(category, []).append(f)

# Generate targeted synthetic data for each failure category
for category, examples in failure_categories.items():
    prompt = f"""Generate 50 training examples similar to these failure cases.
    The model struggled with: {category}
    Example failures:
    {json.dumps(examples[:5], indent=2)}

    Generate diverse examples that cover this failure mode."""

    new_data = teacher.generate(prompt)
```

## Curriculum learning approach

- **Round 1:** Easy, clear-cut examples (build basic competency)
- **Round 2:** Medium difficulty, add ambiguity and edge cases
- **Round 3:** Hard examples, adversarial inputs, rare categories
- **Round 4:** Mix of all difficulties (reinforce and stabilize)

## When to stop iterating

- Task-specific eval accuracy plateaus (less than 1% improvement per round)
- You have hit the student model's capacity ceiling
- Diminishing returns on teacher API spending
- The student matches or exceeds your quality threshold

## Practical tip: the "hard example" multiplier

If the student fails on 5% of cases, generate 10x more training examples for those cases relative to easy cases. This re-balances the training distribution toward the model's weak spots.
