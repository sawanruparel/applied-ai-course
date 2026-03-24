---
title: "Full Fine-Tuning"
section: Fine-Tuning Fundamentals
layout: standard
---

# Full Fine-Tuning: Update All Parameters

## What it is

Update every weight in the model using your training data. The original pre-trained weights are modified directly.

## The math

For a 7B parameter model:
- **Parameters:** 7,000,000,000 floating point numbers
- **Memory (fp16):** ~14 GB just for weights
- **Memory (training):** ~56 GB (weights + gradients + optimizer states + activations)
- **Hardware:** Typically requires 2-4x A100 80GB GPUs

## Advantages

- Maximum expressiveness -- can change any behavior
- No architectural constraints on what can be learned
- Historically the gold standard for task adaptation

## Disadvantages

- **Catastrophic forgetting:** Model loses general capabilities while learning your task
- **Storage:** Need to save a full copy of the model per task (14 GB per fine-tune)
- **Cost:** GPU hours add up fast -- $2-10/hour for A100s
- **Overfitting risk:** With small datasets (<1K examples), full fine-tuning easily overfits

## When to use full fine-tuning

- You have a large dataset (>50K examples)
- You need to fundamentally change model behavior
- You have significant compute budget
- You are training a foundation model for further specialization

## In practice: most teams skip this and go straight to LoRA

Full fine-tuning is the "from scratch" renovation. LoRA is the "targeted remodel."
