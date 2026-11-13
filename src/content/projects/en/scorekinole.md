---
title: Scorekinole
summary: A PWA to score crokinole games and run live tournaments, offline-first and multi-device.
role: Personal project · design, development and operations
stack: [SvelteKit, Svelte 5, TypeScript, Firebase, Cloud Functions, Stripe, Vitest, Playwright]
ai: [WebMCP (agent context), Agentic development]
decisions: [Offline-first, Transactions on every write, e2e against emulators]
links:
  demo: https://scorekinole.es
order: 1
draft: false
---

## Context

Crokinole players and organisers kept scores on paper. They needed a scoreboard that works offline at the
table and keeps a tournament in sync across many devices.

## What it does

- Touch scoreboard with gestures that works **offline** and syncs when the network returns.
- Live tournaments: Swiss system, round robin, brackets, tiebreakers and fair table assignment.
- Player self-registration, push notifications and paid tournaments with Stripe.
- Three languages.

## Decisions and why

- **Offline-first**: in a venue with poor coverage the scoreboard cannot depend on the network.
- **Every tournament write is a transaction**: several tables finish at once and no result can be lost or
  duplicated. There is one documented exception (the countdown), because there the transaction itself caused
  the drift.
- **Tested tournament algorithms** and **e2e against Firebase emulators**: no test ever touches production.
- **WebMCP**: every page documents selectors and rules so an agent can use and test it.

## What I'd do differently / next step

- A read-only **MCP server** to query tournaments and standings from an agent.
