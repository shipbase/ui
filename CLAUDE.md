# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo for a UI component library similar to shadcn/ui, built with Ark UI instead of Radix UI. It provides accessible, customizable components for React and Vue with a CLI tool for easy installation.

## Common Development Commands

### Essential Commands
```bash
# Install dependencies
pnpm install

# Run development servers (docs site and component builds)
pnpm dev

# Run Storybook for component development
pnpm dev:storybook

# Build all packages
pnpm build

# Type check all packages
pnpm typecheck

# Lint and format code
pnpm lint
pnpm lint:fix
pnpm format

# Run tests
pnpm test

# Clean build artifacts
pnpm clean
```

### Running Tests for Specific Packages
```bash
# Run tests for a specific package
pnpm --filter @shipbase-ui/react test
pnpm --filter @shipbase-ui/vue test

# Run a specific test file
pnpm --filter @shipbase-ui/react test button.test.tsx
```

## Architecture and Key Concepts

### Monorepo Structure
- **apps/www**: Documentation site built with Astro, MDX, and Tailwind CSS v4
- **packages/cli**: CLI tool for adding components to user projects
- **packages/react**: React component implementations
- **packages/vue**: Vue component implementations
- **packages/lib**: Shared utilities
- **tools/**: Shared configurations (Tailwind, TypeScript)

### Component Development Workflow
1. Components are built on top of Ark UI for accessibility
2. Each component has framework-specific implementations in `packages/react` and `packages/vue`
3. Examples live in `src/examples/` within each framework package
4. Documentation MDX files are in `apps/www/content/components/`
5. Components use Class Variance Authority (CVA) for variant management

### Registry System
- Components are distributed via a registry pattern (not npm packages)
- Registry files are generated in `public/shadcn/` directory
- Users install components by copying them into their projects via the CLI

### State Management
- The documentation site uses nanostores for cross-framework state
- UI library selection (React/Vue) is persisted across page loads
- State atoms are in `apps/www/src/store/atoms/`

### Code Quality Tools
- **Biome**: Used for linting and formatting (NOT ESLint/Prettier)
- **TypeScript**: Strict type checking across all packages
- **Vitest**: Testing framework
- **lint-staged**: Pre-commit hooks for code quality

### Important Patterns
1. **Framework Agnostic**: Components are implemented separately for React and Vue
2. **Copy-paste Architecture**: Users copy components rather than installing as dependencies
3. **Tailwind v4**: Using the latest Tailwind CSS with custom theme configuration
4. **Accessibility First**: All components built on Ark UI's accessible foundations

### Adding New Components
1. Create component in both `packages/react/src/components` and `packages/vue/src/components`
2. Add examples in `src/examples/` for each framework
3. Create MDX documentation in `apps/www/content/components/`
4. Update the component registry
5. Run `pnpm build` to verify everything works

### Version Management
- Uses changesets for version management
- Run `pnpm changeset` to create a changeset
- Run `pnpm version` to apply changesets and bump versions


## Code Quality

1. TypeScript first, when you create or edit file, you can use IDE Diagnosis tools to check.