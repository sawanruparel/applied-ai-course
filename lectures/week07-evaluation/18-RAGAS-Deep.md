---
title: "RAGAS Deep Dive"
section: Frameworks & Tools
layout: standard
---

# RAGAS Deep Dive

## Setup, Metrics, and Integration

## Installation and Basic Usage

```python
pip install ragas langchain-openai

from ragas import evaluate
from ragas.metrics import (
    faithfulness, answer_relevancy,
    context_precision, context_recall,
    answer_correctness
)
from datasets import Dataset

# Prepare your evaluation data
eval_data = {
    "question": ["What is the refund policy?", ...],
    "answer": ["You can return items within 30 days...", ...],
    "contexts": [["Policy doc: Returns accepted within 30 days..."], ...],
    "ground_truth": ["Items can be returned within 30 days for a full refund.", ...]
}
dataset = Dataset.from_dict(eval_data)

# Run evaluation
results = evaluate(
    dataset,
    metrics=[faithfulness, answer_relevancy,
             context_precision, context_recall],
)
print(results)  # {'faithfulness': 0.82, 'answer_relevancy': 0.91, ...}
```

## LangChain Integration

```python
from ragas.integrations.langchain import EvaluatorChain

faithfulness_chain = EvaluatorChain(metric=faithfulness)
result = faithfulness_chain.invoke({
    "query": question, "result": answer, "source_documents": docs
})
```

## Configuration Options

- **LLM choice**: Default is GPT-4o. Switch to Claude or open-source models via `LangchainLLMWrapper`
- **Embeddings**: Default is OpenAI. Swap for local embeddings to reduce cost
- **Batch processing**: Use `evaluate()` with `raise_exceptions=False` for robust batch runs
- **Async support**: `evaluate()` runs LLM calls concurrently for 5-10x speedup

## Cost Estimation

| Metric | LLM Calls per Sample | Approx Cost (GPT-4o) |
|---|---|---|
| Faithfulness | 2-3 (decompose + verify) | $0.02 - $0.04 |
| Answer Relevancy | 2 (generate questions + embed) | $0.01 - $0.02 |
| Context Precision | 1-2 | $0.01 - $0.02 |
| Context Recall | 1-2 | $0.01 - $0.02 |
| Full suite (5 metrics) | 8-12 | $0.06 - $0.12 |

**Budget**: ~$12-24 to evaluate 200 samples across all metrics.

## Sources

- [RAGAS: Automated Evaluation of Retrieval Augmented Generation (Es et al., 2023)](https://arxiv.org/abs/2309.15217)
- [RAGAS Documentation](https://docs.ragas.io)
