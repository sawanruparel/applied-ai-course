---
title: "Traditional LLMs as System 1"
section: System 1 vs System 2
layout: standard
---

# Traditional LLMs as System 1 Thinkers

- **Single forward pass:** input tokens in, output tokens out -- no deliberation
- **Fixed compute per token:** every token gets the same amount of processing regardless of difficulty
- **Pattern completion:** trained to predict the next token, not to "reason"
- **Fast and fluent:** produces grammatical, coherent text almost instantly
- **Confidently wrong:** generates plausible-sounding answers even when the answer is incorrect

### Where System 1 LLMs excel:
- Summarization, translation, creative writing, code completion
- Tasks where pattern matching from training data is sufficient
- High-throughput, low-latency applications

### Where System 1 LLMs fail:
- Multi-step math (GSM8K: GPT-3 ~10%, GPT-4 ~92% -- but only with CoT prompting)
- Logic puzzles, formal reasoning, constraint satisfaction
- Planning and search problems
- Novel problems not well-represented in training data

## Sources

- [Training Verifiers to Solve Math Word Problems — GSM8K (Cobbe et al., 2021)](https://arxiv.org/abs/2110.14168)
- [GPT-4 Technical Report (OpenAI, 2023)](https://arxiv.org/abs/2303.08774)
- [Chain-of-Thought Prompting Elicits Reasoning in LLMs (Wei et al., 2022)](https://arxiv.org/abs/2201.11903)
