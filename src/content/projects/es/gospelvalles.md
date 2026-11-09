---
title: Gospel Vallès
summary: Web pública y panel de gestión de un coro, con permisos por rol, PWA y funciones de IA.
role: Proyecto propio para un coro · diseño, desarrollo y operación
stack: [Astro, TypeScript, Supabase, Postgres (RLS), Edge Functions, pg_cron, Cloudflare Pages, Playwright]
ai: [LLM en producción, Desarrollo con agentes, RAG (diseño)]
links:
  demo: https://gospelvalles.pages.dev
privateCode: true
order: 2
---

## Contexto

Un coro gestionaba conciertos, asistencia, repertorio y castings con hojas de cálculo y mensajes.
Hacía falta una web pública y un panel para cantantes, músicos y comisiones.

## Qué hace

- Agenda, confirmación de asistencia, solistas, disposición en el escenario, repertorio con reproductor
  y grabación propia, castings y buzón interno.
- **Coach vocal con IA** (ver su caso).
- Guías paso a paso dentro del panel, que solo ve quien puede hacer la acción.

## Decisiones y por qué

- **Permisos en la base de datos (RLS)**, no solo en la interfaz: cada rol ve y toca lo que le toca aunque
  alguien manipule el cliente.
- **Control de abuso en Postgres**: límites por acción y bloqueo temporal ante ráfagas, con avisos al equipo.
- **Una sola fuente para la identidad del coro**: preparado para servir a más coros.
- **Pruebas e2e por rol** con datos reales y solo lectura.

## Qué haría distinto / siguiente paso

- **«Pregunta a la ayuda»**: asistente con RAG que responde solo con las guías que ese usuario puede usar,
  con evals por rol y cero fugas de permisos.
