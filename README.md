# Applied AI Course

A graduate-level course on applied AI systems — prompting, retrieval, MCP, multi-agent design, evaluation, distillation, and safety. Taught at the **University of Connecticut** (GRAD 5900, Spring 2026).

This repository is the course site and source for the lecture decks. It is maintained by the instructor; it is not a student coursework repository.

## What's in this repo

- `index.html` — course landing page with the week-by-week schedule
- `lectures/` — slide content in Markdown (one directory per week, plus a `slides.json` manifest)
- `src/` — TypeScript deck viewer and per-lecture entry points
- `src/config/course.ts` — single source of truth for course title, term, and institution
- `scripts/` — utilities (PPTX→Markdown conversion, link validation)
- `docs/` — design specs and reference material

## Course outline

1. **Foundations & Reasoning** — model landscape, prompting, dev stack, knowledge representation
2. **Knowledge Augmentation** — RAG 2.0, GraphRAG, evaluation
3. **Agentic Systems & MCP** — Model Context Protocol, MCP servers, multi-agent workflows, human-in-the-loop
4. **Efficiency & Governance** — small models, distillation, safety and red-teaming
5. **Capstone** — final showcase

## Local development

```bash
npm install
npm run dev          # serves the site at http://localhost:4173
npm run build        # type-check + production build
npm run preview      # serve the built site
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
npm run format       # prettier --write
npm run format:check # prettier --check
```

Content utilities:

```bash
npm run pptx-to-md    # convert PowerPoint decks to Markdown slides
npm run validate-urls # check all outbound links in lecture markdown
```

## Adding a new lecture

1. Add `lectures/weekNN-topic/` with numbered markdown slide files and a `slides.json` manifest
2. Add `src/main-weekNN-topic.ts` (copy an existing entry as a template)
3. Add `weekNN-topic.html` at the repo root
4. Register the new entry in `vite.config.ts` and add a card to `index.html`

See `CLAUDE.md` for repo conventions.

## License

Course materials © Sawan Ruparel. Lecture content may not be redistributed without permission.
