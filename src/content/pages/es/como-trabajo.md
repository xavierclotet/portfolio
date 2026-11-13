---
title: Cómo trabajo con IA
summary: Reglas por repo, skills propias y de otros, y verificación antes de dar nada por bueno.
---

Uso agentes a diario para programar, revisar y probar. Lo que marca la diferencia no es el modelo, sino
el contexto que les doy y cómo compruebo lo que hacen.

## Las reglas, en el repo

- Cada repo tiene un **`AGENTS.md`** con lo que un agente necesita saber: arquitectura, convenciones,
  qué no debe tocar y cómo verificar. Es la fuente única; el `CLAUDE.md` solo apunta a él.
- Las reglas son concretas y comprobables: «todas las escrituras del torneo van en una transacción», «una
  guía solo sale a quien puede hacer la acción», «nunca un push sin que lo pida».
- Cuando una regla visual se puede comprobar, se convierte en test (niveles de texto, escala tipográfica…),
  para no depender de que el agente la recuerde.

## Las mismas herramientas en todos los agentes

Trabajo con **Claude Code**, **GitHub Copilot CLI** y **opencode**. Las skills viven una sola vez en el repo
(`.agents/skills`) y se exponen a cada herramienta de agentes (el programa que ejecuta el agente) con enlaces, así no hay copias que se desincronicen.

## Skills que uso

- **[impeccable](https://impeccable.style)** (Paul Bakaus): criterio de diseño de UI y un detector de
  anti-patrones que paso antes de dar una pantalla por acabada.
- **grilling** (Matt Pocock): me interroga por rondas antes de una feature grande, hasta que no queda
  ninguna decisión sin tomar. El posicionamiento de esta web salió así.
- **Thermo-Nuclear Code Quality Review** (Cursor): revisión de estructura muy exigente antes de un refactor.
- **supabase-postgres-best-practices** (Supabase): índices, RLS y migraciones.

## Skills que he escrito

- **e2e por rol, solo lectura**: abre el panel con una sesión real como cantante, jefe de cuerda o
  administrador y hace capturas en móvil, sin poder escribir en producción.
- **Arreglar errores desde el registro**: lee los errores nuevos que registra la aplicación, encuentra la
  causa y propone el arreglo.
- **Guías de ayuda**: crea una guía paso a paso del panel con los permisos alineados con la base de datos.
- **Release**: versión, changelog y deploy en un solo paso.

## Verificar antes de dar nada por bueno

- Tests unitarios y **e2e** (Playwright, con emuladores o en solo lectura) que el agente ejecuta él mismo.
- **Hooks** que pasan el detector de diseño después de cada edición.
- El agente **no hace commit ni push** sin que yo lo pida, y yo reviso el diff.
