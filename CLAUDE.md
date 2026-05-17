# Repo conventions

This is the source for the **Applied AI Course** site (taught at UConn, GRAD 5900). It's a Vite + TypeScript app where each lecture is a separately bundled deck driven by markdown slides.

## Architecture

- `index.html` — landing page with the week-by-week schedule
- `weekNN-topic.html` — thin shells; each loads a single `src/main-weekNN-topic.ts`
- `src/main-weekNN-topic.ts` — entry point: imports a `slides.json` manifest and the markdown files for that week, hands them to the shared viewer
- `src/viewer.ts` — the single deck-rendering engine (markdown parser, keyboard nav, theme toggle, rail, etc.)
- `src/config/course.ts` — **single source of truth** for course title, term, institution. Change these here, not inline in HTML/JS.
- `lectures/weekNN-topic/` — slide source. Each numbered `.md` is one slide, plus `slides.json` listing them in display order.
- `vite.config.ts` — registers every `weekNN-topic.html` as a build input

## Slide markdown format

Each slide is a markdown file with YAML-ish frontmatter:

```
---
title: Slide Title
section: Lecture
layout: standard
---

# Heading

Body content using a constrained markdown subset: h1, ##-section (becomes a card), paragraphs, lists, ordered lists, blockquotes, tables, fenced code blocks.
```

Layouts: `standard` (default), `center`, `two-column`, `cards`. See `docs/slide-master-spec.md` for the visual reference.

## Adding a new lecture (week NN, topic foo)

1. Create `lectures/weekNN-foo/` with numbered `NN-Title.md` slide files
2. Create `lectures/weekNN-foo/slides.json` with `{ file, label }` entries (paths are repo-rooted, e.g. `lectures/weekNN-foo/00-Intro.md`)
3. Copy an existing `src/main-weekXX-*.ts` to `src/main-weekNN-foo.ts` and update the two `lectures/weekNN-foo` path references and the deck/rail titles
4. Create `weekNN-foo.html` at the repo root (copy an existing one and update the title + script src)
5. Register `weekNN-foo` in `vite.config.ts` under `rollupOptions.input`
6. Add a lecture card to `index.html` linking `/weekNN-foo.html`

## Branding rule

Course title, term, and institution live in `src/config/course.ts`. The viewer eyebrow reads from there. Page titles in HTML and lecture markdown intros may repeat the title text, but the config is the canonical reference — keep them aligned when something changes.

## Scripts

- `npm run dev` — Vite dev server on `:4173`
- `npm run build` — `tsc --noEmit` then `vite build`
- `npm run typecheck` / `lint` / `format` / `format:check` — quality gates (run in CI)
- `npm run pptx-to-md -- path/to/deck.pptx lectures/weekNN-foo` — convert a PowerPoint deck to per-slide markdown
- `npm run validate-urls` — Playwright-driven check of outbound links in lecture markdown
- `npm run course:refresh` — weekly research-refresh suggestion script (see `scripts/course-refresh.ts`)

## CI

`.github/workflows/ci.yml` runs typecheck → lint → format:check → build on push/PR to main. Keep all four green.

## What not to do

- Don't hardcode "UConn", "GRAD 5900", or "Spring 2026" in lecture markdown or HTML — reference the config or omit. The repo is positioned as a general "Applied AI Course"; UConn is mentioned in the README and the landing-page eyebrow only.
- Don't add lecture cards to `index.html` for weeks that don't exist yet — the cards are the source of truth for what's published.
- Don't rename `lectures/weekNN-topic/` without also updating `src/main-weekNN-topic.ts`, the matching `slides.json` paths inside it, the `.html` shell, and `vite.config.ts`.
