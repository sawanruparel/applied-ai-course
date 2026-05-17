# Slide Master Spec

## Purpose

This spec defines a standard slide-master system for the Applied AI course decks so they read like a polished executive presentation rather than a loose collection of markdown pages.

The goal is not to imitate any one firm's branding. The goal is to borrow the reusable presentation discipline visible in public consulting artifacts:

- assertion-led headlines
- strict page grammar
- limited master types
- light visual chrome
- evidence-forward charts and tables
- consistent source and footer hygiene

## Research Basis

This spec is based on:

- a scan of this repo's existing slide patterns and layouts
- public BCG slide-style PDFs and executive presentation artifacts
- public Bain and McKinsey infographic/report pages
- Barbara Minto's Pyramid Principle site for narrative structure

Important note: the rules below are partly an inference from public artifacts, not a claim that BCG, Bain, or McKinsey publish this exact internal template.

References:

- BCG Investor Perspectives Series Q2 2024 slideshow: https://web-assets.bcg.com/f7/d0/d39487754f9dbece8d1a1c2a0e0e/investor-perspectives-series-q2-2024-slideshow-july-2024-download.pdf
- BCG Executive Perspectives, Guide to Cost and Growth 2025: https://web-assets.bcg.com/a7/8a/e7d5ec5f4f1d849f4e5391d4711b/bcg-executive-perspectives-bcgs-guide-to-cost-and-growth-2025-15jan2025.pdf
- Bain infographic page: https://www.bain.com/insights/digital-transformations-six-actions-that-lead-to-success-infographic/
- McKinsey infographic page: https://www.mckinsey.com/industries/life-sciences/our-insights/infographic-building-the-european-biotech-sector-with-world-class-science-and-innovation
- Barbara Minto, Pyramid Principle concept: https://barbaraminto.com/concept.html

## Repo Scan Summary

The current repo already has a strong markdown authoring pattern, but the visual system is too broad and too web-like.

Observed layout usage:

- `standard`: 231
- `diagram`: 66
- `cards`: 53
- `center`: 42
- `two-column`: 30
- `flow`: 27

Observed recurring deck beats:

- `Intro`: 15
- `Takeaways`: 14
- `Closing`: 14
- `Research`: 11

Observed content patterns:

- bullets dominate
- tables are frequent
- process and architecture slides recur often
- research and source-heavy slides recur often

Conclusion: the course does not need more visual freedom. It needs fewer, clearer masters.

## Core Design Principles

1. One slide, one claim.
2. The headline states the conclusion, not the topic.
3. Every slide should be scannable in under 5 seconds.
4. Slides are exhibits, not transcripts.
5. Data and diagrams must earn their space.
6. Decorative treatments should be minimal and repeatable.
7. Sources, caveats, and dates belong in a standard footer zone.

## Master Deck Structure

Every lecture deck should be able to be assembled from this sequence:

1. Cover
2. Executive Summary or Agenda
3. Section Divider
4. Content Exhibits
5. Synthesis or Takeaways
6. References or Research
7. Closing or Q&A

Not every deck needs every section, but every deck should use the same masters when those sections appear.

## Global Slide Rules

### Canvas

- Aspect ratio: 16:9
- Use a presentation canvas, not an app shell
- In presentation mode, the slide itself is the product; side rails and persistent app chrome should disappear
- Max content width should feel editorial, not edge-to-edge

### Grid

- Use a 12-column underlying grid
- Outer margin: generous and fixed
- Vertical rhythm: fixed spacing scale
- Left-align almost everything

### Typography

- One display family and one text family at most
- Headline style must be large, quiet, and confident
- Body copy should rarely exceed 3 sizes across the entire system
- Avoid all-caps except for tiny labels
- Avoid dense paragraph blocks unless on reference slides

### Color

- Default to light backgrounds for teaching and executive readability
- Reserve accent color for emphasis, not decoration
- One primary accent and one supporting neutral palette is enough
- Avoid gradients, glassmorphism, and heavy glowing surfaces in the main master

### Footer System

Every non-cover slide should have a footer rail with:

- source
- note or caveat, if needed
- deck name or course name
- page number

This is one of the clearest signals of executive-deck polish.

### Labels

Optional micro-labels may be used above the headline:

- section name
- exhibit number
- topic family

These should be small, muted, and consistent.

## Writing Rules

### Headline Rules

- Headlines should be assertion-first
- Prefer full-sentence or near-sentence titles
- Avoid vague topical titles like "Model Comparison" when the actual point is "There is no single best model; choice depends on cost, speed, and context"

Good:

- "Long-context models reduce retrieval pressure but do not remove the need for structure"
- "Most eval failures come from weak rubrics, not weak judges"

Weak:

- "Long Context"
- "Evaluation"
- "RAGAS"

### Body Rules

- Maximum 3 to 5 bullets on a standard content slide
- Each bullet should be one line when possible
- Use bolding sparingly to guide scanning
- Prefer grouped evidence over exhaustive lists

### Source Rules

- Include source lines on charts, tables, and research-heavy slides
- Include dates when facts are time-sensitive
- Put methodology caveats in note style, not in the headline area

## Standard Slide Masters

The system should standardize on 12 masters.

### 1. Cover

Purpose:

- open a lecture or a major guest session

Contains:

- course name
- lecture title
- optional subtitle
- optional lecturer and date

Rules:

- minimal body text
- strong title block
- no footer clutter

### 2. Executive Summary

Purpose:

- answer "what should the audience leave believing?"

Contains:

- one synthesis headline
- 3 key takeaways max
- optional recommendation or framing sentence

Rules:

- use early in the deck
- should work as a standalone screenshot

### 3. Agenda or Roadmap

Purpose:

- show the structure of the talk

Contains:

- 4 to 6 sections
- optional timing

Rules:

- visually simple
- current section can be highlighted when repeated later

### 4. Section Divider

Purpose:

- reset the room and signal a topic shift

Contains:

- section name
- short framing sentence optional

Rules:

- sparse
- visually distinct from content slides

### 5. Insight Exhibit

Purpose:

- default slide for a single idea with supporting explanation

Contains:

- assertion headline
- 2 to 5 support bullets or a short paragraph plus bullets
- optional kicker or implication line

Rules:

- this replaces most current `standard` slides
- never let this become a wall of text

### 6. Compare or Tradeoff

Purpose:

- compare two options, approaches, or states

Contains:

- assertion headline
- two balanced columns
- optional recommendation row at bottom

Rules:

- use for "A vs B", "before vs after", "open vs closed", and "tool X vs tool Y"

### 7. Cards or Framework

Purpose:

- present categories, taxonomies, anti-patterns, or grouped ideas

Contains:

- 3 to 6 cards
- each card with a short label and 1 to 3 lines

Rules:

- equal-height cards
- consistent card count across similar slides when possible

### 8. Process Flow

Purpose:

- explain sequences, pipelines, or stages

Contains:

- 3 to 6 ordered steps
- optional input and output labels
- optional failure or decision notes

Rules:

- left-to-right or top-to-bottom, not both
- each step should read as a verb phrase or noun phrase, not a paragraph

### 9. Architecture Diagram

Purpose:

- show systems, components, and interfaces

Contains:

- diagram-first canvas
- compact annotation zone
- bottom takeaway line

Rules:

- one system story per slide
- avoid mixing architecture, process, and comparison into one page

### 10. Data Table or Scorecard

Purpose:

- show structured comparisons, benchmarks, or decision matrices

Contains:

- assertion headline
- styled table
- optional highlight column or row
- note and source footer

Rules:

- tables should emphasize one answer, not merely dump values
- use visual highlighting to show the row, column, or threshold that matters

### 11. Research or References

Purpose:

- consolidate reading, papers, benchmarks, and citations

Contains:

- grouped references
- optional "why this matters" note

Rules:

- should look intentional, not like an appendix accident
- use smaller text than normal content slides, but keep clean spacing

### 12. Closing or Q&A

Purpose:

- end the lecture cleanly

Contains:

- closing message, next step, or discussion prompt
- optional thank-you or office-hours note

Rules:

- sparse
- no dense content

## Optional Specialist Masters

These are not core, but are justified by this repo's content patterns.

### Timeline

Use for historical progression, model evolution, or capability maturity.

### Case Walkthrough

Use for example-driven slides with:

- prompt or situation
- system behavior
- result
- lesson

### Metric Dashboard

Use for evaluation results, cost summaries, or benchmark snapshots.

### Quote or Stat Punch

Use for one strong number or one short quote with interpretation.

## Mapping From Current Layouts

Recommended mapping from the current front matter:

- `center` -> `cover` or `section-divider`
- `standard` -> `insight-exhibit`, `data-table`, or `research`
- `cards` -> `cards-framework`
- `diagram` -> `architecture-diagram`
- `flow` -> `process-flow`
- `two-column` -> `compare-tradeoff`

This is important: the current `standard` layout is overloaded. It should be split into at least three masters.

## Chart Standards

Charts should follow these rules:

- headline states the takeaway
- one focal data story per chart
- remove nonessential gridlines, borders, and legends where possible
- direct-label key series when possible
- highlight one series or bar; mute the rest
- notes and sources live in the footer zone

Avoid:

- rainbow categorical palettes
- tiny legends far from the data
- more than one accent color unless there is a real semantic need

## Table Standards

Tables should follow these rules:

- maximum 6 to 8 columns before redesign
- use alignment by data type
- highlight one important row, column, or cell group
- keep footnotes outside the grid
- use consistent decimal, currency, and percentage formatting

## Diagram Standards

Diagrams should follow these rules:

- every box needs a role
- line styles must mean something if they vary
- arrows imply direction and should be used intentionally
- group related items into clear containers
- annotate the main takeaway outside the diagram if needed

## Markdown Authoring Standard

Proposed front matter fields:

```yaml
title: "Assertion-led headline"
section: "Optional section"
layout: "cover | executive-summary | agenda | section-divider | insight-exhibit | compare-tradeoff | cards-framework | process-flow | architecture-diagram | data-table | research | closing"
eyebrow: "Optional exhibit label"
sources:
  - "Optional source 1"
  - "Optional source 2"
notes: "Optional caveat"
```

Authoring rules:

- every slide must declare a layout
- every time-sensitive slide should declare sources or notes
- title should be rewritten as the conclusion whenever possible

## Master Theme Requirements

The theme implementation should provide:

- a presentation-only mode without side rail chrome
- a consistent header zone
- a reusable footer component
- page numbering
- source and note styling
- table styling
- chart styling hooks
- divider styling
- appendix and references styling

## What To Remove From The Current Look

- persistent dashboard-like shell around the slide
- heavy dark-mode default for all decks
- overly rounded panel feel
- decorative gradients as a primary identity device
- inconsistent treatment of tables versus body slides

## What To Preserve

- markdown-first authoring
- lightweight layout switching via front matter
- support for diagram and process slides
- responsive behavior for local browsing

## Implementation Priority

If this is implemented in phases:

Phase 1:

- cover
- section-divider
- insight-exhibit
- compare-tradeoff
- cards-framework
- process-flow
- architecture-diagram
- data-table
- research
- closing
- shared footer

Phase 2:

- executive-summary
- agenda
- timeline
- case-walkthrough
- metric-dashboard

## Acceptance Criteria

The master system is successful when:

- any lecture can be rebuilt using only the approved masters
- slide titles read like conclusions, not topics
- all source-heavy slides share the same footer treatment
- table slides no longer look like generic markdown tables
- the deck feels like one presentation system, not a styled document viewer
