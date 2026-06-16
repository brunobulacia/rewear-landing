# ReWear — Sitio Web Corporativo

Sitio institucional/landing que describe qué es **ReWear** (la plataforma de moda
circular). Es análogo a lo que `code.visualstudio.com` es para VS Code: no es la
aplicación, es la página que la presenta.

- **Aplicación (marketplace):** `rewear-app`
- **API:** `rewear-api`
- **Sitio corporativo (este):** `rewear-web`

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript. Página estática,
sin backend ni base de datos.

## Desarrollo local

```bash
npm install
npm run dev          # http://localhost:3000
# o en otro puerto: PORT=3001 npm run dev
```

## Variables de entorno

| Variable | Para qué | Default |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | URL del marketplace al que apuntan los botones "Ir a la app" | `https://rewear-app-xi.vercel.app` |

## Despliegue en Railway

1. Creá un nuevo servicio en Railway apuntando a esta carpeta (`rewear-web`).
2. Railway detecta Next.js automáticamente y ejecuta:
   - `npm install`
   - `npm run build`
   - `npm run start`
3. `next start` escucha en el puerto que Railway inyecta vía `PORT` — no hay que
   configurar nada de puertos.
4. (Opcional) En **Variables**, seteá `NEXT_PUBLIC_APP_URL` con la URL pública de
   tu marketplace.

Eso es todo: build estático, arranque inmediato, cero configuración extra.
