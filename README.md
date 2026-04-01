# NaM Design System

Shared design tokens, React components, utilities, and lint config powering the NaM ecosystem of products.

## Architecture

```
packages/
  tokens/          @nam/tokens        CSS custom properties + Tailwind v4 preset + JSON export
  react/           @nam/react         React components (Logo, Button, Card, Badge, Input)
  utils/           @nam/utils         Date formatting, string helpers, API utilities, entity constants
  eslint-config/   @nam/eslint-config ESLint + Prettier + EditorConfig shared config
apps/
  storybook/       Visual component browser with theme switcher (light/dark/studio)
```

### Token Layers

1. **Primitives** (`--nam-*`) — raw palette values, never referenced directly by apps
2. **Semantic** (`--color-*`, `--font-*`, `--space-*`) — theme-aware role mappings that apps use
3. **Tailwind preset** — maps semantic tokens to `@theme inline` for Tailwind v4 projects

Themes are activated via `data-theme` attribute: `light` (earth tones), `dark` (indigo accent), `studio` (gold accent).

## Getting Started

```bash
pnpm install
pnpm -r build          # Build all packages
pnpm storybook         # Launch Storybook at http://localhost:6006
```

## Scripts

| Command                                       | Description                   |
| --------------------------------------------- | ----------------------------- |
| `pnpm -r build`                               | Build all packages            |
| `pnpm storybook`                              | Launch Storybook dev server   |
| `cd packages/tokens && node scripts/build.js` | Rebuild tokens only           |
| `cd packages/react && npx tsup`               | Rebuild React components only |
| `cd packages/utils && npx tsup`               | Rebuild utils only            |

## Consuming Packages

All packages are linked locally via `file:` protocol in consuming projects. Add to your `package.json`:

```json
{
  "dependencies": {
    "@nam/tokens": "file:../nam-design-system/packages/tokens",
    "@nam/react": "file:../nam-design-system/packages/react",
    "@nam/utils": "file:../nam-design-system/packages/utils"
  },
  "devDependencies": {
    "@nam/eslint-config": "file:../nam-design-system/packages/eslint-config"
  }
}
```

### Using Tokens (Tailwind v4)

```css
@import "@nam/tokens/tailwind-preset.css";
@import "@nam/tokens/tokens-light.css"; /* or tokens-dark.css, tokens-studio.css */
```

Then use semantic classes: `bg-bg-base`, `text-accent`, `border-border-default`, etc.

### Using React Components

```tsx
import { Button, Card, Logo } from "@nam/react";
import "@nam/react/styles.css";
```

### Using Utils

```ts
import { formatDate } from "@nam/utils/date";
import { slugify } from "@nam/utils/string";
import { apiSuccess, apiError } from "@nam/utils/api";
```

### Using ESLint Config

```js
// eslint.config.mjs — for Next.js projects
import config from "@nam/eslint-config/next";
export default config;
```

## Consuming Projects

| Project      | Theme         | Packages Used   |
| ------------ | ------------- | --------------- |
| nam-platform | Light (earth) | Tokens + React  |
| nam-events   | Light (earth) | Tokens + React  |
| dashboard    | Dark          | Tokens + ESLint |
| nam-studio   | Studio (dark) | Tokens only     |
| nam-website  | Light (earth) | Tokens only     |

## Design Principles

- **Fonts**: Epilogue (display), Sometype Mono (body/UI), Cormorant Garamond (editorial)
- **Icons**: Lucide only, inlined as SVGs
- **Components**: Use CSS custom properties internally, no Tailwind classes inside components
- **Framework-agnostic**: No Next.js imports in `@nam/react` — use `as` prop for link wrappers

## Conventions

See [CONVENTIONS.md](CONVENTIONS.md) for commit message format, code style, file naming, CSS rules, and API patterns. All consuming projects follow these conventions.
