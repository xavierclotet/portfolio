---
title: Comparador de hipotecas y pisos
summary: "Herramienta personal para comprar vivienda con datos: TAE real de cada oferta y seguimiento de precios con una nota explicable."
role: Proyecto personal · diseño y desarrollo
stack: [Node.js, JavaScript, HTML, CSS]
ai: [Desarrollo con agentes]
privateCode: true
order: 4
---

## Contexto

Comprar piso implica comparar ofertas de hipoteca con condiciones distintas y seguir anuncios que cambian
de precio. Las webs de los bancos y los portales no lo ponen fácil.

## Qué hace

- Calcula la **TAE real** de cada oferta con sus vinculaciones y la entrada necesaria.
- Revisa los anuncios guardados, registra el histórico de precios y avisa de las bajadas.
- Da a cada piso una **nota de 1 a 100 explicable**, desglosada por precio por m², entrada, espacio,
  extras y estado.
- Genera informes HTML autocontenidos e imprimibles.

## Decisiones y por qué

- **Node sin dependencias**: una herramienta personal tiene que seguir funcionando años sin mantenimiento.
- **Un dato que el anuncio no publica puntúa 0 y no se inventa**: la nota tiene que ser honesta para servir
  para decidir.
- **Comparar con el precio medio del barrio**, no con el resto de pisos de la lista, que estaban sesgados.

## Nota

El código es privado porque contiene datos financieros personales. Las capturas usan datos inventados.
