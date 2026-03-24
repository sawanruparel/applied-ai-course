---
title: "Supervised Fine-Tuning (SFT)"
section: Fine-Tuning Fundamentals
layout: standard
---

# Supervised Fine-Tuning (SFT)

## What is SFT?

Train the model to produce specific outputs given specific inputs. The simplest and most common form of fine-tuning.

## The training objective

```
Loss = -sum( log P(output_token_i | input, output_tokens_<i) )
```

The model learns to maximize the probability of the desired output tokens, given the input context. This is the same causal language modeling loss used in pre-training, but applied only to the assistant's response tokens.

## Masking: only train on the response

```python
# Input:  <system>You are helpful.</system><user>What is 2+2?</user><assistant>4</assistant>
# Labels: [-100, -100, -100, ..., -100, -100, ..., 4, </assistant>]
#          ^^^^ system tokens masked  ^^^^ user tokens masked  ^^^ only train here

# -100 is PyTorch's ignore_index -- these tokens don't contribute to the loss
```

This is critical: you want the model to learn the *response*, not to memorize the *prompt*.

## SFT with TRL (Transformers Reinforcement Learning)

```python
from trl import SFTTrainer, SFTConfig

training_config = SFTConfig(
    output_dir="./output",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    gradient_accumulation_steps=4,   # Effective batch size = 16
    learning_rate=2e-4,
    lr_scheduler_type="cosine",
    warmup_ratio=0.05,
    bf16=True,
    logging_steps=10,
    eval_strategy="steps",
    eval_steps=100,
    save_strategy="steps",
    save_steps=100,
    max_seq_length=2048,
)

trainer = SFTTrainer(
    model=model,
    args=training_config,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset,
    processing_class=tokenizer,
)
trainer.train()
```

## When SFT is enough

- Consistent output formatting (JSON, markdown, specific schemas)
- Domain-specific language and terminology
- Instruction following for a narrow task
- Style transfer (formal, casual, brand voice)

## Sources

- [Hugging Face TRL](https://github.com/huggingface/trl)
