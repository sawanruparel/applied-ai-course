---
title: "Mental Model: Prompts as Programs"
section: Framing
layout: two-column
---

# Mental Model: Prompts as Programs, Not Requests

## Prompt as Request

```
"Summarize this article for me"
```

- Vague intent, undefined scope
- No output format specified
- No constraints on length or style
- Model uses default behavior
- Results vary across runs
- No error handling
- Hope-based engineering

## Prompt as Program

```
You are a technical editor.

INPUT: {article_text}

TASK: Produce a structured summary.

CONSTRAINTS:
- Max 150 words
- 3 bullet points for key findings
- 1 sentence for methodology
- Output as JSON with keys:
  bullets, methodology, word_count

If the input is not a research article,
return {"error": "not_a_research_article"}
```

- Explicit role and context
- Defined input/output contract
- Measurable constraints
- Error handling built in
- Deterministic structure
- Testable and version-controllable
