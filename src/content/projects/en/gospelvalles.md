---
title: Gospel Vallès
summary: Public website and management panel for a choir, with role-based permissions, PWA and AI features.
role: Personal project for a choir · design, development and operations
stack: [Astro, TypeScript, Supabase, Postgres (RLS), Edge Functions, pg_cron, Cloudflare Pages, Playwright]
ai: [LLM in production, Agentic development, RAG (design)]
links:
  demo: https://gospelvalles.pages.dev
privateCode: true
order: 2
---

## Context

A choir managed concerts, attendance, repertoire and auditions with spreadsheets and messages.
It needed a public website and a panel for singers, musicians and committees.

## What it does

- Calendar, attendance confirmation, soloists, stage layout, repertoire with a player and personal
  recordings, auditions and an internal inbox.
- **AI vocal coach** (see its case study).
- Step-by-step guides inside the panel, shown only to people who can perform the action.

## Decisions and why

- **Permissions in the database (RLS)**, not only in the UI: each role sees and changes only what it should,
  even if someone tampers with the client.
- **Abuse control in Postgres**: per-action limits and temporary blocking on bursts, with alerts to the team.
- **A single source for the choir's identity**: ready to serve more choirs.
- **Per-role e2e tests** on real data, read-only.

## What I'd do differently / next step

- **"Ask the help"**: a RAG assistant that answers only with the guides that user can use, with per-role
  evals and zero permission leaks.
