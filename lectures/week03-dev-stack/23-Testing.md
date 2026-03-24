---
title: "Testing AI Applications"
section: Production Concerns
layout: standard
---

# Testing AI Applications

## The Testing Pyramid for LLM Apps

Traditional testing still applies, but you need an additional layer: **evaluations**.

### 1. Unit Tests — Test Your Code, Not the Model

```python
# Test tool functions independently
async def test_lookup_order():
    mock_db = MockDB(orders={"1234": {"status": "shipped", "total": 59.99}})
    deps = Deps(db=mock_db, user_id="test")
    result = await lookup_order(RunContext(deps=deps), "1234")
    assert "shipped" in result
    assert "59.99" in result
```

### 2. Integration Tests — Test with a Real (or Mocked) Model

```python
# Use a deterministic model for integration tests
from pydantic_ai.models.test import TestModel

agent = Agent("openai:gpt-4o", result_type=Sentiment)

# Override with test model that returns predictable output
with agent.override(model=TestModel()):
    result = await agent.run("Great product!")
    assert isinstance(result.data, Sentiment)
```

### 3. Eval Suites — Test Model Quality

- **What to eval**: Accuracy, relevance, safety, format compliance, latency
- **Golden dataset**: Curated input-output pairs with human-verified expected results
- **LLM-as-judge**: Use a stronger model to grade outputs of a weaker model
- **Run evals on every prompt change, model upgrade, or framework update**

## Eval Frameworks

| Tool | Approach | Best For |
|------|----------|----------|
| Promptfoo | Config-driven eval runner | CI/CD integration |
| Braintrust | Logging + evals platform | Teams with eval infrastructure |
| DeepEval | Python-native evals | Pytest-style eval workflows |
| Custom | Roll your own with pytest | Full control |

## The Eval Workflow

1. Build a golden dataset (50-200 examples covering edge cases)
2. Define metrics (exact match, LLM-as-judge, custom scoring)
3. Run evals on every change to prompts, models, or tools
4. Track scores over time — regressions are the enemy
5. Add failing production examples to your golden dataset

**Non-negotiable**: If you don't have evals, you're doing vibe-based development. That doesn't scale.

## Sources

- [PydanticAI TestModel Documentation](https://ai.pydantic.dev/)
- [Promptfoo — LLM Eval Framework](https://www.promptfoo.dev/)
- [Braintrust — Evals & Observability Platform](https://www.braintrust.dev/)
- [DeepEval — LLM Evaluation Framework (GitHub)](https://github.com/confident-ai/deepeval)
