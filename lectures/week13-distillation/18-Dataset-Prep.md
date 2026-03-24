---
title: "Dataset Preparation"
section: Hands-On Implementation
layout: standard
---

# Dataset Preparation: Conversation Format

## The standard format: messages array

Every major framework expects data in the "messages" conversation format:

```json
{"messages": [
  {"role": "system", "content": "You are a sentiment analysis API. Respond with exactly one word: positive, negative, or neutral."},
  {"role": "user", "content": "I absolutely love this product! Best purchase ever."},
  {"role": "assistant", "content": "positive"}
]}
```

## Converting raw data to conversation format

```python
import json

def convert_to_chat(row):
    """Convert a classification dataset row to chat format."""
    return {
        "messages": [
            {
                "role": "system",
                "content": "Classify the customer review sentiment as positive, negative, or neutral. Respond with only the label."
            },
            {"role": "user", "content": row["review_text"]},
            {"role": "assistant", "content": row["label"]}
        ]
    }

# Write as JSONL
with open("train.jsonl", "w") as f:
    for row in dataset:
        f.write(json.dumps(convert_to_chat(row)) + "\n")
```

## Multi-turn conversations

```json
{"messages": [
  {"role": "system", "content": "You are a Python tutor."},
  {"role": "user", "content": "How do I read a CSV file?"},
  {"role": "assistant", "content": "Use pandas: `import pandas as pd; df = pd.read_csv('file.csv')`"},
  {"role": "user", "content": "How do I filter rows where age > 30?"},
  {"role": "assistant", "content": "`filtered = df[df['age'] > 30]`"}
]}
```

## Data splits

```python
from sklearn.model_selection import train_test_split

# 80% train, 10% validation, 10% test
train, temp = train_test_split(data, test_size=0.2, random_state=42)
val, test = train_test_split(temp, test_size=0.5, random_state=42)
```

## Pre-flight checklist

- [ ] All examples parse as valid JSON
- [ ] No empty assistant responses
- [ ] System prompt is consistent across examples (or intentionally varied)
- [ ] Max sequence length covers 95%+ of your examples
- [ ] No PII or sensitive data leaked from seed inputs
- [ ] Train/val/test sets have no overlap
