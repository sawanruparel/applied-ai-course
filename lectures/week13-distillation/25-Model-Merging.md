---
title: "Model Merging"
section: Production Distillation
layout: standard
---

# Model Merging: Combining Multiple Fine-Tunes

## The idea

You have multiple LoRA adapters (or full fine-tunes) specialized for different tasks. Merge them into a single model that can do everything.

## Merging methods

### TIES (Trim, Elect Sign, Merge)
- Trims small weight changes (noise)
- Resolves sign conflicts between models
- Merges remaining weights by averaging
- **Best for:** Merging 3+ models with overlapping capabilities

### DARE (Drop And REscale)
- Randomly drops a fraction of weight changes
- Rescales remaining weights to compensate
- Reduces interference between models
- **Best for:** Merging models with conflicting specializations

### SLERP (Spherical Linear Interpolation)
- Interpolates between two models along a spherical path
- Preserves the magnitude of weight vectors
- Single interpolation parameter `t` controls the blend (0.0 to 1.0)
- **Best for:** Smooth blending of two models

## Using mergekit

```bash
pip install mergekit

# merge_config.yml
models:
  - model: ./base-model
    parameters:
      weight: 1.0
  - model: ./lora-customer-support
    parameters:
      weight: 0.5
  - model: ./lora-code-generation
    parameters:
      weight: 0.3

merge_method: ties
parameters:
  density: 0.5      # TIES: fraction of weights to keep
  normalize: true
dtype: bfloat16
```

```bash
mergekit-yaml merge_config.yml ./merged-output --cuda
```

## When to merge vs. serve separately

| Scenario | Approach |
|----------|----------|
| Tasks are related (support + sales) | Merge |
| Tasks are unrelated (code + medical) | Serve separately |
| Need to update one task frequently | Serve separately |
| Want single deployment simplicity | Merge |
| Memory constrained | Merge |

## Warning: merging is not guaranteed to work

- Always evaluate the merged model on all tasks
- Quality often drops 5-15% compared to individual adapters
- Iterative merging with evaluation is essential

## Sources

- [TIES-Merging: Resolving Interference When Merging Models (Yadav et al., 2023)](https://arxiv.org/abs/2306.01708)
- [Language Models are Super Mario / DARE (Yu et al., 2023)](https://arxiv.org/abs/2311.03099)
- [mergekit (Arcee AI)](https://github.com/arcee-ai/mergekit)
