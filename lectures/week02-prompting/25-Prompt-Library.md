---
title: "Building a Prompt Library"
section: Practical Workshop
layout: standard
---

# Building a Prompt Library: Reusable Templates and Components

As your team scales LLM usage, ad-hoc prompts become unmaintainable. A prompt library provides reusable, tested building blocks.

## Template Structure

```python
# prompt_library/templates/extraction.py

EXTRACTION_TEMPLATE = """
SYSTEM: You are a {domain} data extraction specialist.

TASK: Extract {entity_type} entities from the provided text.

OUTPUT SCHEMA:
{json_schema}

RULES:
- Only extract entities explicitly stated in the text
- Do not infer or hallucinate values
- If a field is ambiguous, set it to null and add a note
- {additional_rules}

INPUT TEXT:
<input>{text}</input>
"""

# Usage:
prompt = EXTRACTION_TEMPLATE.format(
    domain="medical",
    entity_type="medication",
    json_schema=medication_schema,
    additional_rules="Flag any drug interactions detected.",
    text=patient_notes
)
```

## Library Components

- **Templates**: parameterized prompt strings for common patterns (extraction, classification, generation, transformation)
- **Schemas**: Pydantic models / JSON schemas for each task's output format
- **Validators**: validation functions paired with each template
- **Eval sets**: golden test cases for each template, run in CI
- **Configs**: model, temperature, max_tokens, retry policy per template

## Organization

```
prompt_library/
  templates/          # Parameterized prompt strings
  schemas/            # Output format definitions (Pydantic / JSON Schema)
  validators/         # Output validation logic per task
  evals/              # Test cases and eval runners
  configs/            # Model + sampling configs per task
```

## Governance

- Every new prompt goes through code review with eval results attached
- Shared prompts are versioned and pinned — consumers declare which version they use
- Quarterly prompt audits: remove unused templates, update for new model capabilities
