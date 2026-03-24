---
title: "Training Setup"
section: Fine-Tuning Fundamentals
layout: standard
---

# Training Setup: Dataset Format, Hyperparameters, Hardware

## Dataset format: ChatML / conversation format

```json
{
  "messages": [
    {"role": "system", "content": "You are a helpful medical coding assistant."},
    {"role": "user", "content": "What ICD-10 code is used for type 2 diabetes?"},
    {"role": "assistant", "content": "The ICD-10 code for type 2 diabetes mellitus is E11. More specific codes include:\n- E11.0: With hyperosmolarity\n- E11.65: With hyperglycemia\n- E11.9: Without complications (most common)"}
  ]
}
```

Save as JSONL -- one JSON object per line, one conversation per line.

## Dataset size guidelines

| Task Complexity | Minimum Examples | Recommended | Typical Quality |
|----------------|-----------------|-------------|-----------------|
| Simple classification | 50 | 500-1,000 | Good |
| Structured extraction | 200 | 1,000-5,000 | Good |
| Conversational style | 500 | 2,000-10,000 | Good |
| Complex reasoning | 1,000 | 5,000-50,000 | Varies |

## Hardware options and cost

| GPU | VRAM | Method | 8B Model | Approx. Cost |
|-----|------|--------|----------|-------------|
| RTX 3090/4090 | 24 GB | QLoRA | Yes | $0.50/hr (cloud) |
| A100 40GB | 40 GB | LoRA | Yes | $1.50/hr (cloud) |
| A100 80GB | 80 GB | Full FT | Yes | $2.50/hr (cloud) |
| H100 80GB | 80 GB | Full FT | Yes (faster) | $3.50/hr (cloud) |

## Cloud options

- **Lambda Labs:** Cheapest on-demand A100s (~$1.10/hr)
- **RunPod:** Flexible spot pricing, good for experiments
- **Google Colab Pro+:** A100 for $50/month (limited hours)
- **AWS/GCP/Azure:** Most expensive but most reliable

## Typical training time

- **1K examples, QLoRA, 8B model:** 15-30 minutes on A100
- **10K examples, QLoRA, 8B model:** 2-4 hours on A100
- **50K examples, LoRA, 8B model:** 8-16 hours on A100
