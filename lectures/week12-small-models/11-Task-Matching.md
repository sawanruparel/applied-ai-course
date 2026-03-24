---
title: "Task-to-Model Matching"
section: Model Selection
layout: cards
---

# Task-to-Model Matching

## Classification & Routing
**Model size: 1B–3B**

- Sentiment analysis, spam detection, intent classification
- Topic categorization, language identification
- Binary/multi-class decisions with structured output
- Fine-tuned models achieve 95%+ accuracy
- *Example: Llama 3.2 1B for support ticket routing*

## Extraction & Transformation
**Model size: 3B–7B**

- Named entity recognition, PII detection
- JSON/structured data extraction from text
- Text reformatting, normalization, translation
- Constrained generation ensures output validity
- *Example: Qwen 2.5 3B for invoice field extraction*

## Generation & Summarization
**Model size: 7B–14B**

- Document summarization, email drafting
- Code generation for well-defined tasks
- RAG-based Q&A with grounded responses
- Quality degrades gracefully with model size
- *Example: Phi-4 14B for technical documentation Q&A*

## Complex Reasoning
**Model size: 30B+ or Frontier**

- Multi-step logical reasoning, planning
- Novel creative writing, open-ended analysis
- Ambiguous tasks requiring world knowledge
- Tasks where errors are expensive
- *Example: Claude Opus 4 for legal brief analysis*
