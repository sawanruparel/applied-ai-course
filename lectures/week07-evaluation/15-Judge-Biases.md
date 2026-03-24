---
title: "Known Biases in LLM Judges"
section: LLM-as-a-Judge
layout: standard
---

# Known Biases in LLM Judges

## Understanding the Failure Modes

LLM judges are powerful but systematically biased. You must know these biases to build reliable evaluation.

## Position Bias

- In pairwise comparisons, LLMs prefer the response presented **first** (or sometimes last)
- GPT-4 shows ~10-15% position bias in MT-Bench experiments
- The same response can win or lose depending on whether it's shown as "A" or "B"

## Verbosity Bias

- LLMs tend to prefer **longer, more detailed** responses regardless of accuracy
- A verbose but partially wrong answer may score higher than a concise correct one
- Measured at 5-10% bias toward longer outputs in controlled studies

## Self-Preference Bias (Self-Enhancement)

- LLMs rate their own outputs ~10% higher than outputs from other models
- GPT-4 judging GPT-4 outputs vs Claude outputs shows measurable self-preference
- This makes same-model evaluation unreliable for model comparison

## Formatting Bias

- Responses with markdown formatting, bullet points, and headers score higher
- Well-structured wrong answers can outscore poorly-formatted correct answers

## Authority/Confidence Bias

- Responses that sound confident and authoritative score higher
- Hedging language ("I think", "it might be") is penalized even when appropriate

## Sensitivity to Prompt Wording

- Small changes in the judge prompt can shift scores by 0.5-1.0 points on a 5-point scale
- The order of criteria in the rubric affects which criteria get weighted more heavily

## Sources

- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (Zheng et al., 2023)](https://arxiv.org/abs/2306.05685)
