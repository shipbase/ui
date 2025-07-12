# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Shipbase UI is a modern component library that provides beautifully designed, accessible, and customizable UI components. Developers can copy and paste these components directly into their applications. The library is framework-agnostic and currently supports React and Vue.

## Technology Stack

- **Build System**: Turbo (monorepo)
- **Documentation**: Astro with MDX
- **UI Frameworks**: React and Vue
- **Component Foundation**: Ark UI (headless components)
- **Styling**: Tailwind CSS v4
- **Animation**: tailwindcss-animate
- **Code Quality**: Biome (linting & formatting)
- **Package Manager**: pnpm v10.12.1
- **Testing**: Vitest
- **TypeScript**: Strict mode enabled

## Project Structure

```
/ui (root)
├── apps/
│   └── www/               # Documentation website (Astro)
├── packages/
│   ├── cli/              # CLI tool for component installation
│   ├── lib/              # Shared utilities
│   ├── react/            # React component library
│   └── vue/              # Vue component library
└── tools/
    ├── tailwind/         # Tailwind configuration
    └── typescript/       # TypeScript configurations
```

## Key Commands

### Development
```bash
pnpm dev          # Run all packages in dev mode with watch
pnpm build        # Build all packages
pnpm test         # Run tests across all packages
```

### Code Quality
```bash
pnpm lint         # Run Biome linter
pnpm lint:fix     # Fix linting issues
pnpm format       # Format code with Biome
pnpm typecheck    # Type check all packages
```

### Maintenance
```bash
pnpm clean        # Clean build artifacts
pnpm check:repo   # Check repository consistency
pnpm version      # Version packages with changesets
```

## Component Development Guidelines

1. **Location**: Components are developed in `packages/react/src/components` and `packages/vue/src/components`
2. **Structure**: Each component should have:
   - Component file (e.g., `button.tsx`)
   - Story file for testing (e.g., `button.stories.tsx`)
   - Documentation in `apps/www/content/components/`
3. **Foundation**: Build on top of Ark UI primitives for accessibility
4. **Styling**: Use Tailwind CSS v4 with custom design tokens
5. **Exports**: Components are exported through barrel files in each package

## Documentation Site

- **Location**: `apps/www/`
- **Content**: MDX files in `content/` directory
- **Preview**: Component previews with source code tabs
- **Registry**: Components are built to `public/shadcn/` for CLI consumption

## CLI Tool

- **Package**: `packages/cli/`
- **Command**: `shipbase-ui add <component>`
- **Purpose**: Allows users to install components into their projects

## Code Style

- **Indentation**: 2 spaces
- **Quotes**: Double quotes for strings
- **Semicolons**: As needed
- **Trailing Commas**: ES5 style
- **File Naming**: kebab-case for files, PascalCase for components

## Recent Changes

- Migration to Tailwind CSS v4
- Refactoring of component structure
- Updated build tooling configuration

## Important Notes

1. The project follows a shadcn-style approach where components are copied, not installed as dependencies
2. Components are built on Ark UI for better accessibility
3. The documentation site uses Astro with MDX for rich content
4. All packages share common configurations through the tools/ directory
5. Use Turbo for efficient builds in the monorepo

## Git Workflow

- Main branch: `main`
- Current branch: `gitbutler/workspace`
- Use conventional commits
- Run linting before committing (automated via pre-commit hooks)

## Testing

- Framework: Vitest
- Run tests: `pnpm test`
- Test files: `*.test.ts` or `*.test.tsx`

## Common Tasks

### Adding a New Component
1. Create component in `packages/react/src/components/ui/`
2. Create Vue version in `packages/vue/src/components/ui/`
3. Add exports to index files
4. Create documentation in `apps/www/content/components/`
5. Add to registry build process

### Updating Documentation
1. Edit MDX files in `apps/www/content/`
2. Component previews update automatically
3. Run `pnpm dev` to see changes locally

### Publishing Changes
1. Create changeset: `pnpm changeset`
2. Version packages: `pnpm version`
3. Build and test: `pnpm build && pnpm test`
4. Follow release process