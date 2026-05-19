---
title: "Synthetic Data Pipeline"
section: Synthetic Data Generation
layout: diagram
---

# Synthetic Data Pipeline

```mermaid
flowchart LR
    S1["1. Define task<br/>schema, rubric, failures"] --> S2["2. Seed inputs<br/>real examples, edge cases"]
    S2 --> S3["3. Prompt teacher<br/>system + few-shot, T=0.7-1.0"]
    S3 --> S4["4. Filter & validate<br/>dedupe, quality, length"]
    S4 --> S5["5. Format & split<br/>chat format, 80/10/10"]
    S5 --> S6["6. Train student<br/>LoRA/QLoRA + SFT"]
```

## Practical example: generating customer support data

```python
import openai

SYSTEM_PROMPT = """You are generating training data for a customer support bot.
Given a product and issue category, generate a realistic customer message
and an ideal agent response. Output as JSON:
{"customer": "...", "agent": "...", "category": "...", "sentiment": "..."}"""

SEED_TOPICS = ["billing", "shipping", "returns", "technical", "account"]
PRODUCTS = ["Pro Plan", "Enterprise", "Starter Kit", "API Access"]

for topic in SEED_TOPICS:
    for product in PRODUCTS:
        response = openai.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": f"Product: {product}, Issue: {topic}"}
            ],
            temperature=0.9,  # High diversity
            n=5               # 5 variations per combo
        )
```
