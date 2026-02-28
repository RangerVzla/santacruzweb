# Santa Cruz O&G Website

Next.js application deployed on Cloudflare Pages.

## Runtime Baseline

- Node.js: `20.x` (see `package.json` `engines`)
- Framework: Next.js `16`
- Hosting: Cloudflare Pages

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact Flow

The contact page uses a `mailto:` submission (`/contacto`) and opens the user's email client with a prefilled message.

## Quality Gates

```bash
npm run lint
npm run build
```

Both commands should pass before deploying.

## Cloudflare Pages Deployment Checklist

1. Confirm Pages project uses Node `20`.
2. Deploy preview and verify:
   - Landing page renders
   - `/contacto` form opens mail client correctly
3. Check deployment logs for runtime errors.
