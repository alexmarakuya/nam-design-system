import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "node",
    include: ["packages/**/*.test.ts", "packages/**/*.test.tsx"],
  },
  resolve: {
    alias: {
      "@nam/utils": path.resolve(__dirname, "packages/utils/src"),
      "@nam/tokens": path.resolve(__dirname, "packages/tokens"),
      "@nam/react": path.resolve(__dirname, "packages/react/src"),
    },
  },
});
