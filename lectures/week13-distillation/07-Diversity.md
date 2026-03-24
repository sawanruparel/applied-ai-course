---
title: "Ensuring Diversity"
section: Synthetic Data Generation
layout: standard
---

# Ensuring Diversity: Avoiding Mode Collapse in Synthetic Datasets

## The mode collapse problem

Teacher models have preferred response patterns. Without intervention, your dataset will contain thousands of variations of the same "comfortable" answer.

## Symptoms of low diversity

- Student always starts responses with "Certainly!" or "Of course!"
- Narrow vocabulary compared to desired output
- All responses have similar length and structure
- Poor performance on edge cases and rare categories

## Diversity strategies

### 1. Vary the generation parameters
```python
temperatures = [0.7, 0.8, 0.9, 1.0, 1.1]
top_p_values = [0.9, 0.95, 1.0]
# Generate with different combos for natural variation
```

### 2. Use a topic/scenario taxonomy
- Create an explicit grid: topics x difficulty x format x persona
- Ensure each cell has minimum coverage (e.g., 10 examples per cell)
- Track category distribution and fill gaps

### 3. Prompt perturbation (Evol-Instruct style)
- **Add constraints:** "Respond in under 50 words"
- **Increase complexity:** "Now include error handling"
- **Switch perspective:** "Explain as if to a 5-year-old"
- **Inject edge cases:** "The user is frustrated and swearing"

### 4. Multi-teacher generation
- Use GPT-4o for half, Claude Opus for half
- Each model has different stylistic biases
- The blend produces more robust training data

## Measuring diversity

- **Unique n-gram ratio:** Count distinct trigrams / total trigrams (target >0.7)
- **Topic entropy:** Cluster embeddings, measure uniformity across clusters
- **Response length distribution:** Should match your desired production distribution

## Sources

- [WizardLM: Empowering Large Language Models to Follow Complex Instructions / Evol-Instruct (Xu et al., 2023)](https://arxiv.org/abs/2304.12244)
