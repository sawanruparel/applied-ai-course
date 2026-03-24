---
title: "Presenting Evaluation Results"
section: Presentation Framework
layout: standard
---

# Presenting Evaluation Results

### Metrics That Matter
- Task completion rate — does the system actually solve the problem?
- Accuracy / correctness — measured against ground truth or expert review
- Latency and cost per request — can this scale? (Week 12: efficiency)
- User satisfaction — if you ran a pilot, what did users say?

### Baselines Are Essential
- Compare against: manual process, simple heuristic, single-LLM-call approach
- Use the evaluation frameworks from Week 7: LLM-as-a-Judge, rubric-based scoring
- Show improvement quantitatively — percentages, time saved, error reduction

### Honest Reporting
- Where does the system fail? What types of inputs cause problems?
- What is the error distribution? Random failures vs. systematic gaps?
- Include confidence intervals or variance if you ran multiple trials

### Visualization
- Tables for precise numbers, charts for trends
- Before/after comparisons are powerful
- Show individual examples: best case, typical case, worst case

---

**Strong evaluation separates a research project from a class demo. This is where rigor shows.**
