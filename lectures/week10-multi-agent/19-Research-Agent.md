---
title: "Example: Research Agent Team"
section: Real-World Implementations
layout: flow
---

# Example: Research Agent Team

## Step 1: Searcher Agent
- **Input:** Research question from user
- **Action:** Breaks question into sub-queries, searches multiple sources
- **Output:** Collection of relevant sources with summaries and URLs
- **Tools:** `web_search`, `arxiv_search`, `read_url`
- **Constraint:** Must find at least 5 sources from 2+ different domains

## Step 2: Analyzer Agent
- **Input:** Collected sources and original research question
- **Action:** Identifies key themes, contradictions, consensus points, and gaps
- **Output:** Structured analysis with claims mapped to supporting sources
- **Tools:** `read_url` (for deep reading of top sources)
- **Constraint:** Every claim must cite at least one source

## Step 3: Writer Agent
- **Input:** Structured analysis + original question
- **Action:** Produces a well-organized research brief with sections, citations, and a summary
- **Output:** Markdown document with executive summary, findings, and source list
- **Tools:** None (pure generation task)
- **Constraint:** Must follow provided outline template

## Step 4: Fact-Checker Agent
- **Input:** Written brief + original sources
- **Action:** Verifies each claim against cited sources, flags unsupported statements
- **Output:** Annotated version with confidence scores and any corrections
- **Tools:** `web_search`, `read_url` (independent verification)
- **Constraint:** Claims not supported by sources must be flagged or removed

---

**Key insight:** The fact-checker works independently from the searcher. It re-verifies claims rather than trusting the searcher's summaries, catching errors that propagated through the pipeline.
