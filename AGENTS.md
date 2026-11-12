# AGENTS.md — portfolio

Web personal de Xavi Clotet orientada a **AI engineer**: casos de estudio de sus proyectos para CTOs y
equipos de selección. Repo público en `github.com/xavierclotet/portfolio` (cuenta **personal**).

## Stack

- **Astro 7.4.0** estático, sin backend. Versión fijada: las 7.4.x posteriores piden Node ≥ 22.23.4.
- TypeScript estricto, CSS propio con tokens (`src/styles/global.css`), sin frameworks de UI.
- i18n de Astro: **español por defecto (sin prefijo) e inglés en `/en/`**.

## Estructura

```
src/
├── config/site.ts          URL pública y enlaces de contacto (un enlace vacío no se pinta)
├── i18n/ui.ts              textos de la interfaz (es/en) y rutas por idioma
├── content.config.ts       esquema de la colección `projects`
├── content/projects/<es|en>/<slug>.md   un caso de estudio por idioma, mismo slug
├── content/pages/<es|en>/como-trabajo.md página «Cómo trabajo con IA»
├── data/home.ts            «Ahora mismo», skills por área (enlazan al proyecto si está publicado) y experiencia
├── lib/projects.ts         lectura de proyectos (filtra borradores fuera de desarrollo)
├── components/             Home, ProjectCard, ProjectArticle, HowIWork
├── layouts/BaseLayout.astro head, SEO, hreflang, cabecera y pie
└── pages/                  `/`, `/en/`, `/proyectos/<slug>/`, `/en/projects/<slug>/`, `/como-trabajo/`, `/en/how-i-work/`, 404
```

## Posicionamiento (acordado con Xavi)

- Titular: «Ingeniero frontend senior que construye producto con IA». Público: startups y scale-ups de
  producto, España o remoto UE, puesto de senior IC.
- Mensaje principal: lleva IA a producción con criterio (coste, permisos, fallos, evals); de apoyo, el
  desarrollo con agentes y el oficio de frontend.
- Primera persona, frases cortas, cada afirmación con un ejemplo concreto. Sin palabras de moda.
- Orden de proyectos: Scorekinole, Gospel Vallès, coach vocal, hipotecas. El trabajo de empresa solo como
  una línea de experiencia, sin nombre de empresa ni detalles.
- Sin foto ni blog hasta tener el primer artículo.

## Reglas

- **Todo texto, en los dos idiomas.** Una clave nueva de `UI` va en `es` y `en`; un caso nuevo, en
  `content/projects/es` y `content/projects/en` con el mismo nombre de fichero.
- **Casos de estudio con la misma plantilla:** Contexto · Qué hace · Decisiones y por qué · Qué haría
  distinto. Nada de métricas inventadas: si no hay dato, no se pone.
- **`draft: true` por defecto**: solo se publica lo que Xavi ha revisado (`draft: false`).
- **Nunca datos sensibles:** ni secretos, ni datos de cantantes de Gospel Vallès, ni datos financieros de
  hipotecas (capturas con datos inventados), ni código privado más allá de fragmentos. Ni el correo del trabajo.
- **Mobile first** (~390px) y accesible: objetivos táctiles ≥ 44px, foco visible, contraste AA, claro y
  oscuro. La web es en sí una muestra de criterio.
- Antes de commitear: `npm run verify` (`astro check` + build).

## Skills (`.agents/skills`)

Copia versionada (como en scorekinole y gospelvalles); `.claude/skills/` son junctions locales que se
regeneran con `powershell -ExecutionPolicy Bypass -File .agents/link-skills.ps1`.

- **`impeccable`**: al crear o tocar UI. Antes de acabar, pasa el detector contra el servidor de desarrollo:
  `.agents\skills\impeccable\scripts\impeccable.cmd detect http://localhost:<puerto>/` (sobre los ficheros
  `.astro` solo aplica reglas de texto). Pendiente: `PRODUCT.md` y `DESIGN.md` (`/impeccable init`).
- **`grilling`**: para definir posicionamiento y contenido. Pregunta antes de usarla.

## Git y deploy

- Conventional Commits, **en español**. No commitees ni hagas push sin que Xavi lo pida.
- **Nunca** añadas `Co-authored-by:` ni otros co-autores a los commits.
- Autor de los commits: `xavierclotet@users.noreply.github.com` (config local del repo; el global es el del
  trabajo y no debe salir en un repo público).
- Deploy: **Cloudflare Pages, manual** (proyecto `xavierclotet` en la cuenta personal, plan gratuito) →
  https://xavierclotet.pages.dev. `npm run deploy` (verify + `wrangler pages deploy dist`); para revisar sin
  tocar producción, `npm run deploy:preview` → https://proves.xavierclotet.pages.dev. No hay auto-deploy por
  push. Wrangler usa la cuenta de `CLOUDFLARE_ACCOUNT_ID` en `.env` (hay dos cuentas). Detalle: `doc/deploy.md`.

## Desarrollo

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.
El 4321 lo suele ocupar el servidor de `hipotecas`: Astro pasa al siguiente puerto libre.

Full documentation: https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)
