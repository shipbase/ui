# coss ui

**coss ui** is a collection of beautifully designed, accessible, and composable
components for React. Built on top of [Base UI](https://base-ui.com/) and styled
with [Tailwind CSS](https://tailwindcss.com/).

## Layout

- `apps/ui/` - Next.js docs site + registry
- `packages/ui/` - `@coss/ui` shared components
- `packages/typescript-config/` - `@coss/typescript-config`

## Development

```sh
bun install
bun run dev
```

The UI app runs on http://localhost:4000/ui by default.

## Build

```sh
bun run build
```

## Environment

- `NEXT_PUBLIC_BASE_PATH` (optional, defaults to `/ui`)
- `NEXT_PUBLIC_APP_URL` (optional, used for registry URLs; defaults to
  `https://coss.com/ui`)

## Contributing

See `apps/ui/CONTRIBUTING.md`.

## Licensing

See `LICENSING.md`.
