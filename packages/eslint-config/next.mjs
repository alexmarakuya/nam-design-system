/**
 * @nam/eslint-config/next — ESLint config for Next.js NāM projects.
 *
 * Usage in eslint.config.mjs:
 *
 *   import namNextConfig from "@nam/eslint-config/next";
 *   export default [...namNextConfig];
 */

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    rules: {
      // Prefer const
      "prefer-const": "error",

      // Allow unused vars with underscore prefix
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // Allow any in specific cases (warn, not error)
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]);

export default config;
