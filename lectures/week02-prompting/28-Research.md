---
title: "Key Papers"
section: Practical Workshop
layout: standard
---

# Key Papers and Resources

| Paper | Year | Key Contribution |
|-------|------|-----------------|
| [Wei et al. — Chain-of-Thought Prompting Elicits Reasoning in LLMs](https://arxiv.org/abs/2201.11903) | 2022 | Demonstrated that few-shot CoT dramatically improves arithmetic, commonsense, and symbolic reasoning |
| [Kojima et al. — Large Language Models are Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916) | 2022 | "Let's think step by step" — zero-shot CoT without hand-crafted examples |
| [Wang et al. — Self-Consistency Improves CoT Reasoning](https://arxiv.org/abs/2203.11171) | 2022 | Sample multiple reasoning paths at temperature > 0, take majority vote |
| [Yao et al. — Tree of Thoughts: Deliberate Problem Solving with LLMs](https://arxiv.org/abs/2305.10601) | 2023 | Generalize CoT to a tree with branching, evaluation, and backtracking |
| [Yao et al. — ReAct: Synergizing Reasoning and Acting in LLMs](https://arxiv.org/abs/2210.03629) | 2022 | Interleave reasoning traces with tool-use actions for grounded problem solving |
| [Yasunaga et al. — Large Language Models as Analogical Reasoners](https://arxiv.org/abs/2310.01714) | 2023 | Self-generated relevant examples via analogical recall from training |
| [Zhou et al. — Large Language Models Are Human-Level Prompt Engineers](https://arxiv.org/abs/2211.01910) | 2022 | APE: automatic prompt generation and selection via LLM search |
| [Zhang et al. — Automatic Chain of Thought Prompting in LLMs](https://arxiv.org/abs/2210.03493) | 2022 | Auto-CoT: cluster questions, generate diverse chains automatically |
| [Turpin et al. — Language Models Don't Always Say What They Think](https://arxiv.org/abs/2305.04388) | 2023 | Faithfulness concerns: CoT chains can be post-hoc rationalizations |
| [Khattab et al. — DSPy: Compiling Declarative Language Model Calls](https://arxiv.org/abs/2310.03714) | 2023 | Programmatic framework for optimizing LLM pipelines and prompts |

## Suggested Reading Order

1. **Wei et al. (CoT)** — foundational technique
2. **Yao et al. (ReAct)** — extends CoT to tool use
3. **Wang et al. (Self-Consistency)** — practical reliability improvement
4. **Turpin et al. (Faithfulness)** — critical perspective on CoT limitations
5. Then explore based on your application domain
