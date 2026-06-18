# Frontend Shim

The Next.js project lives at the repository root (`/app/`). This directory
exists only as a thin shim so that processes (like supervisor) that expect a
`/app/frontend/` working directory continue to work without breaking the build.

All scripts here forward to `/app`:

```bash
cd /app/frontend && yarn dev    # → cd /app && yarn dev
cd /app/frontend && yarn build  # → cd /app && yarn build
cd /app/frontend && yarn start  # → cd /app && yarn start
```

Do not add Next.js source files here. Edit them in `/app/src/`.
