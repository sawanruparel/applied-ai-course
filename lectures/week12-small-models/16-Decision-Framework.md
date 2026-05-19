---
title: "Decision Framework: When to Go Small"
section: Model Selection
layout: flow
---

# Decision Framework: When to Go Small

```mermaid
flowchart TB
    S1[1. Define quality bar] --> S2[2. Characterize task]
    S2 --> S3[3. Estimate volume]
    S3 --> S4[4. Test smallest viable model]
    S4 --> Pass{Meets bar?}
    Pass -->|No| Up[Step up one tier]
    Up --> S4
    Pass -->|Yes| S5[5. Check deploy constraints]
    S5 --> S6[6. Implement + monitor]
```

## Step 1: Define Your Quality Bar
- What is the minimum acceptable performance?
- Measure with your own eval set, not public benchmarks
- Get stakeholder agreement on the threshold before testing models

## Step 2: Characterize Your Task
- Is it **narrow** (classification, extraction) or **open-ended** (creative writing, analysis)?
- Is the output **structured** (JSON, SQL, labels) or **freeform** (paragraphs, essays)?
- Do you have **labeled training data** (1,000+ examples)?
- Narrow + structured + labeled data = strong signal for small models

## Step 3: Estimate Your Volume
- Under 10K requests/month? Cost matters less — optimize for quality
- 100K–1M requests/month? Model routing starts to pay off
- Over 1M requests/month? Self-hosting becomes economically viable

## Step 4: Test the Smallest Viable Model
- Start with the smallest model in the relevant class
- Run your custom eval suite against it
- If it passes your quality bar, you are done
- If not, move one tier up and repeat

## Step 5: Evaluate Deployment Constraints
- Latency requirement under 100ms? Self-hosted small model required
- Data cannot leave your network? On-premise deployment mandatory
- Need offline capability? Edge/on-device model required
- None of the above? API-served models are simplest

## Step 6: Implement and Monitor
- Deploy with A/B testing against your current model
- Monitor quality metrics continuously
- Set up alerts for quality degradation
- Keep the larger model as a fallback
