---
title: Xavi services
summary: "Monorepo of personal services running 24/7 on a Google Cloud free-tier VM: monitors and scrapers that alert over Telegram, plus an AI agent for financial research."
role: Personal project · design, development and operation
stack: [Python, Node, TypeScript, Playwright, twscrape, systemd, Google Cloud]
ai: [Development with agents]
decisions: [One repo, many alerts, Everything ends in Telegram, Free tier and swap]
access: Personal tool, on a private VM (Tailscale)
privateCode: true
order: 6
draft: true
---

## Context

I was following too many sources by hand: forums, tweets from specific accounts, fund-manager
announcements, flat listings, videos. Each source demanded its own checking routine and anything
looked at too late was lost. I wanted the computer to watch them for me and alert me only when
something new actually mattered.

## What it does

- **discord-alerts** and **x-alerts**: forward to Telegram the messages and tweets of the
  accounts I follow, so I read everything from one place.
- **mineras-watch**: watches Azvalor and Cobas press releases (mining thesis) and alerts on
  relevant news.
- **morningstar-scraper** and **rankia-scraper**: extract fund portfolios (with a
  markets.ft.com fallback by ISIN) and forum threads.
- **pisos-watch**: tracks the flats for sale I'm looking at and alerts if a price changes or
  the listing disappears.
- **dexter**: a CLI-based AI agent for financial research, with a WhatsApp gateway.
- Everything runs as systemd services with timers on the same VM.

## Decisions and why

- **One repo, many services**: they all share the same VM, the same deploy path and the same
  way of alerting; a monorepo avoids repeating the infrastructure seven times.
- **Everything ends in Telegram**: that's where I already read; one notification source instead
  of an app per service.
- **Free tier and swap**: the e2-micro VM has only 969 MiB of RAM and died of OOM; a 1 GB swap
  keeps it stable at no cost. Designing around that limit is part of the job.
- **Built with agents, operated with judgment**: every service was built with AI agents, but
  the judgment — what to watch, what alerts and what doesn't, what crosses ToS (Discord selfbot,
  X cookies: passive read-only) — is mine.

## What I'd do differently / next step

- TODO.
