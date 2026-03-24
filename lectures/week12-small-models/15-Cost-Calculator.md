---
title: "Cost Calculator"
section: Model Selection
layout: standard
---

# Cost Calculator: Monthly Spend Across Model Tiers

## Scenario: 10M requests/month, ~500 tokens avg per request (5B tokens/month)

| Model                  | Input $/M | Output $/M | Monthly Cost | Latency (p50) |
|------------------------|:---------:|:----------:|:------------:|:-------------:|
| Claude Opus 4          | $15.00    | $75.00     | **$225,000** | 2,000ms       |
| GPT-4.1                | $2.00     | $8.00      | **$25,000**  | 800ms         |
| Claude Sonnet 4        | $3.00     | $15.00     | **$45,000**  | 1,000ms       |
| GPT-4.1 mini           | $0.40     | $1.60      | **$5,000**   | 300ms         |
| Gemini 2.0 Flash       | $0.10     | $0.40      | **$1,250**   | 200ms         |
| GPT-4.1 nano           | $0.10     | $0.40      | **$1,250**   | 150ms         |
| Self-hosted Qwen 3 8B  | ~$0.05    | ~$0.05     | **$250**     | 50ms          |
| Self-hosted Llama 3.2 3B| ~$0.02   | ~$0.02     | **$100**     | 30ms          |

*Self-hosted costs assume amortized GPU rental (e.g., A100 at ~$1.50/hr handling ~100 req/s).*

## The Hybrid Approach

| Traffic Split                           | Monthly Cost | Avg Quality |
|-----------------------------------------|:------------:|:-----------:|
| 100% Claude Opus 4                      | $225,000     | Excellent   |
| 100% GPT-4.1 nano                      | $1,250       | Good        |
| 70% nano + 20% mini + 10% Opus         | **$25,100**  | Very Good   |
| 80% self-hosted 8B + 15% mini + 5% Opus| **$12,000**  | Very Good   |

## Key Insight

A well-designed routing strategy achieves 90%+ of frontier quality at 5–10% of the cost.
