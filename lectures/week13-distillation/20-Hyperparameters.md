---
title: "Key Hyperparameters"
section: Hands-On Implementation
layout: standard
---

# Key Hyperparameters

## The ones that matter most

| Parameter | Typical Range | Recommended Start | What it controls |
|-----------|--------------|-------------------|------------------|
| **Learning rate** | 1e-5 to 5e-4 | 2e-4 | Speed of weight updates |
| **LoRA rank (r)** | 4 to 128 | 16 | Capacity of adapter (expressiveness) |
| **LoRA alpha** | 8 to 256 | 32 (2x rank) | Scaling of adapter contribution |
| **Epochs** | 1 to 5 | 3 | Passes through the data |
| **Batch size** | 1 to 32 | 4 (x4 grad accum = 16 effective) |Stability of gradient estimates |
| **LoRA dropout** | 0.0 to 0.1 | 0.05 | Regularization |
| **Max seq length** | 512 to 8192 | 2048 | Longest example to process |
| **Warmup ratio** | 0.0 to 0.1 | 0.05 | Gradual LR increase at start |

## Learning rate: the most important hyperparameter

```
Too high (>5e-4):  Training loss oscillates, model produces garbage
Too low  (<1e-5):  Model barely changes from base, wasted compute
Sweet spot (2e-4): Standard for LoRA with AdamW optimizer
```

- Use **cosine** learning rate schedule (gradual decay)
- Always include a **warmup** phase (5% of total steps)

## LoRA rank: capacity vs efficiency tradeoff

```
Rank 4:    Very lightweight, good for simple tasks (classification)
Rank 16:   Good default for most tasks
Rank 32:   More capacity, needed for complex generation
Rank 64:   Near full fine-tune expressiveness
Rank 128:  Rarely needed, diminishing returns
```

## Practical tips

- **Start small, scale up:** Begin with rank=16, lr=2e-4, 3 epochs
- **Watch validation loss:** If it starts increasing, you are overfitting
- **Effective batch size matters:** `batch_size x gradient_accumulation_steps x num_gpus`
- **Gradient checkpointing:** Trade compute for memory -- enable it if running out of VRAM
- **bf16 > fp16:** bfloat16 is more numerically stable, use it when hardware supports it
