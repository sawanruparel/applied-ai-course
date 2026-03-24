---
title: "QLoRA"
section: Fine-Tuning Fundamentals
layout: standard
---

# QLoRA: Fine-Tune on a Single GPU

## The breakthrough

QLoRA combines two techniques to make fine-tuning dramatically more memory efficient:

1. **Quantize** the base model to 4-bit (NF4 format) -- reduces memory 4x
2. **Add LoRA adapters** in full precision (bf16/fp16) -- maintains training quality

## Memory comparison for Llama 3 8B

| Method | VRAM Required | Hardware |
|--------|--------------|----------|
| Full fine-tune (fp16) | ~60 GB | 1x A100 80GB |
| LoRA (fp16 base) | ~18 GB | 1x A100 40GB |
| QLoRA (4-bit base) | ~6 GB | 1x RTX 4090 or even RTX 3090 |
| QLoRA + gradient checkpointing | ~4.5 GB | 1x RTX 3080 |

## The NF4 data type

- "Normal Float 4-bit" -- quantization levels are optimized for normally-distributed weights
- Double quantization: quantize the quantization constants too
- Paged optimizers: offload optimizer states to CPU when GPU memory is full

## Code example

```python
from transformers import AutoModelForCausalLM, BitsAndBytesConfig
from peft import LoraConfig, get_peft_model

# 4-bit quantization config
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16,
    bnb_4bit_use_double_quant=True,
)

# Load quantized base model
model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Llama-3.1-8B-Instruct",
    quantization_config=bnb_config,
    device_map="auto",
)

# Add LoRA adapters
lora_config = LoraConfig(
    r=16, lora_alpha=32, lora_dropout=0.05,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
    task_type="CAUSAL_LM",
)
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# trainable params: 13,631,488 || all params: 8,043,847,680 || trainable%: 0.1695
```

## Quality vs full fine-tuning

QLoRA matches full fine-tuning quality on most tasks, with <1% degradation on benchmarks. The original paper showed this across 1,000+ experiments.

## Sources

- [QLoRA: Efficient Finetuning of Quantized LLMs (Dettmers et al., 2023)](https://arxiv.org/abs/2305.14314)
- [LoRA: Low-Rank Adaptation of Large Language Models (Hu et al., 2021)](https://arxiv.org/abs/2106.09685)
- [Hugging Face PEFT](https://github.com/huggingface/peft)
