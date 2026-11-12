# Deploy en Cloudflare Pages (cuenta personal)

Mismo modelo que gospelvalles: **deploy manual** con `wrangler pages deploy` desde mi máquina.
Build local, subida de `dist/` y nada de auto-deploy por push. El push a GitHub solo es copia
del código.

Proyecto: `xavierclotet` → https://xavierclotet.pages.dev (la URL de `src/config/site.ts`).

## 1. Requisitos

- Node 22 (`.node-version`).
- Cuenta **personal** de Cloudflare (plan gratuito basta: sitio estático).
- Wrangler con sesión iniciada. La sesión OAuth es global y ya está hecha desde gospelvalles
  (usuario `xaviterra11@gmail.com`). Para comprobarlo:

  ```powershell
  npx wrangler whoami
  ```

  Si no hay sesión: `npx wrangler login` y aceptar en el navegador.

## 2. Fijar la cuenta personal

El usuario de wrangler tiene acceso a **dos cuentas**: `Gospelvalles@gmail.com's Account` y
`Xaviterra11@gmail.com's Account` (la personal). Con más de una, wrangler no sabe dónde desplegar
y hay que fijarla.

1. Copia el **Account ID** de `Xaviterra11@gmail.com's Account` de la tabla de `wrangler whoami`.
2. Crea `.env` en la raíz del repo (ya está en `.gitignore`; wrangler lo lee solo):

   ```dotenv
   CLOUDFLARE_ACCOUNT_ID=<id de la cuenta personal>
   ```

3. Crea también `.env.example` (este sí se commitea) con un valor de ejemplo:

   ```dotenv
   # Cuenta de Cloudflare donde despliega `npm run deploy` (la personal).
   CLOUDFLARE_ACCOUNT_ID=ID_DE_LA_CUENTA_DE_CLOUDFLARE
   ```

## 3. Instalar wrangler en el repo

```powershell
npm install -D wrangler
```

Así la versión queda fijada en `package-lock.json` y no depende de otra instalación.

Añade al `.gitignore`:

```gitignore
# Carpeta local de Cloudflare
.wrangler/
```

## 4. Crear el proyecto de Pages (una sola vez)

```powershell
npx wrangler pages project create xavierclotet --production-branch=main
```

Comprueba que ha caído en la cuenta personal:

```powershell
npx wrangler pages project list
```

Si el nombre `xavierclotet` ya está cogido en `pages.dev`, Cloudflare añade un sufijo
(p. ej. `xavierclotet-abc.pages.dev`). En ese caso actualiza `url` en `src/config/site.ts`
(afecta al sitemap, canonical y hreflang).

## 5. Scripts en `package.json`

```json
"deploy": "npm run verify && wrangler pages deploy dist --project-name=xavierclotet --branch=main",
"deploy:preview": "npm run verify && wrangler pages deploy dist --project-name=xavierclotet --branch=proves --commit-dirty=true"
```

- `deploy` → producción (https://xavierclotet.pages.dev).
- `deploy:preview` → https://proves.xavierclotet.pages.dev, para revisar en el móvil sin tocar
  producción. `--commit-dirty=true` evita el aviso de cambios sin commitear.

`npm run verify` ya hace `astro check` + `astro build`, así que si falla no se sube nada.

## 6. Primer deploy

```powershell
npm run deploy:preview   # revisar en proves.xavierclotet.pages.dev
npm run deploy           # producción
```

Comprobaciones rápidas tras el deploy:

- `/` (es) y `/en/` cargan, y el selector de idioma enlaza bien.
- Una ruta inexistente devuelve la 404 propia (Pages sirve `dist/404.html` solo).
- `/sitemap-index.xml` existe y usa la URL correcta.
- Modo claro y oscuro en el móvil.

## 7. Documentación del repo

Hecho: la sección **Git y deploy** de `AGENTS.md` ya describe el deploy manual y enlaza a este
documento.

## 8. Opcional: dominio propio

Cloudflare → *Workers & Pages* → `xavierclotet` → *Custom domains* → *Set up a custom domain*.
Si el dominio está en la misma cuenta, el DNS se crea solo. Después cambia `url` en
`src/config/site.ts` y vuelve a desplegar.

## Problemas típicos

| Síntoma | Causa y solución |
|---|---|
| `More than one account available` | Falta `CLOUDFLARE_ACCOUNT_ID` en `.env` (paso 2). |
| El proyecto aparece en la cuenta de Gospelvalles | El ID del `.env` no es el de la cuenta personal. Revísalo con `wrangler whoami`. |
| `Project not found` | No existe el proyecto en esa cuenta: paso 4. |
| `Authentication error` | Sesión caducada: `npx wrangler login`. |
| Falla el build por la versión de Node | Usa Node 22; Astro 7.4.0 está fijado por eso. |
