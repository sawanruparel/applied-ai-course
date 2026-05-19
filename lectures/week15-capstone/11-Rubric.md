---
title: "Grading Rubric"
section: Logistics
layout: standard
---

# How You'll Be Scored

| Dimension | Weight | Looks like |
|-----------|-------:|------------|
| Problem clarity | 10% | Defined scope; "could plausibly ship"; not solved by one API call |
| Architectural thinking | 15% | Diagram; explicit choices; trade-offs articulated |
| Engineering quality | 15% | Runs from clean clone; sensible error handling; readable code |
| Evaluation rigor | 20% | Eval set built early; numbers for quality + cost + latency; honest about scope |
| Failure analysis | 15% | Categorized, quantified, fixable-vs-fundamental distinction |
| Demo execution | 10% | Three scenarios; one failure shown; live or seamless recording |
| Writeup quality | 10% | 4–6 pages; diagrams; concrete; reads like an internal design doc |
| Capstone ingredients used | 5% | At least three from the required list (RAG, MCP, multi-agent, ...) |

## What an A looks like

- Runs end-to-end on first try from a clean clone
- Has 50+ evaluation cases with measured quality + cost + latency
- Failure analysis names 3–5 specific failure modes with frequencies
- Demo includes a scenario that doesn't work, explained
- Writeup reads like an engineering design doc, not a school assignment

## What a B looks like

- Runs but with manual setup steps
- Has 10–20 eval cases or vague qualitative eval
- Failure analysis is general (one paragraph, no specific cases)
- Demo is happy-path only
- Writeup describes what was built but not the alternatives considered

## What a C looks like

- Doesn't run end-to-end without instructor intervention
- No eval set
- No failure analysis or it amounts to "the LLM sometimes gets things wrong"
- Demo is screenshots only
- Writeup is a feature list

## Soft expectations not in the rubric

- **Citations.** Don't pretend you invented techniques you didn't. Cite the papers and tools you used
- **Reproducibility.** Pin model versions and library versions. Include seeds where applicable
- **Cost transparency.** Per-task cost belongs in your writeup, even if your numbers are small

## What I will not penalize

- The system being **smaller** than you originally planned. Shipping a tight, well-evaluated subset beats a sprawling, broken whole
- The system using **existing components**. Building on `microsoft/graphrag`, `LangGraph`, an MCP server you didn't write — all fine, as long as you explain why and measure your additions
- The model choice being **a non-flagship**. Sonnet 4.6 + careful eval > Opus 4.7 + vibes

Sources

- See `docs/capstone-rubric.md` for the canonical version (the table here is reproduced from it)
