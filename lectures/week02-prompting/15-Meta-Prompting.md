---
title: "Meta-Prompting"
section: Advanced Patterns
layout: standard
---

# Meta-Prompting: LLMs Writing Prompts for LLMs

Use one LLM call to generate or optimize the prompt for another. This bootstraps prompt quality without manual iteration.

## The Approach

```
# Step 1: Meta-prompt asks the model to write a prompt
SYSTEM: You are a prompt engineer. Given a task description,
write an optimal system prompt for an LLM that will perform
the task. Include: persona, constraints, output format,
edge case handling, and 2 few-shot examples.

USER: Task: Classify customer support tickets into categories
(billing, technical, account, general) and extract the key
issue in one sentence.

# Step 2: Model generates a full system prompt
# Step 3: Use the generated prompt in production
```

## Prompt Optimization Loop

```
SYSTEM: Here is a prompt and its eval results on 50 test cases.
Accuracy: 72%. Common failure: misclassifying refund requests
as "general" instead of "billing."

Revise the prompt to fix this failure mode. Return only the
revised prompt.
```

```mermaid
flowchart LR
    Task[Task description] --> MetaLLM[Meta-prompt to LLM]
    MetaLLM --> P[Generated prompt]
    P --> Eval[Run on eval set]
    Eval --> Score[Score + failures]
    Score --> MetaLLM
    Score --> Final[Best prompt for production]
```

## Key Techniques

- **APE** (Automatic Prompt Engineer, Zhou et al. 2022): generate prompt candidates, score on a dev set, select the best
- **DSPy**: programmatic framework that compiles high-level signatures into optimized prompts through bootstrapped few-shot selection
- **OPRO** (Yang et al. 2023): use the LLM as an optimizer — feed it past prompts and their scores, ask for a better one

## When to Use

- You have an eval suite but the prompt is underperforming
- You need to generate prompts for many similar subtasks
- You want to remove human bias from prompt design

## Sources

- [Large Language Models Are Human-Level Prompt Engineers (Zhou et al., 2022)](https://arxiv.org/abs/2211.01910)
- [DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines (Khattab et al., 2023)](https://arxiv.org/abs/2310.03714)
- [Large Language Models as Optimizers (Yang et al., 2023)](https://arxiv.org/abs/2309.03409)
