---
title: "Why Basic Prompting Isn't Enough"
section: Framing
layout: standard
---

# Why Basic Prompting Isn't Enough

Naive prompts fail in predictable ways. Consider this task:

```
Prompt: "Is 17077 a prime number?"
Response: "Yes, 17077 is a prime number." (incorrect — 17077 = 131 x 131)
```

## Failure Modes of Naive Prompts

- **Shallow pattern matching** — the model retrieves surface-level associations rather than computing answers
- **Inconsistent outputs** — the same prompt produces different answers across runs
- **Hallucinated reasoning** — the model states a confident answer without verifiable intermediate steps
- **Format drift** — outputs gradually deviate from the expected structure over long generations
- **Instruction amnesia** — later parts of the output ignore earlier constraints in the prompt

## The Core Problem

LLMs are next-token predictors. Without explicit structure, the model takes the path of least resistance — which is often the path of most plausible-sounding text, not most correct reasoning.

> Moving from "asking questions" to "programming behavior" is the fundamental shift in advanced prompt engineering.
