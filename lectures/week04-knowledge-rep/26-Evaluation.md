---
title: "Evaluating Retrieval"
section: Close
layout: standard
---

# Evaluating Retrieval

You need to evaluate at **two levels**: retrieval quality (did we find the right chunks?) and generation quality (did the LLM produce a good answer?).

### Retrieval Metrics

| Metric | What It Measures | Formula | When to Use |
|--------|-----------------|---------|-------------|
| **Recall@k** | Fraction of relevant docs in top-k | relevant_in_top_k / total_relevant | Most important metric for RAG |
| **Precision@k** | Fraction of top-k that are relevant | relevant_in_top_k / k | When context window is tight |
| **MRR** | Avg reciprocal rank of first relevant result | mean(1 / rank_of_first_relevant) | When you care about the top result |
| **NDCG@k** | Quality of ranking (position-aware) | DCG@k / ideal_DCG@k | When ranking order matters |
| **Hit Rate** | Does top-k contain any relevant doc? | queries_with_hit / total_queries | Simplest metric; good starting point |

### Generation Metrics (End-to-End)

- **Faithfulness**: is the answer grounded in the retrieved context? (no hallucination)
- **Answer relevance**: does the answer address the question?
- **Context relevance**: are the retrieved chunks relevant to the question?
- **Completeness**: does the answer cover all aspects of the question?

### Evaluation Frameworks

| Framework | Approach | Notes |
|-----------|----------|-------|
| **RAGAS** | LLM-as-judge for faithfulness, relevance, context | Open-source, widely adopted |
| **DeepEval** | LLM-based metrics with statistical rigor | Supports custom metrics |
| **Braintrust** | Logging + eval platform | Production-grade, real-time evals |
| **LangSmith** | Tracing + evaluation suite | Integrated with LangChain |
| **Manual review** | Human judgment on sampled queries | Gold standard, doesn't scale |

### Building Your Evaluation Set

1. Collect **50-100 real user queries** (or realistic synthetic ones)
2. For each query, annotate the **ideal retrieved chunks** and the **ideal answer**
3. Run your pipeline, compute metrics, identify failure modes
4. Iterate on chunking, retrieval, and prompting based on failures
5. **Automate this**: run evals on every pipeline change (CI for RAG)

## Sources

- [RAGAS: Automated Evaluation of Retrieval Augmented Generation (Shahul Es et al., 2023)](https://github.com/explodinggradients/ragas)
- [DeepEval — The LLM Evaluation Framework (Confident AI)](https://github.com/confident-ai/deepeval)
- [Braintrust — AI Evaluation and Observability Platform](https://www.braintrust.dev/)
- [LangSmith Evaluation (LangChain)](https://docs.langchain.com/langsmith/evaluation)
