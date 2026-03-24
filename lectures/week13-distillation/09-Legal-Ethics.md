---
title: "Legal and Ethical Considerations"
section: Synthetic Data Generation
layout: standard
---

# Legal and Ethical Considerations

## Model output policies -- read the fine print

| Provider | Can you fine-tune on outputs? | Key restriction |
|----------|-------------------------------|-----------------|
| OpenAI | Yes, with conditions | Cannot use outputs to train models that compete with OpenAI |
| Anthropic | Yes, with conditions | Check current usage policy for commercial use |
| Google | Yes, for Gemini API | Terms vary by model tier |
| Meta (Llama) | Yes, open license | Llama license allows fine-tuning; 700M MAU threshold |
| Mistral | Yes, Apache 2.0 models | Open-weight models have permissive licenses |

**Always check the current terms of service.** Policies change frequently.

## Key legal considerations

- **Terms of service compliance:** Violating ToS can result in API access revocation
- **Output ownership:** Most providers grant you rights to outputs, but with conditions
- **Downstream licensing:** Your fine-tuned model inherits license obligations from the base model
- **Data privacy:** If seed inputs contain PII, synthetic data may leak it

## Ethical considerations

- **Transparency:** Disclose when models are trained on synthetic data
- **Bias amplification:** Teacher biases get distilled into student models
- **Benchmark contamination:** Synthetic data may inadvertently contain test set answers
- **Model collapse risk:** Recursive distillation (training on outputs of models trained on outputs) degrades quality over generations

## Best practices

1. Document your data provenance: which teacher, what prompt, what filters
2. Audit synthetic data for bias before training
3. Keep humans in the loop for high-stakes domains (medical, legal, financial)
4. Version your datasets like you version your code
5. Maintain a held-out evaluation set that is NEVER synthetic
