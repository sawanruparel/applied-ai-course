---
title: "Real-World Prompt Patterns"
section: Practical Workshop
layout: cards
---

# Real-World Prompt Patterns

## Extraction

Pull structured data from unstructured text. Always define the output schema explicitly.

```
SYSTEM: Extract all medication names, dosages,
and frequencies from clinical notes. Return JSON.

Schema: {"medications": [{"name": str,
"dosage": str, "frequency": str}]}

If a field is not mentioned, use null.
Do NOT infer dosages not explicitly stated.

INPUT: "Patient takes metformin 500mg twice
daily and lisinopril for blood pressure."

OUTPUT: {"medications": [
  {"name":"metformin","dosage":"500mg",
   "frequency":"twice daily"},
  {"name":"lisinopril","dosage":null,
   "frequency":null}
]}
```

## Classification

Map inputs to predefined categories. Few-shot examples set the decision boundary.

```
Classify the support ticket. Categories:
billing, technical, account, general.
Return: {"category": str, "confidence": float}

Examples:
"I was charged twice" → billing (0.95)
"Can't log in" → account (0.90)
"App crashes on upload" → technical (0.92)

Ticket: "How do I export my data?"
```

## Generation

Produce content under strict constraints. Persona + constraints + format = predictable output.

```
SYSTEM: You are a technical writer for a
developer docs team. Write concise, accurate
API documentation.

CONSTRAINTS:
- Max 100 words per endpoint description
- Include: method, path, parameters, response
- Use present tense, active voice
- No marketing language

INPUT: {endpoint_spec}
```

## Transformation

Convert between formats or styles. Provide before/after examples.

```
Rewrite the following customer email to be
professional and empathetic. Preserve all
factual content. Do not add information.

TONE: professional, empathetic, solution-oriented
LENGTH: within 20% of original word count

BEFORE: "your product is garbage and I want
my money back RIGHT NOW"

AFTER:
```
