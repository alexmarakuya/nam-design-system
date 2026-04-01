import type { Preview } from "@storybook/react-vite";
import "@nam/tokens/tokens.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "NāM theme",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light (Earth)" },
          { value: "dark", title: "Dark" },
          { value: "studio", title: "Studio" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";
      return (
        <div
          data-theme={theme}
          style={{
            backgroundColor: "var(--color-bg-base)",
            color: "var(--color-text-primary)",
            padding: "2rem",
            minHeight: "100vh",
            fontFamily: "var(--font-mono)",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
