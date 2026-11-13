---
name: Xavi Clotet · Portfolio
description: Plano de líneas de transporte. Cada proyecto es una línea con su color; sus tecnologías e IA son estaciones.
colors:
  ground: "oklch(96% 0.004 250)"
  panel: "oklch(99.5% 0.002 250)"
  ink: "oklch(21% 0.02 262)"
  ink-2: "oklch(43% 0.02 262)"
  rule: "oklch(86% 0.008 262)"
  line-1: "oklch(52% 0.2 27)"
  line-2: "oklch(46% 0.17 320)"
  line-3: "oklch(50% 0.14 150)"
  line-4: "oklch(50% 0.15 250)"
  on-line: "oklch(100% 0 0)"
  ground-dark: "oklch(17% 0.012 262)"
  panel-dark: "oklch(21% 0.014 262)"
  ink-dark: "oklch(95% 0.005 262)"
  ink-2-dark: "oklch(75% 0.012 262)"
  rule-dark: "oklch(33% 0.012 262)"
  band-dark: "oklch(24% 0.016 262)"
  line-1-dark: "oklch(70% 0.17 27)"
  line-2-dark: "oklch(70% 0.14 320)"
  line-3-dark: "oklch(74% 0.15 150)"
  line-4-dark: "oklch(72% 0.13 245)"
  on-line-dark: "oklch(17% 0.012 262)"
typography:
  display:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 7vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 8vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 4.5vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title-station:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"tnum\""
  label:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.6
  caption:
    fontFamily: "Overpass, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  code:
    fontFamily: "ui-monospace, Cascadia Code, SF Mono, Consolas, monospace"
    fontSize: "0.88em"
rounded:
  focus: "2px"
  md: "0.375rem"
  lg: "0.5rem"
  count: "0.75rem"
  round: "50%"
spacing:
  space-1: "0.25rem"
  space-2: "0.5rem"
  space-3: "0.75rem"
  space-4: "1rem"
  space-6: "1.5rem"
  space-8: "2rem"
  space-12: "3rem"
  space-16: "4rem"
  track: "0.5rem"
components:
  station-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    height: "2.75rem"
  station-band-dark:
    backgroundColor: "{colors.band-dark}"
    textColor: "{colors.ink-dark}"
    height: "2.75rem"
  button-sign:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.md}"
    padding: "0.2rem 1.5rem 0"
    height: "3.25rem"
  button-sign-hover:
    backgroundColor: "color-mix(in oklch, oklch(21% 0.02 262) 82%, oklch(96% 0.004 250))"
    textColor: "{colors.ground}"
  link-go:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "2.75rem"
  plaque:
    backgroundColor: "{colors.line-1}"
    textColor: "{colors.on-line}"
    rounded: "{rounded.round}"
    size: "2.25rem"
  plaque-dark:
    backgroundColor: "{colors.line-1-dark}"
    textColor: "{colors.on-line-dark}"
    rounded: "{rounded.round}"
    size: "2.25rem"
  plaque-small:
    backgroundColor: "{colors.line-1}"
    textColor: "{colors.on-line}"
    rounded: "{rounded.round}"
    size: "1.5rem"
  plaque-large:
    backgroundColor: "{colors.line-1}"
    textColor: "{colors.on-line}"
    rounded: "{rounded.round}"
    size: "3.5rem"
  station-stop:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.round}"
    size: "1rem"
  station-ai:
    backgroundColor: "{colors.line-1}"
    rounded: "{rounded.round}"
    size: "1rem"
  station-interchange:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.round}"
    size: "1.375rem"
  notice-board:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.lg}"
    padding: "1.5rem 1rem"
  stops-count:
    textColor: "{colors.ink}"
    rounded: "{rounded.count}"
    height: "1.5rem"
---

# Design System: Xavi Clotet · Portfolio

## Overview

**Creative North Star: "El plano de la red"**

La web es un plano de transporte. Cada proyecto es una línea con su número (L1–L4, según su `order`), su color y su placa redonda; sus tecnologías e IA son estaciones sobre un trazo grueso, y lo que comparten varias líneas son correspondencias con anillo de tinta. El lector no ve una galería de proyectos, sino un sistema conectado por decisiones y herramientas reales.

El material es señalética: un fondo gris frío y plano, tinta casi negra, una cabecera que es una banda de estación en tinta y una sola familia (Overpass) en dos pesos. Todo el color se gasta en las cuatro líneas; el resto de la página es tinta, filetes y espacio. La densidad es la de un plano legible de pie en el andén: pocas marcas, cada una con un significado fijado en la leyenda.

El movimiento es mínimo y funcional: al pasar o enfocar una línea las demás se atenúan, y al pasar por una correspondencia se resalta la misma estación en las otras líneas. Se rechazan los degradados decorativos, el neón sobre negro, el disfraz de terminal o monoespaciada, las rejillas de tarjetas, las pastillas de tags y los antetítulos.

**Key Characteristics:**
- Un fondo plano frío, tinta y cuatro colores de línea; nada más lleva color.
- Overpass autoalojada, solo pesos 400 y 700, cifras tabulares.
- El trazo (0.5rem) es la unidad gráfica: líneas, recorridos, filetes de cabecera de caso y el final de línea.
- Placas redondas con el código de línea en blanco (claro) o en el color del fondo (oscuro).
- Plano de escritorio a partir de 64rem; en móvil, una tira vertical por línea y se sigue una sola a la vez.
- Objetivos táctiles de al menos 44px y foco de 3px en tinta.

## Colors

Un suelo neutro frío y una tinta muy oscura sostienen la página; el único color son las cuatro líneas, saturadas y con contraste AA sobre el fondo en los dos temas.

### Primary
- **Rojo de línea 1** (line-1 / line-1-dark): Scorekinole. Trazo, estaciones, placa, subrayado de enlaces y franja de la banda en su caso.
- **Morado de línea 2** (line-2 / line-2-dark): Gospel Vallès. Mismos usos que la L1.
- **Verde de línea 3** (line-3 / line-3-dark): coach vocal. Mismos usos.
- **Azul de línea 4** (line-4 / line-4-dark): hipotecas. Mismos usos.
- **Texto sobre línea** (on-line / on-line-dark): el código dentro de la placa. Blanco en claro; en oscuro, el color del fondo, porque las líneas oscuras son claras.

En claro, cada línea da al menos 5:1 sobre el fondo y el blanco sobre la línea al menos 5.6:1. En oscuro, cada línea da al menos 6.6:1 sobre el fondo, y el texto de la placa usa ese mismo par. El color de una línea se asigna con la clase `line-N`, que fija la variable `--line`; las páginas sin proyecto usan la tinta como línea.

### Neutral
- **Suelo frío** (ground / ground-dark): fondo único de toda la página; también el texto sobre la banda y el botón en claro.
- **Panel** (panel / panel-dark): solo el relleno blanco de las estaciones y los puntos del stack. No es una superficie de tarjeta.
- **Tinta** (ink / ink-dark): texto, filetes de 2px, banda de estación y aviso en claro, botón principal, anillos de correspondencia, final de línea y foco.
- **Tinta secundaria** (ink-2 / ink-2-dark): leads, resúmenes, leyenda, pie y etiquetas. Más de 7:1 sobre el fondo en los dos temas.
- **Filete** (rule / rule-dark): separadores de 1px entre líneas del plano y entre filas del índice de skills.
- **Banda oscura** (band-dark): en oscuro, la banda y el aviso se separan del fondo con este gris un punto más claro; en claro la banda es la tinta.

### Named Rules
**The Four Lines Rule.** El color solo existe en las cuatro líneas. Fondo, superficies, botones y texto son tinta o neutros; si un elemento lleva color, es porque pertenece a una línea.

**The One Ground Rule.** Hay un solo fondo plano. Nada de superficies elevadas, degradados ni bloques de color de fondo; la única excepción es la banda de tinta (cabecera y aviso «Ahora mismo»).

## Typography

**Display Font:** Overpass (con ui-sans-serif, system-ui, sans-serif)
**Body Font:** Overpass (con ui-sans-serif, system-ui, sans-serif)
**Label/Mono Font:** ui-monospace, solo para `code` dentro de la prosa

**Character:** Una grotesca de señalética de autopista, autoalojada con @fontsource (latin 400 y 700). La jerarquía sale del tamaño y del peso 700, no de otra familia.

### Hierarchy
- **Display** (700, clamp(2.25rem, 7vw, 3.75rem), 1.04): el titular de la portada, máximo 18ch.
- **Headline** (700, clamp(2.25rem, 8vw, 3.75rem), 1.02): el h1 de un caso, de «Cómo trabajo» y del 404. El contacto final usa un paso intermedio (clamp(2rem, 6vw, 3.25rem)).
- **Title** (700, clamp(1.625rem, 4.5vw, 2.25rem), 1.1): títulos de bloque de la portada.
- **Title station** (700, 1.375rem, 1.1): nombre de cada línea en el plano y cada estación (h2) de un recorrido.
- **Lead** (400, 1.1875rem, 1.6): entradas bajo el titular, en tinta secundaria, máximo 38rem.
- **Body** (400, 1.0625rem, 1.6): texto corrido con cifras tabulares; la prosa larga se limita a 68ch.
- **Label** (700, 0.9375rem): enlaces de acción, desplegable de estaciones, códigos de placa. La navegación usa el mismo tamaño en 400.
- **Caption** (400, 0.875rem): leyenda del plano y pie.

### Named Rules
**The Two Weights Rule.** Overpass solo en 400 y 700. Nada de mayúsculas espaciadas ni de una segunda familia para dar carácter.

**The Drawn Dot Rule.** El «·» de Overpass no queda centrado: los separadores en línea se dibujan como un punto redondo de 0.3em, nunca con el carácter.

## Layout

Mobile first a ~390px. El contenedor de lectura mide 46rem y el de la portada (el plano) 76rem, con 1rem de margen lateral que pasa a 2rem desde 40rem. El ritmo vertical usa la escala de espaciado: 4rem entre bloques de la portada, 3rem entre estaciones de un recorrido y antes del contenido de un caso.

Puntos de cambio observados: 40rem (márgenes, índice de skills a dos columnas, ficha del caso a 2fr/1fr), 52rem (bloques partidos con título de 18rem a la izquierda; avisos a tres columnas) y 64rem (titular y entrada lado a lado, leyenda junto al título, índice a cuatro columnas y el plano horizontal).

El plano tiene dos formas. En móvil cada línea es una tira vertical (trazo a la izquierda, nombres horizontales) dentro de un desplegable y solo hay una abierta a la vez. Desde 64rem cada línea es una fila con 17rem para la cabecera y una rejilla de columnas iguales para las estaciones, compartida por todas las líneas (`--cols`): misma distancia entre estaciones, y cada correspondencia cae en la misma columna en todas sus líneas. Los nombres giran -40 grados sobre una franja de 10.5rem.

### Named Rules
**The Shared Column Rule.** En el plano de escritorio, una estación compartida ocupa la misma columna en todas las líneas que pasan por ella; los tramos se alargan para llegar, nunca se mueve la estación.

**The One Lane Rule.** En móvil se sigue una línea cada vez: abrir una cierra las demás.

## Elevation & Depth

El sistema es plano. No hay sombras de elevación ni superficies apiladas: la jerarquía sale de la tinta, de los filetes (1px en filete, 2px en tinta, 0.5rem de trazo) y de la banda. Donde el código usa `box-shadow`, dibuja una marca plana, no profundidad: la franja de color de la línea bajo la banda de un caso (`inset 0 -0.375rem 0`), el anillo de fondo alrededor del final de línea (`0 0 0 0.25rem`) y el halo de una correspondencia resaltada (`0 0 0 0.1875rem` fondo, `0 0 0 0.4375rem` tinta).

### Named Rules
**The Flat Plan Rule.** Un plano no tiene sombras. Si algo necesita separarse, lleva un filete o un anillo dibujado, nunca una sombra difusa.

## Shapes

Dos geometrías: el círculo y el trazo. Placas, estaciones, puntos de IA y del stack son círculos completos; las líneas son trazos de 0.5rem con extremos redondeados. Una estación normal es un punto de 1rem con relleno panel y borde de 0.25rem en el color de la línea; una de IA, el mismo punto relleno del color; una correspondencia, un anillo de 1.375rem con borde de tinta. En un recorrido, cada estación es un punto de 1.5rem con borde de 0.3125rem y el final de línea es un punto relleno de tinta.

El resto es casi recto: 0.375rem en el botón principal, 0.5rem en el aviso «Ahora mismo», 2px en el contorno de foco. Los bloques se separan con filetes horizontales, nunca con cajas.

## Components

### Buttons
Placa de señal: sólida, recta y en tinta.
- **Shape:** esquinas apenas suavizadas (0.375rem).
- **Primary («Escríbeme»):** fondo tinta, texto fondo, 700 a 1.125rem, 3.25rem de alto, flecha SVG a la derecha.
- **Hover / Focus:** el fondo se aclara al 82% de tinta mezclada con el fondo en 180ms; foco con el contorno global.
- **Enlace de acción:** sin fondo, 700, 2.75rem de alto, subrayado en el color de la línea (tinta si no hay línea) y flecha SVG.

### Navigation
- **Banda de estación:** cabecera a lo ancho en tinta (en oscuro, la banda oscura) con el texto en el color del fondo. Marca a la izquierda (700, 1.125rem) y enlaces a la derecha en 0.9375rem; cada enlace mide 2.75rem de alto.
- **Estados:** hover y página actual (`aria-current`) con subrayado de 3px; el foco usa el color del texto de la banda.
- **En un caso:** la banda lleva debajo una franja de 0.375rem del color de la línea.
- **Móvil:** los enlaces bajan a una segunda fila con 1rem de separación.

### Placa de línea
El código de línea en un círculo, como en las señales de estación. Tres tamaños: 2.25rem (plano y siguiente línea), 1.5rem (correspondencias e índice de skills) y 3.5rem (cabecera de un caso). Fondo del color de la línea, código en 700.

### Plano de líneas (componente firma)
- **Cabecera:** título y lead a la izquierda, leyenda a la derecha desde 64rem. La leyenda dibuja trazo, estación, estación de IA y correspondencia en el color de la L1.
- **Cada línea:** placa, nombre enlazado (título de estación) con flecha y resumen en tinta secundaria; debajo, el trazo con sus estaciones. Líneas separadas por filetes de 1px y el conjunto abierto por un filete de tinta de 2px.
- **Móvil:** desplegable «Estaciones» con contador redondeado bordeado en el color de la línea (1.5rem de alto) y un chevrón dibujado que gira en 200ms.
- **Interacción:** con puntero y desde 64rem, al pasar o enfocar una línea las demás bajan a opacidad 0.32 en 220ms. Al pasar o enfocar una correspondencia, la misma estación se resalta en todas sus líneas con el halo de tinta y las líneas que no la tienen se atenúan. Con `prefers-reduced-motion` las transiciones se quitan.

### Recorrido (caso de estudio y «Cómo trabajo»)
El texto largo cuelga de un trazo vertical del color de la línea; cada h2 es una estación sobre el trazo y el último es el final de línea, relleno de tinta. Los marcadores de lista van en el color de la línea. La cabecera del caso cierra con un filete de trazo en el color de la línea; los puntos de IA son círculos rellenos y el stack, puntos con borde.

### Siguiente línea
Al final de un caso, un transbordo al siguiente: filete de trazo en el color de la siguiente línea, «Siguiente línea» en tinta secundaria y debajo la placa, el nombre (700, clamp(1.375rem, 4vw, 1.75rem)) y la flecha.

### Aviso «Ahora mismo»
Pantalla de avisos del andén: bloque en banda con radio de 0.5rem, texto en el color del fondo y cada aviso separado por un filete al 35%. Tres columnas desde 52rem.

### Índice de skills
Cuatro columnas en escritorio; cada grupo abre con un filete de tinta y cada skill es una fila de 2.75rem con filete de 1px. Si la skill se usa en un proyecto publicado, la fila enlaza al caso y lleva la placa pequeña de su línea.

### Final de línea (contacto) y tramo cortado (404)
El contacto cierra la portada bajo un filete de 0.5rem de tinta, con enlaces de 700 y el correo destacado. El 404 dibuja una línea interrumpida: un tramo sólido y otro discontinuo hecho con cortes duros.

### Flecha
Icono SVG en línea de 20×20 (trazo de 2.25, extremos cuadrados), a 1.1em y en `currentColor`; la versión de vuelta se invierte en horizontal.

## Do's and Don'ts

### Do:
- **Do** asignar el color de un proyecto solo con `line-N` (variable `--line`) y usarlo en trazo, estaciones, placa, marcadores y subrayados.
- **Do** usar el trazo de 0.5rem con extremos redondeados para cualquier línea, recorrido o filete de cabecera de un caso.
- **Do** mantener cada objetivo táctil en al menos 2.75rem (44px) de alto.
- **Do** dejar el foco visible con el contorno global de 3px en tinta y 3px de separación (en la banda, en el color de su texto).
- **Do** comprobar AA en claro y oscuro al añadir un color de línea: al menos 4.5:1 de la línea sobre el fondo y del texto de la placa sobre la línea.
- **Do** quitar cualquier transición nueva bajo `prefers-reduced-motion`.

### Don't:
- **Don't** usar degradados de color; el único `repeating-linear-gradient` del sistema dibuja con cortes duros el tramo discontinuo del 404.
- **Don't** usar neón sobre negro ni el disfraz de terminal o de monoespaciada; la monoespaciada es solo para `code`.
- **Don't** montar rejillas de tarjetas con caja, sombra o fondo propio; los bloques se separan con filetes.
- **Don't** mostrar tecnologías como pastillas de tags; son estaciones sobre una línea o puntos en una lista.
- **Don't** poner antetítulos ni mayúsculas espaciadas sobre los títulos.
- **Don't** añadir un quinto color decorativo ni teñir fondos con los colores de línea.
- **Don't** usar sombras para dar profundidad.
