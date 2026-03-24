---
title: "What to Measure"
section: Framing
layout: standard
---

# What to Measure

## The Five Pillars of LLM Evaluation

1. **Accuracy / Correctness**
   - Does the output contain factually correct information?
   - Can it be verified against a ground truth or reference?

2. **Faithfulness / Groundedness**
   - Is the output grounded in the provided context?
   - Does it avoid adding information not present in the source?

3. **Relevance**
   - Does the output actually answer the question asked?
   - Is the retrieved context relevant to the query?

4. **Helpfulness / Completeness**
   - Is the answer thorough enough to be useful?
   - Does it address all parts of a multi-part question?

5. **Safety / Harmlessness**
   - Does the output avoid toxic, biased, or harmful content?
   - Does it refuse appropriately when it should?

## Choosing Your Metrics

- **RAG systems**: prioritize faithfulness and context quality
- **Chat assistants**: prioritize helpfulness and safety
- **Code generation**: prioritize correctness and executability
- **Summarization**: prioritize faithfulness and completeness

Not every metric matters equally for every application. Define what "good" means for YOUR use case first.
