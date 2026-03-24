---
title: "Building Evaluation Datasets"
section: RAG Evaluation
layout: flow
---

# Building Evaluation Datasets

Your evaluation is only as good as your dataset. Here's how to build one.

## Step 1: Manual Curation (Start Here)

- Domain experts write 50-100 question-answer pairs covering key use cases
- Include easy questions, hard questions, edge cases, and adversarial inputs
- Label which source documents contain the answer
- This is your "golden set" -- treat it like test fixtures in software

**Tip**: Categorize questions by type (factual lookup, multi-hop reasoning, comparison, summarization) to diagnose failures.

## Step 2: Synthetic Generation (Scale Up)

- Use an LLM to generate question-answer pairs from your document corpus
- RAGAS `TestsetGenerator` can create diverse question types automatically
- Filter and validate synthetic examples with human review (keep ~60-70%)
- Target: 200-500 examples for meaningful statistical power

```python
from ragas.testset import TestsetGenerator
generator = TestsetGenerator.from_langchain(generator_llm, critic_llm)
testset = generator.generate_with_langchain_docs(documents, test_size=200)
```

## Step 3: Production Logging (Stay Current)

- Log real user queries, retrieved contexts, and generated answers
- Sample and annotate production traffic weekly (thumbs up/down + corrections)
- Add interesting failures to your golden set
- Track distribution shift: are users asking questions you didn't anticipate?

## Step 4: Continuous Maintenance

- Review and update eval datasets quarterly
- Remove stale questions when source documents change
- Add new categories as your application evolves
- Version your eval datasets alongside your code

---

**Target composition**: 30% curated golden set, 40% validated synthetic, 30% annotated production samples.

## Sources

- [RAGAS Documentation — Test Set Generation](https://docs.ragas.io)
