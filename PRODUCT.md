# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

CTOs, responsables de ingeniería y equipos de selección de startups y scale-ups de producto, en España o
en remoto dentro de la UE, que buscan un senior IC. Llegan desde un mensaje de LinkedIn, un enlace del
CV o el perfil de GitHub, y deciden en uno o dos minutos si Xavi merece una entrevista.

## Product Purpose

Portfolio personal de Xavi Clotet, ingeniero frontend senior que construye producto con IA. Existe para
demostrar con proyectos reales que lleva IA a producción con criterio. Éxito: el lector adecuado lo
entiende en una visita corta y escribe por correo o LinkedIn. Xavi busca empleo por cuenta ajena, no
clientes: no busca activamente, pero está abierto a puestos de AI engineering, y ningún texto debe sonar
a freelance ofreciendo servicios.

## Positioning

Titular: «Ingeniero frontend senior que construye producto con IA» / «Senior frontend engineer building
AI products». Mensaje principal: lleva funciones con LLM a producción con el coste, los permisos, los
fallos y las evals bajo control. De apoyo: desarrollo ordenado con agentes (un AGENTS.md por repo,
skills propias, nada se da por bueno sin tests o e2e) y oficio de frontend desde 2015 (de Angular 2 a
21). Lo que otro no puede copiar: cada afirmación está respaldada por una decisión concreta en uno de sus
proyectos en marcha.

## Operating Context

- Se lee en diagonal en el móvil entre reuniones o en el portátil mientras se revisan candidatos.
- Español por defecto (sin prefijo) e inglés en `/en/`; los dos idiomas siempre completos.
- Páginas: inicio, un caso de estudio por proyecto, «Cómo trabajo con IA» y 404.
- Sitio estático en Astro, en Cloudflare Pages con deploy manual.

## Capabilities and Constraints

- Casos de estudio con una sola plantilla: Contexto · Qué hace · Decisiones y por qué · Qué haría
  distinto.
- Orden de proyectos: Scorekinole, Gospel Vallès, coach vocal, hipotecas.
- `draft: true` por defecto: solo se publica lo que Xavi ha revisado.
- El trabajo de empresa aparece solo como una línea de experiencia, sin nombre ni detalles.
- Sin foto ni blog hasta tener el primer artículo.
- Nunca datos sensibles: ni secretos, ni datos de cantantes de Gospel Vallès, ni cifras reales de
  hipotecas, ni código privado más allá de fragmentos, ni el correo del trabajo.

## Brand Commitments

- Nombre: Xavi Clotet.
- Voz: primera persona, frases cortas, cada afirmación con un ejemplo concreto, sin palabras de moda.
- La web es en sí una muestra de criterio: mobile first, accesible, claro y oscuro.

## Evidence on Hand

- Cuatro casos en `src/content/projects/<es|en>/`: Scorekinole (en marcha en scorekinole.es), Gospel
  Vallès, coach vocal con IA y comparador de hipotecas y pisos.
- «Cómo trabajo con IA» en `src/content/pages/<es|en>/como-trabajo.md`.
- «Ahora mismo», skills enlazadas a proyectos y experiencia en `src/data/home.ts`.
- Contacto: GitHub, LinkedIn y correo personal (`src/config/site.ts`).
- Todavía no hay capturas de producto: se diseña sin imágenes de producto. Tampoco hay métricas,
  testimonios ni logos de clientes, y no se inventan.

## Product Principles

1. Pruebas antes que afirmaciones: cada frase apunta a una decisión real de un proyecto real.
2. Rápido de escanear: el lector adecuado capta el mensaje en menos de dos minutos.
3. Honesto con el alcance: lo que se está aprendiendo se dice así; ningún número inventado.
4. El oficio de la propia web forma parte del argumento.

## Accessibility & Inclusion

Contraste AA en claro y oscuro, foco visible, objetivos táctiles de al menos 44px, diseño pensado
primero para ~390px de ancho y respeto a `prefers-reduced-motion`.
