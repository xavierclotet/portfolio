---
title: Dashboard de inversiones
summary: "Dashboard personal para mi cuenta de Interactive Brokers: ingiere el Flex statement, lo agrega en parquets y lo sirve en un SPA con widgets configurables, con screener de opciones y avisos por Telegram."
role: Proyecto propio · diseño, desarrollo y operación
stack: [Python, FastAPI, Pandas, Parquet, Next.js, React, Tailwind, shadcn/ui, ECharts, TanStack Query, yfinance, systemd]
ai: [Desarrollo con agentes]
decisions: [IBKR manda, Nunca se borra un precio bueno, Caché que sobrevive al reinicio, Todo en EUR]
access: Herramienta personal, en una VM privada (Tailscale)
privateCode: true
order: 5
draft: true
---

## Contexto

Mi cartera vive en Interactive Brokers, pero el portal de IBKR te dice lo que ellos quieren
enseñarte: el P/L está separado de los dividendos, el fiscal hay que calcularlo a mano y no
hay una vista única de dónde estoy y hacia dónde voy. Quería una herramienta propia que
leyera mis datos reales y me contestara las preguntas que me importan cada semana.

## Qué hace

- **Dashboard**: NAV, P/L realizado y no realizado, trades, dividendos, fiscal (IRPF) y cash,
  con widgets configurables (drag/resize y layouts guardados).
- **Screener**: análisis técnico y sugeridor de estrategias de opciones, sin configurar nada
  (fuentes públicas gratis).
- **Rankings**: mis listas de tesis de inversión, con medias de tendencia y zonas de entrada.
- **Avisos por Telegram**: cada 30 minutos comprueba si algo entra en zona de compra o tiene
  earnings a la vista; los fallos del sync también avisan.
- Sync cada 2 horas en una VM privada (GCP e2-micro sobre Tailscale): descarga el Flex
  statement, fusiona los parquets y refresca precios sin que yo toque nada.

## Decisiones y por qué

- **IBKR manda**: las posiciones abiertas se deducen del histórico de operaciones, pero una
  OPA o un tender no deja ningún SELL, así que salían posiciones fantasma. Todo lo que declara
  una posición abierta cruza contra el snapshot oficial del Flex, que manda también en el
  cuánto y el a cuánto.
- **Nunca se borra un precio bueno para pedir uno nuevo**: yfinance se cae a ratos, y si la
  descarga falla se sirve el precio anterior, que vale mucho más que ninguno (sin él todo se
  valora al cierre de IBKR y encima en silencio). El badge de frescura enseña la edad real de
  cada precio: conservar un precio viejo solo es honesto si se ve.
- **Caché que sobrevive al reinicio**: la caché de precios se persiste en disco para que un
  deploy no arranque a ciegas.
- **Todo en EUR antes de calcular**: beta y Sharpe convierten cada posición y el benchmark a
  euros — una acción USA le añade al inversor europeo la exposición al dólar, y en divisa local
  esa parte no se vería.
- **Tres reglas de fiabilidad en los precios**: conservar el último bueno, persistirlo y
  reintentar uno a uno lo que el descarga masiva de Yahoo devuelve incompleto y sin avisar.

## Qué haría distinto / siguiente paso

- TODO.
