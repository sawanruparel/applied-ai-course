---
title: "Deployment Patterns"
section: Production Concerns
layout: cards
---

# Deployment Patterns

## Serverless (AWS Lambda, Cloud Functions, Vercel)

- **Pros**: Zero ops, auto-scaling, pay per invocation
- **Cons**: Cold starts (1-3s), 15-min timeout limits, no persistent connections
- **Best for**: Simple chain patterns, low-traffic apps, webhook handlers
- **Watch out**: LLM calls can take 30s+ — Lambda's timeout can bite you
- **Stack**: API Gateway + Lambda + DynamoDB for state

## Containers (Docker + ECS/Cloud Run/K8s)

- **Pros**: Full control, long-running connections, persistent state
- **Cons**: You manage scaling, more ops overhead
- **Best for**: Agent loops, streaming responses, multi-turn chat
- **Stack**: FastAPI in Docker, deployed to Cloud Run or ECS
- **Recommended for most production AI apps**

## Edge Deployment (Cloudflare Workers, Vercel Edge)

- **Pros**: Low latency globally, cheap at scale
- **Cons**: Limited runtime (no Python natively), small memory limits
- **Best for**: Routing layer, caching proxy in front of LLM APIs
- **Pattern**: Edge function for auth/cache/routing, origin server for LLM calls

## Self-Hosted Models (vLLM, TGI, Ollama)

- **Pros**: No per-token cost, data stays on your infra, full control
- **Cons**: GPU costs ($2-8/hr per A100), ops complexity, model updates are manual
- **Best for**: High-volume apps where API costs exceed GPU costs, strict data residency
- **Break-even**: Roughly 10M+ tokens/day before self-hosting is cheaper
- **Stack**: vLLM on NVIDIA GPUs, behind a load balancer

---

**Starting recommendation**: FastAPI in a Docker container on Cloud Run. Add complexity only when you outgrow it.

## Sources

- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [vLLM — High-Throughput LLM Serving (GitHub)](https://github.com/vllm-project/vllm)
- [Hugging Face Text Generation Inference (GitHub)](https://github.com/huggingface/text-generation-inference)
- [Ollama](https://ollama.com)
- [Google Cloud Run Documentation](https://cloud.google.com/run/docs)
- [Vercel AI SDK](https://sdk.vercel.ai)
