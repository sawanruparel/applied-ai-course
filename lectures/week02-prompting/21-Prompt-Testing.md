---
title: "Prompt Testing"
section: Reliability Engineering
layout: standard
---

# Prompt Testing: Eval Suites, Regression Testing, A/B Testing

Prompts are software. They need the same rigor as code: tests, CI, and monitoring.

## Building an Eval Suite

```python
# eval_cases.jsonl — one test case per line
{"input": "Invoice #4521, total $1,234.56", "expected": {"amount": 1234.56}}
{"input": "Payment of USD 500 received", "expected": {"amount": 500.00}}
{"input": "No amount mentioned here", "expected": {"amount": null}}

# eval_runner.py
def run_eval(prompt_template, eval_cases, model):
    results = []
    for case in eval_cases:
        output = call_llm(model, prompt_template.format(**case["input"]))
        parsed = parse_output(output)
        score = score_fn(parsed, case["expected"])  # exact match, F1, etc.
        results.append({"case": case, "output": parsed, "score": score})
    return aggregate(results)  # accuracy, precision, recall, latency
```

## Regression Testing in CI

- Run eval suite on every prompt change (treat prompts as code in version control)
- Gate merges on eval score thresholds: "accuracy must be >= 95% on the golden set"
- Track **per-category** metrics — aggregate accuracy can hide regressions in specific cases

## A/B Testing in Production

- Route 5-10% of traffic to the new prompt variant
- Measure: accuracy (via delayed human labels), latency, token usage, user satisfaction
- Statistical significance: minimum ~200 samples per variant for binary outcomes
- Watch for **interaction effects**: a prompt that works for English may fail for multilingual input

## Metrics That Matter

| Metric | Why It Matters |
|--------|---------------|
| Accuracy on eval set | Core correctness signal |
| p95 latency | User experience and cost |
| Token usage (in + out) | Direct cost driver |
| Validation failure rate | Structural reliability |
| Fallback trigger rate | Operational health |
