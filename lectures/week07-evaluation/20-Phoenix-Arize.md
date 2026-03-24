---
title: "Phoenix / Arize"
section: Frameworks & Tools
layout: standard
---

# Phoenix / Arize

## Observability-Driven Evaluation and Tracing

## The Observability Approach

Phoenix (by Arize AI, open-source) combines **tracing** and **evaluation** -- you instrument your RAG pipeline to capture every step, then evaluate the captured traces.

## Tracing: See What Your Pipeline Actually Does

```python
pip install arize-phoenix opentelemetry-instrumentation

import phoenix as px
from phoenix.otel import register
from openinference.instrumentation.langchain import LangChainInstrumentor

# Launch Phoenix UI
px.launch_app()

# Auto-instrument LangChain
tracer_provider = register(project_name="my-rag-app")
LangChainInstrumentor().instrument(tracer_provider=tracer_provider)

# Now every LangChain call is traced automatically
result = rag_chain.invoke("What is the return policy?")
# Phoenix UI shows: query -> retriever -> reranker -> LLM -> response
```

## Evaluation on Traces

```python
from phoenix.evals import llm_classify, RAG_RELEVANCY_PROMPT

# Pull traces from Phoenix
trace_df = px.Client().get_spans_dataframe()

# Run LLM-as-judge evaluation on retrieved documents
results = llm_classify(
    dataframe=trace_df,
    template=RAG_RELEVANCY_PROMPT,
    model=OpenAIModel(model="gpt-4o"),
    rails=["relevant", "irrelevant"]
)
```

## Why Phoenix?

- **Zero-code instrumentation**: Auto-instruments LangChain, LlamaIndex, OpenAI, and more
- **Visual trace explorer**: See exactly which chunks were retrieved, what the prompt looked like, and what the LLM generated
- **Built-in eval templates**: Relevancy, hallucination, QA correctness, toxicity
- **Local-first**: Runs on your machine, no data leaves your environment
- **Production monitoring**: Track metrics over time, set up alerts for quality degradation

## Sources

- [Phoenix GitHub Repository (Arize AI)](https://github.com/Arize-ai/phoenix)
- [Phoenix Documentation](https://phoenix.arize.com/)
