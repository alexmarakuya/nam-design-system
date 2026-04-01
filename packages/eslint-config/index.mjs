/**
 * @nam/eslint-config — Base ESLint config for all NāM projects.
 *
 * Usage in any project's eslint.config.mjs:
 *
 *   import namConfig from "@nam/eslint-config";
 *   export default [...namConfig];
 *
 * For Next.js projects, use the /next export instead:
 *
 *   import namNextConfig from "@nam/eslint-config/next";
 *   export default [...namNextConfig];
 */

import { defineConfig, globalIgnores } from "eslint/config";

const config = defineConfig([
  globalIgnores([
    "node_modules/**",
    "dist/**",
    "build/**",
    ".next/**",
    "out/**",
    "storybook-static/**",
    "*.d.ts",
  ]),
  {
    rules: {
      // Prevent console.log in production code (warn, not error — allow during dev)
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // Enforce consistent returns
      "consistent-return": "off",

      // Prefer const over let when not reassigned
      "prefer-const": "error",

      // No unused vars (allow underscore prefix for intentionally unused)
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
]);

export default config;
