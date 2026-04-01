import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.tsx"],
  framework: "@storybook/react-vite",
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  viteFinal: (config) => {
    config.esbuild = {
      ...config.esbuild,
      jsx: "automatic",
    };
    return config;
  },
};

export default config;
