---
title: "Citation and Grounding"
section: Advanced Techniques
layout: standard
---

# Citation and Grounding: Linking Answers Back to Sources

**Why grounding matters** -- Without citations, RAG output is indistinguishable from hallucination. Users cannot verify claims, audit answers, or build trust in the system. Regulatory environments (finance, healthcare, legal) require traceability.

**Inline citation generation**

Instruct the LLM to generate citations as part of its output, referencing specific retrieved documents by index or identifier.

```
The transformer architecture uses multi-head attention to process
input tokens in parallel [Source 2, Section 3.1], achieving
significant speedups over recurrent approaches [Source 5].
```

**Post-hoc attribution**

After generation, use an NLI (natural language inference) model to match each generated sentence to supporting passages. Sentences without sufficient support are flagged or removed.

**Grounding verification pipeline**

1. Split generated answer into individual claims
2. For each claim, score entailment against all retrieved passages
3. Classify: **Supported** (entailment score > 0.8), **Partially supported** (0.5-0.8), **Unsupported** (< 0.5)
4. Surface unsupported claims to the user with appropriate caveats

**Production patterns**

- Return source documents alongside the answer for user inspection
- Highlight which parts of the source were used
- Provide confidence scores per claim
- Allow users to drill down from a claim to its supporting evidence
