---
title: "Common Failures"
section: Hands-On Implementation
layout: standard
---

# Common Failures in Fine-Tuning

## 1. Catastrophic forgetting

**Symptom:** Model excels at your task but cannot do anything else. Ask it a general question and it responds with task-specific output.

**Cause:** Too many epochs, learning rate too high, or dataset too narrow.

**Fix:**
- Reduce to 1-3 epochs
- Lower learning rate (try 1e-4 instead of 2e-4)
- Mix in 10-20% general instruction data (e.g., Alpaca or OpenAssistant)
- Use LoRA instead of full fine-tuning

## 2. Overfitting

**Symptom:** Training loss drops to near zero but validation loss increases. Model memorizes training examples verbatim.

**Cause:** Too few unique examples, too many epochs, rank too high.

**Fix:**
- Add more diverse training data
- Reduce epochs (watch validation loss curve)
- Increase LoRA dropout to 0.1
- Reduce LoRA rank
- Use early stopping: `load_best_model_at_end=True`

## 3. Format collapse

**Symptom:** Model ignores output format requirements. Asked for JSON, responds in prose. Asked for bullets, gives paragraphs.

**Cause:** Insufficient format-specific examples, or format examples not diverse enough.

**Fix:**
- Ensure every training example demonstrates the correct format
- Add explicit format instructions in the system prompt
- Include "negative" examples: malformed format -> correct format
- Increase the proportion of format-heavy examples

## 4. Reward hacking (DPO/RLHF)

**Symptom:** Model produces verbose, sycophantic responses that score well on preference metrics but are not actually helpful.

**Cause:** Preference data is biased toward longer or more agreeable responses.

**Fix:**
- Include preference pairs where concise answers are preferred
- Add length-controlled pairs (short preferred over long for simple questions)
- Lower the DPO beta to constrain divergence from the base model

## 5. Repetition loops

**Symptom:** Model gets stuck repeating phrases or sentences.

**Cause:** Repetitive training data, or training on outputs with repetition.

**Fix:**
- Deduplicate training data aggressively
- Use repetition penalty at inference time: `repetition_penalty=1.1`
- Filter training data for examples containing repetition

## Debugging checklist

```
[ ] Validation loss is decreasing (not just training loss)
[ ] Model can still answer general questions
[ ] Output format matches expectations on >95% of test cases
[ ] No verbatim training examples in outputs (memorization check)
[ ] Performance beats base model + prompting baseline
```

## Sources

- [Alpaca: A Strong, Replicable Instruction-Following Model (Taori et al., 2023)](https://crfm.stanford.edu/2023/03/13/alpaca.html)
- [OpenAssistant (LAION-AI)](https://github.com/LAION-AI/Open-Assistant)
- [LoRA: Low-Rank Adaptation of Large Language Models (Hu et al., 2021)](https://arxiv.org/abs/2106.09685)
- [DPO: Direct Preference Optimization (Rafailov et al., 2023)](https://arxiv.org/abs/2305.18290)
