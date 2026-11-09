---
title: AI vocal coach
summary: An LLM that listens to a singer's recording and gives useful feedback, with cost and quality under control.
role: End-to-end design and development · in production (beta) inside Gospel Vallès
stack: [TypeScript, Supabase Edge Functions, OpenRouter, Gemini, Postgres]
ai: [Multimodal LLM (audio), Structured output, Cost control, Model selection]
privateCode: true
featured: true
order: 1
---

## Context

Choir singers practise alone at home with each song's tracks and can record themselves over them.
They need to know what to improve without waiting for the next rehearsal.

## What it does

- Sends the take (and, when available, the mix that was playing) to a **model that listens to audio**.
- Returns feedback per aspect (pitch, rhythm, diction…) with a score and concrete phrases.
- Lets singers **ask follow-up questions** using a cheaper text model; when it needs to listen again, it
  hands over to the audio model.

## Decisions and why

- **OpenRouter** instead of a single vendor: switching models is configuration, not code.
- **Models toggled from the admin panel** with an estimated cost per take: chosen with data, not by gut.
- **JSON mode + tolerant parsing**: the UI never depends on free text, and unreadable answers are logged
  with the reason.
- **Every call is logged** (model, real cost, duration, error) with **limits and a monthly budget**: an AI
  feature without spend control does not belong in production.
- **Own deadline** below the platform limit, so no call is ever lost without being logged.

## What I'd do differently / next step

- **Evals**: reference recordings to compare models on quality, cost and latency, and to catch regressions
  when the prompt changes.
