# Hearth & Field

A two-brand storefront for considered home goods. Browse pieces, open a product
page, and review the details of furniture and textiles from Cedar & Row and
Morrow Studio. The
catalogue combines commerce prices with editorial descriptions through a small
mock storefront service. Its calls take 60 ms and return independent data copies.
Purchases are demonstrations; nothing is persisted.

## Requirements
Node.js 24 or newer and npm 11.

## Run locally
```bash
npm ci
npm run dev
```
Open http://localhost:3000. No environment variables or external services are needed.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm test` | Vitest suite (does not type-check) |
| `npm run typecheck` | Strict TypeScript checks |
| `npm run lint` | ESLint |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run test:watch` | Vitest in watch mode |

Amounts in the commerce feed are decimal dollar strings. Storefront models use
integer cents. All prices are USD, before tax. The catalogue and product pages
are intentionally server-rendered at baseline; there is no client-side data
fetching. A local support-request helper is included for the interview ticket;
it does not send anything externally.
