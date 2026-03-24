---
title: "Synthetic Data Pipeline"
section: Synthetic Data Generation
layout: diagram
---

# Synthetic Data Pipeline

```
+------------------+     +-------------------+     +------------------+
|  1. DEFINE TASK  |     |  2. SEED INPUTS   |     | 3. PROMPT TEACHER|
|                  | --> |                   | --> |                  |
| - Input/output   |     | - Real examples   |     | - System prompt  |
|   schema         |     | - Edge cases      |     | - Few-shot demos |
| - Quality rubric |     | - Topic taxonomy  |     | - Temperature    |
| - Failure modes  |     | - Difficulty tiers |     |   0.7-1.0       |
+------------------+     +-------------------+     +------------------+
                                                          |
                                                          v
+------------------+     +-------------------+     +------------------+
| 6. TRAIN STUDENT | <-- | 5. FORMAT & SPLIT | <-- | 4. FILTER &      |
|                  |     |                   |     |    VALIDATE      |
| - LoRA/QLoRA     |     | - Chat format     |     | - Deduplication  |
| - SFT training   |     | - 80/10/10 split  |     | - Quality score  |
| - Eval on held-  |     | - Shuffle         |     | - Length filter   |
|   out set        |     | - JSONL export    |     | - Human spot-check|
+------------------+     +-------------------+     +------------------+
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
