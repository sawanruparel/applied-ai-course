---
title: "When Prompting Isn't Enough"
section: Practical Workshop
layout: standard
---

# When Prompting Isn't Enough

Prompt engineering is the fastest path to a working prototype. But it has hard limits. Knowing when to graduate to other techniques saves weeks of diminishing returns.

## Keep Prompting When

- The task is well-defined and the output format is stable
- Few-shot examples cover the input distribution adequately
- Error rates are acceptable after adding validation and retries
- You need to iterate quickly — prompt changes deploy in seconds
- The model has sufficient knowledge for the domain

## Fine-Tune When

- You have consistent failures on a **specific subtask** despite prompt optimization
- You need **domain-specific vocabulary** or conventions the base model lacks
- Latency is critical — a fine-tuned small model can replace a prompted large model
- You have 500+ labeled examples and a clear eval metric

```
# Signal: your few-shot examples keep growing but accuracy plateaus
# Action: fine-tune a smaller model on your labeled data
```

## Use Agents When

- The task requires **multi-step workflows** with branching and conditionals
- External tool use is central, not incidental (databases, APIs, file systems)
- The workflow needs **stateful memory** across many interactions
- Error recovery requires complex re-planning, not simple retry

## Use Traditional Code When

- The logic is **deterministic** and fully specifiable (regex, rule engines, SQL)
- Correctness requirements are 100% with no tolerance for probabilistic errors
- The task is pure transformation with no ambiguity (date formatting, unit conversion)

## Decision Framework

Ask: "Would a junior employee need to exercise judgment for this task?" If yes, prompting or agents. If no, write code.
