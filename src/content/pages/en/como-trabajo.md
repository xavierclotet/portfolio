---
title: How I work with AI
summary: Per-repo rules, my own and other people's skills, and verification before anything counts as done.
---

I use agents every day to code, review and test. What makes the difference is not the model but the context
I give them and how I check what they do.

## The rules live in the repo

- Every repo has an **`AGENTS.md`** with what an agent needs to know: architecture, conventions, what it must
  not touch and how to verify. It is the single source; `CLAUDE.md` only points to it.
- Rules are concrete and checkable: "every tournament write is a transaction", "a guide is only shown to
  people who can perform the action", "never push unless asked".
- When a visual rule can be checked, it becomes a test (text levels, type scale…), so it does not depend on
  the agent remembering it.

## The same tools in every harness

I work with **Claude Code**, **GitHub Copilot CLI** and **opencode**. Skills live once in the repo
(`.agents/skills`) and are exposed to each harness through links, so there are no copies drifting apart.

## Skills I use

- **[impeccable](https://impeccable.style)** (Paul Bakaus): UI design judgement and an anti-pattern detector
  I run before calling a screen done.
- **grilling** (Matt Pocock): questions me in rounds before a big feature, until no decision is left open.
  This site's positioning came out of it.
- **Thermo-Nuclear Code Quality Review** (Cursor): a very demanding structural review before a refactor.
- **supabase-postgres-best-practices** (Supabase): indexes, RLS and migrations.

## Skills I wrote

- **Per-role, read-only e2e**: opens the panel with a real session as a singer, section leader or admin and
  takes mobile screenshots, without being able to write to production.
- **Fixing errors from the log**: reads new errors logged by the app, finds the cause and proposes the fix.
- **Help guides**: creates a step-by-step guide in the panel with permissions aligned with the database.
- **Release**: version, changelog and deploy in one step.

## Verify before anything counts as done

- Unit tests and **e2e** (Playwright, against emulators or read-only) that the agent runs itself.
- **Hooks** that run the design detector after every edit.
- The agent **never commits or pushes** unless I ask, and I review the diff.
