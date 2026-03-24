---
title: "Output Validation"
section: Reliability Engineering
layout: standard
---

# Output Validation: Regex, Schema Validation, LLM-as-Validator

Never trust raw LLM output in production. Always validate before passing downstream.

## Layer 1: Structural Validation

```python
import json
from pydantic import BaseModel, validator

class ExtractedEntity(BaseModel):
    name: str
    entity_type: str  # "person" | "org" | "location"
    confidence: float

    @validator("confidence")
    def check_range(cls, v):
        if not 0.0 <= v <= 1.0:
            raise ValueError("confidence must be between 0 and 1")
        return v

    @validator("entity_type")
    def check_type(cls, v):
        if v not in ("person", "org", "location"):
            raise ValueError(f"invalid entity_type: {v}")
        return v

# Parse and validate LLM output
raw = llm_call(prompt)
entity = ExtractedEntity.model_validate_json(raw)  # raises on invalid
```

## Layer 2: Semantic Validation

```python
# Use a second LLM call to check the first
validation_prompt = f"""
Given this input: {original_input}
And this extracted output: {llm_output}

Does the output accurately reflect the input? Check:
1. Are all entities actually present in the input?
2. Are entity types correct?
3. Is anything fabricated?

Return: {{"valid": true/false, "issues": [str]}}
"""
```

## Layer 3: Rule-Based Guards

- **Regex filters**: catch PII leakage, banned patterns, format violations
- **Length bounds**: reject outputs shorter than 10 chars or longer than 5000
- **Blocklists**: filter known hallucination patterns or harmful content
- **Reference checks**: verify extracted quotes actually appear in the source document
