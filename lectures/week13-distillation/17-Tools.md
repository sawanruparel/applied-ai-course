---
title: "Fine-Tuning Tools"
section: Hands-On Implementation
layout: cards
---

# Fine-Tuning Tools

## Hugging Face TRL

The standard library for SFT, DPO, and RLHF. Built on top of Transformers.

```bash
pip install trl peft transformers datasets
```

- **Pros:** Well-documented, active community, integrates with HF Hub
- **Cons:** Requires more boilerplate, manual config
- **Best for:** Custom pipelines, research, full control

```python
from trl import SFTTrainer, SFTConfig
# Full control over every parameter
```

## Axolotl

YAML-driven fine-tuning framework. Configure everything in a config file, run one command.

```bash
accelerate launch -m axolotl.cli.train config.yml
```

- **Pros:** Minimal code, many recipes, multi-GPU support
- **Cons:** Less flexible for custom training loops
- **Best for:** Practitioners who want fast iteration

```yaml
base_model: meta-llama/Llama-3.1-8B-Instruct
adapter: qlora
lora_r: 16
```

## Unsloth

Optimized for speed. Claims 2-5x faster training with 60% less memory through custom CUDA kernels.

```bash
pip install unsloth
```

- **Pros:** Fastest training, free Colab tier support
- **Cons:** Supports fewer model architectures
- **Best for:** Quick experiments, limited hardware

```python
from unsloth import FastLanguageModel
model, tokenizer = FastLanguageModel.from_pretrained(
    "unsloth/Llama-3.1-8B-Instruct", load_in_4bit=True
)
```

## OpenAI Fine-Tuning API

Managed fine-tuning service. Upload data, click train, get an endpoint.

```bash
openai api fine_tuning.jobs.create \
  -t "training_data.jsonl" -m "gpt-4o-mini-2024-07-18"
```

- **Pros:** Zero infrastructure, production-ready endpoint
- **Cons:** Limited model choices, no weight access, ongoing API costs
- **Best for:** Teams without ML infrastructure, production deployments

## Sources

- [Hugging Face TRL](https://github.com/huggingface/trl)
- [Hugging Face PEFT](https://github.com/huggingface/peft)
- [Axolotl](https://github.com/axolotl-ai-cloud/axolotl)
- [Unsloth](https://github.com/unslothai/unsloth)
- [OpenAI Fine-Tuning Docs](https://platform.openai.com/docs/guides/fine-tuning)
