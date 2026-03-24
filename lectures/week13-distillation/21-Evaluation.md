---
title: "Evaluating Fine-Tuned Models"
section: Hands-On Implementation
layout: standard
---

# Evaluating Fine-Tuned Models

## Two types of evaluation

### 1. Benchmark evals (general capability)

Check that your fine-tuned model has not lost general abilities:

- **MMLU:** General knowledge across 57 subjects
- **HumanEval:** Code generation
- **GSM8K:** Grade-school math reasoning
- **HellaSwag:** Commonsense reasoning

Run these with `lm-evaluation-harness`:

```bash
lm_eval --model hf \
    --model_args pretrained=./my-finetuned-model \
    --tasks mmlu,hellaswag,gsm8k \
    --batch_size 8
```

### 2. Task-specific evals (your actual use case)

These matter far more than benchmarks. Design evaluations that mirror production usage.

```python
# Example: evaluating a JSON extraction model
def evaluate_extraction(model, test_set):
    metrics = {"exact_match": 0, "valid_json": 0, "field_accuracy": {}}

    for example in test_set:
        prediction = generate(model, example["input"])

        # Can it produce valid JSON?
        try:
            parsed = json.loads(prediction)
            metrics["valid_json"] += 1
        except json.JSONDecodeError:
            continue

        # Does it match expected output?
        if parsed == example["expected"]:
            metrics["exact_match"] += 1

        # Field-level accuracy
        for field in example["expected"]:
            if field not in metrics["field_accuracy"]:
                metrics["field_accuracy"][field] = {"correct": 0, "total": 0}
            metrics["field_accuracy"][field]["total"] += 1
            if parsed.get(field) == example["expected"][field]:
                metrics["field_accuracy"][field]["correct"] += 1

    return metrics
```

## The evaluation matrix

| What to Measure | How | Target |
|----------------|-----|--------|
| Format compliance | Parse output, check schema | >98% |
| Task accuracy | Compare to gold labels | >90% (task dependent) |
| Latency | Time per inference | <100ms for prod |
| General capability | Benchmark suite | <5% drop from base |
| Robustness | Adversarial / edge case inputs | No catastrophic failures |

## Always compare against baselines

1. Base model + zero-shot prompt
2. Base model + few-shot prompt
3. Teacher model (upper bound)
4. Your fine-tuned model

If your fine-tuned model does not beat baseline #2, something is wrong.

## Sources

- [lm-evaluation-harness (EleutherAI)](https://github.com/EleutherAI/lm-evaluation-harness)
