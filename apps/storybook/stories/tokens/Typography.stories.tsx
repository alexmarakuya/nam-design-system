import type { Meta, StoryObj } from "@storybook/react-vite";

function TypographyPanel() {
  const scale = [
    { name: "text-xs", size: "var(--text-xs)", px: "12px" },
    { name: "text-sm", size: "var(--text-sm)", px: "14px" },
    { name: "text-base", size: "var(--text-base)", px: "16px" },
    { name: "text-lg", size: "var(--text-lg)", px: "18px" },
    { name: "text-xl", size: "var(--text-xl)", px: "24px" },
    { name: "text-2xl", size: "var(--text-2xl)", px: "32px" },
    { name: "text-3xl", size: "var(--text-3xl)", px: "48px" },
  ];

  return (
    <div>
      <h2 style={{ marginBottom: "1.5rem" }}>Font Families</h2>
      <div
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}
      >
        <div>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--color-text-muted)",
              marginBottom: "0.25rem",
              fontFamily: "monospace",
            }}
          >
            --font-display (Epilogue)
          </p>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 600 }}>
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--color-text-muted)",
              marginBottom: "0.25rem",
              fontFamily: "monospace",
            }}
          >
            --font-mono (Sometype Mono)
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "1rem" }}>
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--color-text-muted)",
              marginBottom: "0.25rem",
              fontFamily: "monospace",
            }}
          >
            --font-editorial (Cormorant Garamond)
          </p>
          <p style={{ fontFamily: "var(--font-editorial)", fontSize: "2rem", fontStyle: "italic" }}>
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
      </div>

      <h2 style={{ marginBottom: "1rem" }}>Type Scale</h2>
      {scale.map((s) => (
        <div
          key={s.name}
          style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.75rem" }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--color-text-muted)",
              fontFamily: "monospace",
              width: "120px",
              flexShrink: 0,
            }}
          >
            {s.name} ({s.px})
          </span>
          <span style={{ fontSize: s.size }}>NāM Design System</span>
        </div>
      ))}
    </div>
  );
}

const meta: Meta = {
  title: "Tokens/Typography",
  component: TypographyPanel,
};
export default meta;

export const TypeScale: StoryObj = {};
