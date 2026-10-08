# skeamo-test-express

A deliberately insecure **Express** app, for testing Skeamo's launch report.

Do not deploy this. It is broken on purpose.

## Planted faults

1. A live Stripe secret key hardcoded in `src/config.js`
2. `POST /api/orders/:id/delete` writes with no authentication
3. `PUT /api/orders/:id` writes with no authentication
4. A wildcard CORS header on every response

## Running it

```bash
npm install
npm run dev
```

It binds to `process.env.PORT`, so the workspace preview finds it.
