# CLAUDE.md

## Project Overview

This is a monorepo for a UI component library similar to shadcn/ui, built with Ark UI instead of Radix UI. It provides accessible, customizable components for React and Vue.

## Architecture

### Tech Stack

- pnpm for package management
- turborepo for monorepo tasks management
- oxlint for linting, oxfmt for formatting
- typescript for type checking
- vitest for testing
- changesets for version management
- ark-ui for primitive components
- tailwindcss v4 for styling
- lucide-react for icons
- xstate for state management
- astro for documentation site
- mdx for documentation

### Directory Structure

```
ui/
├── apps/
│   └── www/                # Documentation site built with Astro, MDX, and Tailwind CSS v4
├── packages/
│   ├── react/              # React primitive component implementations, examples, stories
│   ├── vue/                # Vue primitive component implementations, examples, stories
│   └── lib/                # Shared utilities
└── tools/                  # Shared configurations (Tailwind, TypeScript)
```

## Development Workflow

### Component Development Workflow

Components are built on top of Ark UI, with primitive component, examples, stories, and documentation.

- Each component has framework-specific implementations in `packages/react` and `packages/vue`
- Examples live in `src/examples/` within each framework package
- Stories live in `src/stories/` within each framework package
- Documentation MDX files are in `apps/www/content`

### Commands that you can use

- !`pnpm run test` for testing, use `--filter={package_path}` to run tests for a specific package.
- !`pnpm run build` for building, use `--filter={package_path}` to build a specific package.
- !`pnpm run typecheck` for type checking, use `--filter={package_path}` to type check a specific package.
- !`pnpm run check` for linting.
- !`pnpm run format` for formatting.

> don't use any stub, dev to run this project for testing, the dev server is running before i work with you.

## Specific Rules

### Code Quality

- use mcp**ide**getDiagnostics to diagnostics of every file edited.
