import type { Meta, StoryObj } from "@storybook/react-vite";

function SpacingPanel() {
  const scale = [
    { name: "--space-1", value: "0.25rem", px: "4px" },
    { name: "--space-2", value: "0.5rem", px: "8px" },
    { name: "--space-3", value: "0.75rem", px: "12px" },
    { name: "--space-4", value: "1rem", px: "16px" },
    { name: "--space-5", value: "1.25rem", px: "20px" },
    { name: "--space-6", value: "1.5rem", px: "24px" },
    { name: "--space-8", value: "2rem", px: "32px" },
    { name: "--space-10", value: "2.5rem", px: "40px" },
    { name: "--space-12", value: "3rem", px: "48px" },
    { name: "--space-16", value: "4rem", px: "64px" },
  ];

  const radii = [
    { name: "--radius-sm", value: "4px" },
    { name: "--radius-md", value: "8px" },
    { name: "--radius-lg", value: "12px" },
    { name: "--radius-xl", value: "20px" },
    { name: "--radius-2xl", value: "28px" },
    { name: "--radius-full", value: "9999px" },
  ];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Spacing Scale</h2>
      {scale.map((s) => (
        <div
          key={s.name}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontFamily: "monospace",
              color: "var(--color-text-muted)",
              width: "140px",
              flexShrink: 0,
            }}
          >
            {s.name} ({s.px})
          </span>
          <div
            style={{
              width: s.value,
              height: "24px",
              backgroundColor: "var(--color-accent)",
              borderRadius: "4px",
              opacity: 0.7,
            }}
          />
        </div>
      ))}

      <h2 style={{ margin: "2rem 0 1rem" }}>Border Radius</h2>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {radii.map((r) => (
          <div key={r.name} style={{ textAlign: "center" }}>
            <div
              style={{
                width: 64,
                height: 64,
                backgroundColor: "var(--color-accent)",
                borderRadius: r.value,
                opacity: 0.7,
                marginBottom: "0.5rem",
              }}
            />
            <span
              style={{
                fontSize: "0.7rem",
                fontFamily: "monospace",
                color: "var(--color-text-muted)",
              }}
            >
              {r.name}
              <br />
              {r.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Tokens/Spacing & Radius",
  component: SpacingPanel,
};
export default meta;

export const Scale: StoryObj = {};
