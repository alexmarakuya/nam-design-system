# NāM Ecosystem — Conventions

Shared conventions across all NāM products. Every CLAUDE.md in each project should reference this file.

## Commit Messages

Format: `<type>: <description>`

**Types:**

- `feat:` — new feature or capability
- `fix:` — bug fix
- `ui:` — visual/styling change (colors, layout, spacing)
- `refactor:` — code restructuring without behavior change
- `chore:` — dependencies, config, tooling
- `docs:` — documentation only
- `perf:` — performance improvement

**Rules:**

- Lowercase, no period at end
- Present tense ("add" not "added")
- Under 72 characters
- Body optional, separated by blank line

**Examples:**

```
feat: add event preview sharing with token
fix: correct timezone offset in date picker
ui: update card border radius to match design system
refactor: extract date formatting to @nam/utils
chore: upgrade next to 16.1.7
```

## Code Style

- **TypeScript strict mode** in all projects
- **ESLint**: Use `@nam/eslint-config/next` for Next.js, `@nam/eslint-config` for others
- **Prettier**: Copy `.prettierrc.json` from `@nam/eslint-config` package
- **EditorConfig**: Copy `.editorconfig` from `@nam/eslint-config` package
- **Unused vars**: Prefix with `_` (e.g., `_unused`)
- **Imports**: Framework imports first, then libs, then local. Blank line between groups

## CSS / Styling

- **Never hardcode hex values** — always use design system tokens
- **Tailwind classes** reference semantic tokens (e.g., `bg-bg-base`, `text-accent`)
- **CSS custom properties** for non-Tailwind projects (vanilla, CSS Modules)
- **Entity colors** use `entity-*` token names, never raw hex

## File Naming

- Components: `PascalCase.tsx` (e.g., `EventCard.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Pages/routes: `lowercase` (Next.js conventions)
- CSS files: `kebab-case.css` or `PascalCase.module.css`

## API Routes

- Success: `{ data: ... }`
- Error: `{ error: "message" }`
- Use helpers from `@nam/utils/api` where available

## Icons

- **Lucide only** — https://lucide.dev
- Inlined as SVGs, never as icon fonts
- Standard: `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"`
- Sizes: 24px default, 20px in buttons, 16px inline
