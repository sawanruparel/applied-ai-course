---
title: "Key Papers & References"
section: Production Evaluation
layout: standard
---

# Key Papers & References

## Essential Reading for LLM Evaluation

| Paper | Authors | Year | Key Contribution |
|---|---|---|---|
| [**RAGAS: Automated Evaluation of Retrieval Augmented Generation**](https://arxiv.org/abs/2309.15217) | Es et al. | 2023 | Framework for reference-free RAG evaluation; faithfulness and relevancy metrics |
| [**Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena**](https://arxiv.org/abs/2306.05685) | Zheng et al. | 2023 | Systematic study of LLM judge biases; MT-Bench benchmark; 85% GPT-4/human agreement |
| [**G-Eval: NLG Evaluation using GPT-4 with Better Human Alignment**](https://arxiv.org/abs/2303.16634) | Liu et al. | 2023 | Chain-of-thought evaluation with probability-weighted scoring; state-of-the-art correlation with humans |
| [**Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models**](https://arxiv.org/abs/2310.08491) | Kim et al. | 2023 | Open-source judge model; fine-tuned for evaluation with rubric-following |
| [**Replacing Judges with Juries: Evaluating LLM Generations with a Panel of Diverse Models (PoLL)**](https://arxiv.org/abs/2404.18796) | Verga et al. | 2024 | Panel of smaller models outperforms single large judge; cost-effective evaluation |
| [**Who Validates the Validators? Aligning LLM-Assisted Evaluation of LLM Outputs with Human Preferences**](https://arxiv.org/abs/2404.12272) | Shankar et al. | 2024 | Meta-evaluation of LLM judges; calibration and validation methodology |

## Benchmarks to Know

| Benchmark | Purpose | Size |
|---|---|---|
| [**MT-Bench**](https://arxiv.org/abs/2306.05685) | Multi-turn conversation quality | 80 questions, 8 categories |
| [**AlpacaEval**](https://arxiv.org/abs/2404.04475) | Instruction-following quality | 805 instructions |
| [**TruthfulQA**](https://arxiv.org/abs/2109.07958) | Truthfulness and factuality | 817 questions |
| [**MMLU**](https://arxiv.org/abs/2009.03300) | Broad knowledge and reasoning | 14,042 questions, 57 subjects |
| [**Chatbot Arena**](https://arena.ai/) | Head-to-head model comparison | 1M+ human votes (crowd-sourced) |

## Recommended Further Reading

- [Hamel Husain's blog: "Your AI Product Needs Evals"](https://hamel.dev/blog/posts/evals/) (practical eval methodology)
- [Eugene Yan's "Patterns for Building LLM-based Systems & Products"](https://eugeneyan.com/writing/llm-patterns/) (eval section)
- [Anthropic's "Challenges in Evaluating AI Systems"](https://www.anthropic.com/research/evaluating-ai-systems) (safety-focused evaluation)
