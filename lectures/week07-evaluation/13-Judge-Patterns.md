---
title: "Judge Patterns"
section: LLM-as-a-Judge
layout: cards
---

# Judge Patterns

Three fundamental approaches to LLM-based evaluation.

## Pairwise Comparison

Given a question, compare Answer A vs Answer B. The judge picks a winner or declares a tie.

**Pros**: Easier for LLMs than absolute scoring. Powers Chatbot Arena, AlpacaEval, MT-Bench.

**Prompt**: "Which response better answers the question? Choose A, B, or Tie. Explain your reasoning."

**Best for**: Model comparison, A/B testing prompt variants.

## Pointwise Scoring

Rate a single answer on a numeric scale (1-5 or 1-10) against defined criteria.

**Pros**: Simpler to implement, gives absolute scores you can threshold on. Used by G-Eval, RAGAS internally.

**Prompt**: "Rate this response from 1-5 on [criterion]. 1 = completely fails, 5 = excellent. Provide your score and reasoning."

**Best for**: CI/CD gating, regression testing, monitoring dashboards.

## Reference-Based Grading

Compare the answer against a known correct reference answer.

**Pros**: Most objective -- the judge checks factual overlap, not just vibes. Used for answer correctness in RAGAS.

**Prompt**: "Given the reference answer, score the candidate answer on factual accuracy and completeness (1-5)."

**Best for**: QA systems with known answers, exam-style evaluation.

## Sources

- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (Zheng et al., 2023)](https://arxiv.org/abs/2306.05685)
- [Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference (Chiang et al., 2024)](https://arxiv.org/abs/2403.04132)
- [Length-Controlled AlpacaEval (Dubois et al., 2024)](https://arxiv.org/abs/2404.04475)
- [G-Eval: NLG Evaluation using GPT-4 with Better Human Alignment (Liu et al., 2023)](https://arxiv.org/abs/2303.16634)
- [RAGAS: Automated Evaluation of Retrieval Augmented Generation (Es et al., 2023)](https://arxiv.org/abs/2309.15217)
