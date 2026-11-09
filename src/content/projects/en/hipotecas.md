---
title: Mortgage and flat comparator
summary: "A personal tool to buy a home with data: the real APR of each offer and price tracking with an explainable score."
role: Personal project · design and development
stack: [Node.js, JavaScript, HTML, CSS]
ai: [Agentic development]
privateCode: true
order: 4
---

## Context

Buying a flat means comparing mortgage offers with different conditions and following listings whose prices
change. Bank and property websites do not make it easy.

## What it does

- Calculates the **real APR** of each offer, including bundled products and the required down payment.
- Checks saved listings, keeps price history and flags price drops.
- Gives each flat an **explainable 1–100 score** broken down by price per m², down payment, space, extras
  and condition.
- Generates self-contained, printable HTML reports.

## Decisions and why

- **Node with zero dependencies**: a personal tool must keep working for years without maintenance.
- **Data a listing does not publish scores 0 and is never guessed**: the score has to be honest to be useful.
- **Compare against the neighbourhood average price**, not against the other flats on the list, which were
  biased.

## Note

The code is private because it contains personal financial data. Screenshots use made-up data.
