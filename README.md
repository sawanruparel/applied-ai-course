# UConn GRAD 5900: Applied Generative AI

This repository contains the teaching materials for the University of Connecticut course **GRAD 5900: Applied Generative AI**.

It is the course site and lecture-deck source for the class I teach, not a student coursework repository. The material covers the progression from prompting and retrieval-augmented generation to MCP, multi-agent systems, evaluation, distillation, and safety.

## What is in this repo

- Lecture landing page and week-by-week course navigation
- Slide decks for each lecture module
- Source content for lectures in Markdown
- Utility scripts for slide/content workflows

## Course scope

The course is organized around:

- Foundations and reasoning with modern language models
- Knowledge representation, RAG, and GraphRAG
- MCP and agentic system design
- Evaluation, human-in-the-loop workflows, and memory
- Small models, distillation, and deployment tradeoffs
- Safety, red-teaming, and capstone presentations

## Local development

```bash
npm install
npm run dev
```

Other useful commands:

```bash
npm run build
npm run preview
npm run pptx-to-md
npm run validate-urls
```

## Project structure

- `index.html` contains the main course landing page
- `src/` contains the deck viewer and lecture entry points
- `lectures/` contains lecture content in Markdown
- `scripts/` contains utility scripts for content generation and validation

## Notes

This repo is maintained as an instructor-facing course materials project for UConn Spring 2026.
