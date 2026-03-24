---
title: "LlamaGuard: Meta's Safety Classifier"
section: Guardrails & Content Safety
layout: standard
---

# LlamaGuard: Meta's Safety Classifier

## What Is LlamaGuard?

LlamaGuard is a Llama-based model fine-tuned specifically for **content safety classification**. It evaluates prompts and responses against a taxonomy of unsafe categories.

## Safety Taxonomy (LlamaGuard 3)

| Category | Description |
|----------|-------------|
| S1 | Violent crimes |
| S2 | Non-violent crimes |
| S3 | Sex-related crimes |
| S4 | Child sexual exploitation |
| S5 | Defamation |
| S6 | Specialized advice (medical, legal, financial) |
| S7 | Privacy violations |
| S8 | Intellectual property |
| S9 | Indiscriminate weapons |
| S10 | Hate speech |
| S11 | Suicide and self-harm |
| S12 | Sexual content |
| S13 | Elections-related misinformation |

## Integration Example

```python
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

model_id = "meta-llama/Llama-Guard-3-8B"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id, torch_dtype=torch.bfloat16, device_map="auto"
)

def classify_safety(role: str, content: str) -> dict:
    """Classify content as safe/unsafe using LlamaGuard."""
    chat = [{"role": role, "content": content}]
    input_ids = tokenizer.apply_chat_template(
        chat, return_tensors="pt"
    ).to(model.device)

    output = model.generate(
        input_ids=input_ids, max_new_tokens=100
    )
    result = tokenizer.decode(
        output[0][len(input_ids[0]):], skip_special_tokens=True
    )
    # Returns "safe" or "unsafe\nS{category}"
    return {
        "safe": result.strip().startswith("safe"),
        "raw": result.strip()
    }
```

## Using LlamaGuard as Input + Output Rail

```python
async def guarded_chat(user_message: str) -> str:
    # Input rail
    input_check = classify_safety("user", user_message)
    if not input_check["safe"]:
        return "I can't process that request."

    # Generate response
    response = await llm.generate(user_message)

    # Output rail
    output_check = classify_safety("assistant", response)
    if not output_check["safe"]:
        return "I'm unable to provide that response."

    return response
```

## Sources

- [LlamaGuard: LLM-based Input-Output Safeguard (Inan et al., 2023)](https://arxiv.org/abs/2312.06674)
