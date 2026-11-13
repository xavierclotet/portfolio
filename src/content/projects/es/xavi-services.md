---
title: Xavi services
summary: "Monorepo de servicios personales que corren 24/7 en una VM de Google Cloud free tier: monitores y scrapers que avisan por Telegram, y un agente de IA para investigación financiera."
role: Proyecto propio · diseño, desarrollo y operación
stack: [Python, Node, TypeScript, Playwright, twscrape, systemd, Google Cloud]
ai: [Desarrollo con agentes]
decisions: [Un repo, muchas alertas, Todo acaba en Telegram, Free tier y swap]
access: Herramienta personal, en una VM privada (Tailscale)
privateCode: true
order: 6
draft: true
---

## Contexto

Seguía demasiadas fuentes a mano: foros, tuits de cuentas concretas, comunicados de gestoras,
anuncios de pisos, vídeos. Cada fuente distinta pedía su propia comprobación y las que se
miraban tarde se perdían. Quería que el ordenador las vigilara por mí y me avisara solo cuando
hubiera algo nuevo que me importara.

## Qué hace

- **discord-alerts** y **x-alerts**: reenvían a Telegram los mensajes y tuits de las cuentas
  que sigo, para leerlo todo desde un solo sitio.
- **mineras-watch**: vigila los comunicados de Azvalor y Cobas (tesis minera) y avisa de las
  noticias relevantes.
- **morningstar-scraper** y **rankia-scraper**: extraen carteras de fondos (con fallback a
  markets.ft.com por ISIN) y hilos de foro.
- **pisos-watch**: sigue los pisos en venta que miro y avisa si cambia un precio o desaparece
  el anuncio.
- **dexter**: agente de IA por CLI para investigación financiera, con pasarela por WhatsApp.
- Todo corre como servicios systemd con timers en la misma VM.

## Decisiones y por qué

- **Un repo, muchos servicios**: todos comparten la misma VM, la misma forma de desplegar y el
  mismo modo de avisar; un monorepo evita repetir la infraestructura siete veces.
- **Todo acaba en Telegram**: es donde ya leo; una fuente de notificación en vez de una app por
  servicio.
- **Free tier y swap**: la VM e2-micro solo tiene 969 MiB de RAM y se colgó por OOM; un swap de
  1 GB la mantiene estable sin coste. Gestionar esa limitación es parte del diseño.
- **Hecho con agentes, operado con criterio**: cada servicio se construyó con agentes de IA,
  pero el criterio — qué vigilar, qué avisa y qué no, qué es contra los ToS (selfbot de Discord,
  cookies de X: solo lectura pasiva) — lo pongo yo.

## Qué haría distinto / siguiente paso

- TODO.
