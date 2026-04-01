# NāM Design System

## What This Is

A two-layer design system powering the NāM ecosystem of products. Provides shared design tokens (colors, typography, spacing, motion) and React components across multiple projects.

## Architecture

- **@nam/tokens** — CSS custom properties + Tailwind v4 preset + JSON export
- **@nam/react** — Framework-agnostic React components (Logo, Button, Card, Badge, Input)
- **@nam/utils** — Shared utilities: date formatting, slugify, API helpers, entity constants/types
- **@nam/eslint-config** — Shared ESLint + Prettier + EditorConfig rules
- **Storybook** — Visual component browser with theme switcher, pattern docs (light/dark/studio)

## Cross-Project References

- **Product inventory**: `../../PRODUCTS.md` — all products, stacks, relationships, adoption status
- **Conventions**: `CONVENTIONS.md` — commit messages, code style, file naming, API patterns
- **Consistency audit**: Runs weekly (Monday 9am) — checks for token drift, hardcoded hex, duplicated components

## Consuming Projects

| Project      | Theme         | Components     |
| ------------ | ------------- | -------------- |
| nam-platform | Light (earth) | Tokens + React |
| nam-events   | Light (earth) | Tokens + React |
| dashboard    | Dark          | Tokens + React |
| nam-studio   | Studio (dark) | Tokens only    |
| nam-website  | Light (earth) | Tokens only    |

## Excluded (own design systems)

- kin-haus — own branding
- kpg-community — own design system
- snippets — iOS/SwiftUI

## Token Layers

1. **Primitives** (`--nam-*`) — raw palette values, never used directly by apps
2. **Semantic** (`--color-*`) — theme-dependent role mapping (what apps reference)
3. **Tailwind preset** — maps semantic tokens to `@theme inline` for TW v4 projects

## Key Commands

```bash
pnpm -r build              # Build all packages
pnpm storybook              # Launch Storybook (port 6006)
cd packages/tokens && node scripts/build.js  # Rebuild tokens only
cd packages/react && npx tsup               # Rebuild React only
```

## Conventions

- Primitives use `--nam-` prefix, semantic tokens use `--color-`, `--font-`, `--space-`, etc.
- React components use CSS custom properties only — no Tailwind utility classes inside components
- Components are framework-agnostic — no `next/link`, no `usePathname`
- Logo accepts an `as` prop for custom link wrappers (e.g., Next.js Link)
- Themes are controlled via `data-theme` attribute on a parent element
- Entity colors (Kin Haus, AI Meetup, etc.) are in the primitive layer, available in all themes

## Design Principles

- Fonts: Epilogue (display), Sometype Mono (body/UI), Cormorant Garamond (editorial)
- Icons: Lucide (https://lucide.dev), inlined as SVGs
- Accent: Sunwashed terracotta (#d56b45) for light, Indigo (#6366f1) for dark, Gold (#c99a6a) for studio
