---
title: "Key Papers and Benchmarks"
section: Production Strategy
layout: standard
---

# Key Papers and Benchmarks

## Foundational Papers

| Paper / Resource                                    | Year | Key Contribution                              |
|-----------------------------------------------------|:----:|-----------------------------------------------|
| [Llama 3 Herd of Models (Meta)](https://arxiv.org/abs/2407.21783) | 2024 | Open-weight foundation models at scale         |
| [Qwen2.5 Technical Report (Alibaba)](https://arxiv.org/abs/2412.15115) | 2024 | Strong multilingual and code SLMs              |
| [Phi-3 Technical Report (Microsoft)](https://arxiv.org/abs/2404.14219) | 2024 | Textbook-quality data for small models         |
| [Mixtral of Experts (Mistral AI)](https://arxiv.org/abs/2401.04088) | 2024 | Practical MoE for production deployment        |
| [Gemma 2 (Google DeepMind)](https://arxiv.org/abs/2408.00118) | 2024 | Knowledge distillation for on-device models    |
| [Qwen3 Technical Report (Alibaba)](https://arxiv.org/abs/2505.09388) | 2025 | Hybrid thinking, SOTA small model reasoning    |

## Inference and Serving

| Paper / Resource                                    | Year | Key Contribution                              |
|-----------------------------------------------------|:----:|-----------------------------------------------|
| [vLLM: PagedAttention (Kwon et al.)](https://arxiv.org/abs/2309.06180) | 2023 | Efficient KV cache management for serving      |
| [Speculative Decoding (Leviathan et al.)](https://arxiv.org/abs/2211.17192) | 2023 | Use draft models to speed up large models      |
| [GPTQ (Frantar et al.)](https://arxiv.org/abs/2210.17323) | 2023 | One-shot weight quantization to 4-bit          |
| [AWQ: Activation-aware Quantization (Lin et al.)](https://arxiv.org/abs/2306.00978) | 2024 | Preserving salient weights during quantization |
| [RouteLLM (Ong et al.)](https://arxiv.org/abs/2406.18665) | 2024 | Framework for LLM routing strategies           |

## Benchmarks to Know

| Benchmark     | What It Measures           | URL                                |
|---------------|----------------------------|------------------------------------|
| MMLU          | General knowledge          | [arxiv.org/abs/2009.03300](https://arxiv.org/abs/2009.03300) |
| HumanEval     | Code generation            | [arxiv.org/abs/2107.03374](https://arxiv.org/abs/2107.03374) |
| GSM8K         | Grade-school math          | [github.com/openai/grade-school-math](https://github.com/openai/grade-school-math) |
| GPQA          | Graduate-level science     | [github.com/idavidrein/gpqa](https://github.com/idavidrein/gpqa) |
| MT-Bench      | Multi-turn chat quality    | [github.com/lm-sys/FastChat](https://github.com/lm-sys/FastChat) |
| Open LLM LB   | Composite leaderboard      | [huggingface.co/spaces/open-llm-leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) |
| Chatbot Arena | Human preference (Elo)     | [arena.ai](https://arena.ai) |

## Recommended Reading Order

1. [Llama 3 paper](https://arxiv.org/abs/2407.21783) (understand the foundation)
2. [Qwen 2.5](https://arxiv.org/abs/2412.15115) / [Qwen 3](https://arxiv.org/abs/2505.09388) reports (see what small models can do)
3. [vLLM paper](https://arxiv.org/abs/2309.06180) (understand production serving)
4. [RouteLLM paper](https://arxiv.org/abs/2406.18665) (model routing strategies)
5. Run your own benchmarks (the most important step)
