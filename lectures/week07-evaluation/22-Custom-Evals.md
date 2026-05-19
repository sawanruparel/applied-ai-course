---
title: "Building Custom Evaluation Pipelines"
section: Frameworks & Tools
layout: diagram
---

# Building Custom Evaluation Pipelines

## When off-the-shelf metrics don't cover your domain requirements.

```mermaid
flowchart TB
    Crit["1. Define criteria<br/>compliance, brand voice,<br/>citation, terminology"] --> Rub["2. Build rubrics<br/>concrete score levels"]
    Rub --> Score["3. Implement scoring"]
    Score --> Rule[Rule-based checks<br/>regex, blocklist, format]
    Score --> LLMJ[LLM judge<br/>rubric + CoT]
    Rule --> Val["4. Validate & calibrate<br/>human-label 100 samples<br/>target kappa > 0.6"]
    LLMJ --> Val
    Val --> Int["5. Integrate<br/>CI/CD gate, dashboard,<br/>alerting"]
```

**Template for custom LLM judge metric:**

```python
CUSTOM_JUDGE_PROMPT = """
You are evaluating a {domain} AI assistant.
Criterion: {criterion_name}
Definition: {criterion_definition}
Rubric:
  5 - {score_5_description}
  3 - {score_3_description}
  1 - {score_1_description}

Question: {question}
Context: {context}
Answer: {answer}

First explain your reasoning, then provide your score (1-5).
Output JSON: {"reasoning": "...", "score": N}
"""
```
