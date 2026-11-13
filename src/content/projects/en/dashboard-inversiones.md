---
title: Investment dashboard
summary: "Personal dashboard for my Interactive Brokers account: ingests the Flex statement, aggregates it into parquet files and serves it in a configurable-widget SPA, with an options screener and Telegram alerts."
role: Personal project · design, development and operation
stack: [Python, FastAPI, Pandas, Parquet, Next.js, React, Tailwind, shadcn/ui, ECharts, TanStack Query, yfinance, systemd]
ai: [Development with agents]
decisions: [IBKR is the source of truth, Never discard a good price, Cache that survives restarts, Everything in EUR]
access: Personal tool, on a private VM (Tailscale)
privateCode: true
order: 5
draft: true
---

## Context

My portfolio lives at Interactive Brokers, but the IBKR portal only tells you what it wants to
tell you: P/L is separated from dividends, taxes have to be worked out by hand, and there is no
single view of where I stand. I wanted a tool of my own that read my real data and answered the
questions I actually ask every week.

## What it does

- **Dashboard**: NAV, realized and unrealized P/L, trades, dividends, taxes and cash, with
  configurable widgets (drag/resize and saved layouts).
- **Screener**: technical analysis and an options-strategy suggester, with no setup needed
  (free public sources).
- **Rankings**: my own investment-thesis lists, with trend averages and entry zones.
- **Telegram alerts**: every 30 minutes it checks whether anything enters a buy zone or has
  earnings coming; sync failures alert too.
- A sync every 2 hours on a private VM (GCP e2-micro over Tailscale): downloads the Flex
  statement, merges the parquet files and refreshes prices without me touching anything.

## Decisions and why

- **IBKR is the source of truth**: open positions are inferred from the trade history, but an
  acquisition or a tender leaves no SELL behind, so ghost positions appeared. Everything that
  declares a position open crosses against the official Flex snapshot, which also rules on the
  quantity and the price.
- **Never discard a good price to fetch a new one**: yfinance drops out at times, and if the
  download fails the previous price is served — worth far more than none (without it everything
  is valued at IBKR's close, silently). A freshness badge shows the real age of every price:
  keeping an old price is only honest if you can see it.
- **Cache that survives restarts**: the price cache persists to disk so a deploy doesn't start
  blind.
- **Everything in EUR before calculating**: beta and Sharpe convert every position and the
  benchmark to euros — a US stock gives a European investor dollar exposure, and in local
  currency that part wouldn't show.
- **Three reliability rules on prices**: keep the last good one, persist it, and retry one by
  one whatever the bulk Yahoo download returns incomplete without warning.

## What I'd do differently / next step

- TODO.
