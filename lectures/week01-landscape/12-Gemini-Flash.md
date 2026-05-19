---
title: "Google's Approach: Gemini"
section: The Models
layout: standard
---

# Google's Approach: Gemini 2.0

### Gemini 2.0 Flash Thinking
- Google's answer to reasoning models
- "Thinking" mode that shows reasoning process
- Optimized for speed: reasoning at Flash-tier latency
- Strong on math and science benchmarks

### Long context as an alternative strategy
- Gemini 1.5 Pro: 1M token context window (later 2M)
- Gemini 2.0: maintained long context with improved quality
- **Key insight:** long context can replace RAG for many use cases
- Stuff the entire codebase/document set into context instead of retrieval

### Gemini 3.1 Pro (February 2026)
- **Leads GPQA Diamond at 94.3%** -- the strongest score on PhD-level science reasoning
- The **only natively multimodal frontier model** spanning text, image, audio, and video in one model
- Pairs frontier reasoning with Gemini's large-context heritage (1M+ tokens)

### Multimodal native
- Trained natively on text, images, audio, and video
- Video understanding: process hours of footage directly
- Strong on visual reasoning tasks (charts, diagrams, screenshots)

### Practical considerations:
- Competitive API pricing, especially Flash tier
- Deep integration with Google Cloud, Vertex AI
- Grounding with Google Search built in
- NotebookLM: showcase of long-context + multimodal

## Sources

- [Our Next-Generation Model: Gemini 1.5 (Google, Feb 2024)](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/)
- [Introducing Gemini 2.0 (Google, Dec 2024)](https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/)
- [GPT-5.5 Review: Gemini 3.1 Pro Multimodal Comparison (MindStudio, 2026)](https://www.mindstudio.ai/blog/gpt-5-5-review-developers-builders)
- [Google NotebookLM](https://notebooklm.google/)
- [Google AI Gemini API Pricing](https://ai.google.dev/gemini-api/docs/pricing)
