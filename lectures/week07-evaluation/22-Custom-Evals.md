---
title: "Building Custom Evaluation Pipelines"
section: Frameworks & Tools
layout: diagram
---

# Building Custom Evaluation Pipelines

## When off-the-shelf metrics don't cover your domain requirements.

```
+-----------------------------------------------------------+
|                  YOUR CUSTOM EVAL PIPELINE                 |
+-----------------------------------------------------------+
|                                                           |
|  1. DEFINE CRITERIA (domain-specific)                     |
|     +-------------------------------------------+         |
|     | - Regulatory compliance (finance, health) |         |
|     | - Brand voice consistency                  |         |
|     | - Citation accuracy                        |         |
|     | - Domain terminology correctness           |         |
|     +-------------------------------------------+         |
|                        |                                  |
|  2. BUILD RUBRICS                                         |
|     +-------------------------------------------+         |
|     | Score 5: Fully compliant, correct terms    |         |
|     | Score 3: Minor terminology errors           |         |
|     | Score 1: Non-compliant or wrong terms       |         |
|     +-------------------------------------------+         |
|                        |                                  |
|  3. IMPLEMENT SCORING                                     |
|     +-------------------+--------------------+            |
|     | Rule-Based Checks | LLM Judge Scoring  |            |
|     | - Regex for PII   | - Rubric scoring   |            |
|     | - Blocklist words  | - Custom criteria  |            |
|     | - Format checks    | - Chain-of-thought |            |
|     +-------------------+--------------------+            |
|                        |                                  |
|  4. VALIDATE & CALIBRATE                                  |
|     +-------------------------------------------+         |
|     | Human-label 100 samples                    |         |
|     | Compute agreement (target kappa > 0.6)     |         |
|     | Iterate on rubric until calibrated          |         |
|     +-------------------------------------------+         |
|                        |                                  |
|  5. INTEGRATE                                             |
|     +-------------------------------------------+         |
|     | CI/CD gate  | Dashboard  | Alerting        |         |
|     +-------------------------------------------+         |
+-----------------------------------------------------------+
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
