---
title: "Braintrust, Promptfoo & Other Platforms"
section: Frameworks & Tools
layout: standard
---

# Braintrust, Promptfoo & Other Platforms

## The Eval Platform Landscape

## Braintrust

- **Focus**: Experiment tracking and scoring for LLM applications
- **Key feature**: Side-by-side comparison of prompt variants with automatic scoring
- **Differentiator**: Strong logging and dataset management, team collaboration
- **Pricing**: Free tier available, paid for teams

```python
import braintrust
experiment = braintrust.init(project="my-rag", experiment="v2-prompt")
for case in eval_dataset:
    output = rag_pipeline(case.question)
    experiment.log(input=case.question, output=output,
                   expected=case.ground_truth,
                   scores={"faithfulness": score})
```

## Promptfoo

- **Focus**: CLI-first eval tool for prompt engineering and red-teaming
- **Key feature**: YAML-based test configuration, model comparison grids
- **Differentiator**: Excellent for comparing multiple models/prompts simultaneously
- **Pricing**: Open-source core, cloud features paid

```yaml
# promptfoo config.yaml
prompts:
  - "Answer based on context: {{context}}\nQ: {{question}}"
  - "You are a helpful assistant. Context: {{context}}\nQ: {{question}}"
providers: [openai:gpt-4o, anthropic:claude-3.5-sonnet]
tests:
  - vars: { question: "What is the refund policy?", context: "..." }
    assert:
      - type: llm-rubric
        value: "Answer accurately describes the refund policy"
```

## Other Notable Tools

| Tool | Best For | Open Source? |
|---|---|---|
| **LangSmith** | LangChain-native tracing + eval | No (cloud) |
| **Weights & Biases Weave** | ML-team-friendly experiment tracking | Partial |
| **Patronus AI** | Enterprise compliance and safety eval | No |
| **Galileo** | Hallucination detection and monitoring | No |
| **OpenAI Evals** | Evaluating OpenAI models specifically | Yes |

## How to Choose

- **Just starting**: RAGAS + DeepEval (free, Python-native, fast to set up)
- **Prompt engineering focus**: Promptfoo (great CLI, model comparison)
- **Production observability**: Phoenix/Arize (tracing + eval in one tool)
- **Team collaboration**: Braintrust or LangSmith (dashboards, sharing)

## Sources

- [Braintrust](https://www.braintrust.dev)
- [Promptfoo GitHub Repository](https://github.com/promptfoo/promptfoo)
- [LangSmith Documentation](https://docs.smith.langchain.com)
- [Weights & Biases Weave](https://github.com/wandb/weave)
- [OpenAI Evals GitHub Repository](https://github.com/openai/evals)
