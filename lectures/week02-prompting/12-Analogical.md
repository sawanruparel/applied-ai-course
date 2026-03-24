---
title: "Analogical Prompting"
section: Advanced Patterns
layout: standard
---

# Analogical Prompting: "Recall a Similar Problem"

Yasunaga et al. (2023): Instead of hand-crafting few-shot examples, ask the model to **self-generate** relevant examples by recalling analogous problems from its training data.

## The Technique

```
Q: A farmer has a field that is 120 meters long and 85 meters wide.
   He wants to build a fence around the entire field and also divide
   it diagonally. How much fencing does he need?

Before solving, recall and solve a similar but simpler problem that
uses the same mathematical concepts. Then apply that approach here.
```

## How the Model Responds

```
Similar problem: A rectangle is 6m x 8m. Perimeter = 2(6+8) = 28m.
Diagonal = sqrt(6^2 + 8^2) = sqrt(100) = 10m. Total fence = 38m.

Now applying the same approach:
Perimeter = 2(120 + 85) = 410m
Diagonal = sqrt(120^2 + 85^2) = sqrt(14400 + 7225) = sqrt(21625) ≈ 147.1m
Total fencing needed ≈ 557.1 meters
```

## Why It Works

- **Self-generated exemplars** are more relevant than generic few-shot examples
- Leverages the model's training distribution — it retrieves patterns it actually knows
- No manual example engineering required
- The analogy acts as both a **plan** (what steps to follow) and a **check** (do the steps make sense?)

## When to Use

- Novel problems where you lack good few-shot examples
- Mathematical and scientific reasoning where analogical transfer is natural
- Tasks where the structure of the problem matters more than the specific domain

## Sources

- [Large Language Models as Analogical Reasoners (Yasunaga et al., 2023)](https://arxiv.org/abs/2310.01714)
