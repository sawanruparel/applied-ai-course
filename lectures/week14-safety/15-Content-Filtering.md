---
title: Content Filtering
section: Guardrails & Content Safety
layout: standard
---

# Content Filtering

## Toxicity, PII Detection, and Sensitive Topics

Content filtering ensures that both inputs and outputs meet safety and compliance standards.

## Toxicity Detection

```python
from detoxify import Detoxify

detector = Detoxify("multilingual")

def check_toxicity(text: str, threshold: float = 0.7) -> dict:
    scores = detector.predict(text)
    flagged = {
        category: score
        for category, score in scores.items()
        if score > threshold
    }
    return {
        "toxic": len(flagged) > 0,
        "categories": flagged
    }

# Example output:
# {"toxic": True, "categories": {"insult": 0.92, "threat": 0.85}}
```

## PII Detection and Redaction

```python
from presidio_analyzer import AnalyzerEngine
from presidio_anonymizer import AnonymizerEngine

analyzer = AnalyzerEngine()
anonymizer = AnonymizerEngine()

def redact_pii(text: str) -> str:
    """Detect and redact PII from text."""
    results = analyzer.analyze(
        text=text,
        entities=[
            "PERSON", "EMAIL_ADDRESS", "PHONE_NUMBER",
            "CREDIT_CARD", "US_SSN", "IP_ADDRESS"
        ],
        language="en"
    )
    anonymized = anonymizer.anonymize(text=text, analyzer_results=results)
    return anonymized.text

# Input:  "Contact John Smith at john@acme.com or 555-0123"
# Output: "Contact <PERSON> at <EMAIL_ADDRESS> or <PHONE_NUMBER>"
```

## Sensitive Topic Detection

```python
SENSITIVE_TOPICS = {
    "medical_advice": ["diagnosis", "treatment", "medication", "symptoms"],
    "legal_advice": ["lawsuit", "legal rights", "court", "attorney"],
    "financial_advice": ["invest", "stock pick", "buy shares", "portfolio"],
}

def detect_sensitive_topics(text: str) -> list[str]:
    flagged = []
    text_lower = text.lower()
    for topic, keywords in SENSITIVE_TOPICS.items():
        if any(kw in text_lower for kw in keywords):
            flagged.append(topic)
    return flagged
```

## Best Practice: Combine Multiple Filters

Layer keyword matching, ML classifiers, and LLM-based evaluation for robust filtering. No single method catches everything.

## Sources

- [Detoxify -- Unitary AI](https://github.com/unitaryai/detoxify)
- [Presidio -- Microsoft](https://github.com/microsoft/presidio)
