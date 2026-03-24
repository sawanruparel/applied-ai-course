---
title: "The Training Loop"
section: Hands-On Implementation
layout: flow
---

# The Training Loop: Setup, Train, Evaluate, Iterate

## Step 1: Setup

Load base model with quantization. Add LoRA adapters. Prepare tokenizer.

```python
from unsloth import FastLanguageModel

model, tokenizer = FastLanguageModel.from_pretrained(
    "meta-llama/Llama-3.1-8B-Instruct",
    max_seq_length=2048,
    load_in_4bit=True,
)
model = FastLanguageModel.get_peft_model(
    model, r=16, lora_alpha=32,
    target_modules=["q_proj","k_proj","v_proj","o_proj",
                     "gate_proj","up_proj","down_proj"],
    lora_dropout=0.05,
)
```

## Step 2: Train

Launch training with early stopping on validation loss.

```python
from trl import SFTTrainer, SFTConfig

trainer = SFTTrainer(
    model=model,
    train_dataset=train_data,
    eval_dataset=val_data,
    args=SFTConfig(
        output_dir="./checkpoints",
        num_train_epochs=3,
        per_device_train_batch_size=4,
        gradient_accumulation_steps=4,
        learning_rate=2e-4,
        warmup_ratio=0.05,
        eval_strategy="steps",
        eval_steps=50,
        save_strategy="steps",
        save_steps=50,
        load_best_model_at_end=True,
        bf16=True,
    ),
    processing_class=tokenizer,
)
trainer.train()
```

## Step 3: Evaluate

Run inference on held-out test set. Compare against baseline (base model + prompting).

```python
# Generate predictions on test set
results = []
for example in test_data:
    prompt = tokenizer.apply_chat_template(
        example["messages"][:-1], tokenize=False, add_generation_prompt=True
    )
    output = model.generate(tokenizer(prompt, return_tensors="pt").input_ids.cuda(),
                            max_new_tokens=256, temperature=0.1)
    prediction = tokenizer.decode(output[0], skip_special_tokens=True)
    results.append({"expected": example["messages"][-1]["content"],
                     "predicted": prediction})
```

## Step 4: Iterate

Analyze failures. Add more training data for weak categories. Adjust hyperparameters. Repeat.

- If overfitting: reduce epochs, increase dropout, add more data
- If underfitting: increase rank, increase learning rate, train longer
- If format errors: add more format-specific examples
- If hallucinating: add negative examples, reduce temperature at inference

## Sources

- [Unsloth](https://github.com/unslothai/unsloth)
- [Hugging Face TRL](https://github.com/huggingface/trl)
