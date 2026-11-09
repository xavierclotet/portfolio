---
title: Coach vocal con IA
summary: Un LLM que escucha la grabación de un cantante y le da una valoración útil, con coste y calidad controlados.
role: Diseño y desarrollo completo · en producción (beta) dentro de Gospel Vallès
stack: [TypeScript, Supabase Edge Functions, OpenRouter, Gemini, Postgres]
ai: [LLM multimodal (audio), Salida estructurada, Control de costes, Selección de modelos]
privateCode: true
featured: true
order: 1
---

## Contexto

Los cantantes de un coro ensayan solos en casa con las pistas de cada canción y pueden grabarse encima.
Les falta saber qué mejorar sin esperar al ensayo.

## Qué hace

- Envía la toma (y, si hay, la mezcla que sonaba) a un **modelo que escucha audio**.
- Devuelve una valoración por aspectos (afinación, ritmo, dicción…) con nota y frases concretas.
- Permite **hacer preguntas** sobre la valoración con un modelo de texto más barato; si hace falta volver a
  escuchar, se pasa al modelo de audio.

## Decisiones y por qué

- **OpenRouter** en vez de un proveedor fijo: cambiar de modelo es configuración, no código.
- **Modelos activables desde el panel** con su coste estimado por toma: se eligen con datos, no a ojo.
- **Modo JSON + lectura tolerante** de la respuesta: la interfaz no depende de texto libre, y una respuesta
  ilegible se registra con el motivo.
- **Registro de cada llamada** (modelo, coste real, duración, error) y **límites y presupuesto mensual**: una
  feature de IA sin control de gasto no llega a producción.
- **Tiempo máximo propio** por debajo del límite de la plataforma, para que ninguna llamada se pierda sin registrar.

## Qué haría distinto / siguiente paso

- **Evals**: grabaciones de referencia para comparar modelos en calidad, coste y latencia, y detectar
  regresiones al cambiar el prompt.
