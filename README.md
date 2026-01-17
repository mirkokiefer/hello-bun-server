# Hello Bun Server

A minimal Bun server for deployment on Render.

## Local Development

```bash
bun install
bun run dev
```

## Deployment

This server is configured to deploy on Render with:
- **Runtime**: Node (with Bun support)
- **Build Command**: `curl -fsSL https://bun.sh/install | bash && export PATH="$HOME/.bun/bin:$PATH" && bun install`
- **Start Command**: `bun run start`

## Endpoints

- `GET /` - Returns "Hello World! 🌍"
- `GET /health` - Health check endpoint
