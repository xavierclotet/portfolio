---
title: Scorekinole
summary: PWA para puntuar partidas de crokinole y organizar torneos en directo, offline-first y multidispositivo.
role: Proyecto propio · diseño, desarrollo y operación
stack: [SvelteKit, Svelte 5, TypeScript, Firebase, Cloud Functions, Stripe, Vitest, Playwright]
ai: [WebMCP (contexto para agentes), Desarrollo con agentes]
links:
  demo: https://scorekinole.es
order: 2
---

## Contexto

Jugadores y organizadores de crokinole apuntaban los resultados en papel. Hacía falta un marcador que
funcione sin conexión en una mesa de juego y que sincronice el torneo entre muchos dispositivos.

## Qué hace

- Marcador táctil con gestos, que funciona **sin conexión** y sincroniza al volver la red.
- Torneos en directo: sistema suizo, liguillas, eliminatorias, desempates y asignación equitativa de mesas.
- Inscripción de jugadores, notificaciones push y pago de torneos con Stripe.
- Tres idiomas.

## Decisiones y por qué

- **Offline-first**: en un local con mala cobertura el marcador no puede depender de la red.
- **Todas las escrituras del torneo en transacciones**: varias mesas terminan a la vez y no se puede perder
  ni duplicar un resultado. Hay una excepción documentada (el temporizador), porque ahí la transacción era
  justo la causa del desfase.
- **Algoritmos de torneo con tests** y **e2e contra emuladores** de Firebase: ninguna prueba toca producción.
- **WebMCP**: cada página documenta selectores y reglas para que un agente la pueda usar y probar.

## Qué haría distinto / siguiente paso

- Un **servidor MCP** de solo lectura para consultar torneos y clasificaciones desde un agente.
