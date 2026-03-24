---
title: "DeepEval"
section: Frameworks & Tools
layout: standard
---

# DeepEval

## Unit Testing for LLM Applications

## Philosophy

DeepEval treats LLM evaluation like software testing: write test cases, define assertions, run them in CI/CD, get pass/fail results.

## Core Concepts

```python
pip install deepeval

from deepeval import assert_test
from deepeval.test_case import LLMTestCase
from deepeval.metrics import (
    FaithfulnessMetric,
    AnswerRelevancyMetric,
    HallucinationMetric,
    GEval
)

# Define a test case
test_case = LLMTestCase(
    input="What is our vacation policy?",
    actual_output="Employees get 20 days of PTO per year.",
    retrieval_context=["HR Policy: Full-time employees receive 20 days PTO."],
    expected_output="Full-time employees receive 20 days of paid time off."
)

# Define metrics with thresholds
faithfulness = FaithfulnessMetric(threshold=0.7)
relevancy = AnswerRelevancyMetric(threshold=0.7)

# Assert -- fails the test if below threshold
assert_test(test_case, [faithfulness, relevancy])
```

## Integration with pytest

```python
# test_rag.py -- runs with: deepeval test run test_rag.py
import pytest
from deepeval import assert_test

@pytest.mark.parametrize("test_case", eval_dataset)
def test_faithfulness(test_case):
    assert_test(test_case, [FaithfulnessMetric(threshold=0.7)])
```

## G-Eval: Custom Criteria

```python
correctness = GEval(
    name="Correctness",
    criteria="Determine if the output is factually correct.",
    evaluation_params=[LLMTestCaseParams.ACTUAL_OUTPUT,
                       LLMTestCaseParams.EXPECTED_OUTPUT],
    threshold=0.5
)
```

## Key Features

- **Confident AI dashboard**: Free hosted platform to track eval results over time
- **14+ built-in metrics**: Faithfulness, hallucination, bias, toxicity, summarization, and more
- **Synthesizer**: Generate test datasets from documents (similar to RAGAS TestsetGenerator)
- **Conversational metrics**: Evaluate multi-turn conversations, not just single QA pairs

## Sources

- [DeepEval GitHub Repository](https://github.com/confident-ai/deepeval)
- [G-Eval: NLG Evaluation using GPT-4 with Better Human Alignment (Liu et al., 2023)](https://arxiv.org/abs/2303.16634)
