---
title: "Demo Best Practices"
section: Logistics
layout: standard
---

# Showing the System Off

15 minutes is tight. The goal is to show what the system *does* well and to confront honestly where it fails.

## A working structure

| Time | Section | What |
|------|---------|------|
| 0:00 – 1:00 | Setup | One slide: who you are, what the problem is, why it's worth solving |
| 1:00 – 3:00 | Architecture | One diagram. Walk through the data path |
| 3:00 – 9:00 | Demo | **Live or recorded run** of three scenarios (more on this) |
| 9:00 – 12:00 | Evaluation | Your numbers. Where it works, where it doesn't |
| 12:00 – 14:00 | Failure analysis | The hard cases. What you'd fix |
| 14:00 – 15:00 | Q&A primer | Two things you anticipate being asked |

## Show three scenarios, not one

- **The happy path** — proves it works at all
- **A non-trivial case** — shows it goes beyond the demo script
- **A failure case you didn't fix** — shows you understand the limits

Skipping the third is the most common scoring miss. Showing it builds credibility.

## Live vs recorded demo

Live: more impressive, riskier. Practice it three times before class.
Recorded: safer, less impressive. Cut judiciously — never edit out failures, only edit out latency

Most past capstones used a recorded demo with live narration. That's a defensible default.

## What kills demos

- Live coding during the presentation (don't)
- Reading the system prompt out loud (the audience doesn't care; show the *behavior*)
- Spending 8 minutes on architecture and 5 on the demo (inverse the proportion)
- Live API keys on screen
- Forgetting to `unset HISTFILE` before screen sharing your terminal

## A small detail that matters

Have a backup. If the live demo fails, you should have a 30-second recorded clip of *the same scenario working* that you can switch to without breaking flow. Past students have lost 3+ points to "my network died during the demo."

Sources

- See `docs/capstone-demo-examples/` in the course repo for past recordings
