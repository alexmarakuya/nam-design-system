import type { Meta, StoryObj } from "@storybook/react-vite";

function ColorSwatch({ name, value, cssVar }: { name: string; value: string; cssVar: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "var(--radius-md, 8px)",
          backgroundColor: value,
          border: "1px solid var(--color-border)",
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontWeight: 600, fontSize: "0.875rem" }}>{name}</div>
        <div
          style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontFamily: "monospace" }}
        >
          {cssVar} → {value}
        </div>
      </div>
    </div>
  );
}

function ColorsPanel() {
  const primitives = [
    { name: "Deep Green", value: "#2b3a2c", cssVar: "--nam-deep-green" },
    { name: "Foliage", value: "#49584a", cssVar: "--nam-foliage" },
    { name: "Sage", value: "#b8c8b7", cssVar: "--nam-sage" },
    { name: "Sapling", value: "#a3b2a2", cssVar: "--nam-sapling" },
    { name: "Oat", value: "#e7e2d6", cssVar: "--nam-oat" },
    { name: "Cream", value: "#f5f2e9", cssVar: "--nam-cream" },
    { name: "Beige", value: "#ccc4b5", cssVar: "--nam-beige" },
    { name: "White", value: "#ffffff", cssVar: "--nam-white" },
    { name: "Slate", value: "#393834", cssVar: "--nam-slate" },
    { name: "Granite", value: "#61605c", cssVar: "--nam-granite" },
    { name: "Pebble", value: "#7d7970", cssVar: "--nam-pebble" },
    { name: "Sunwashed", value: "#d56b45", cssVar: "--nam-sunwashed" },
    { name: "Gold", value: "#c99a6a", cssVar: "--nam-gold" },
    { name: "Moss", value: "#5d7a54", cssVar: "--nam-moss" },
    { name: "Copper", value: "#a8724a", cssVar: "--nam-copper" },
  ];

  const entities = [
    { name: "Kin Haus", value: "#D97706", cssVar: "--nam-entity-kinhaus" },
    { name: "AI Meetup", value: "#7C3AED", cssVar: "--nam-entity-ai-meetup" },
    { name: "Island Connection", value: "#059669", cssVar: "--nam-entity-island-connection" },
    { name: "NāM Space", value: "#0891B2", cssVar: "--nam-entity-nam-space" },
    { name: "External", value: "#6B7280", cssVar: "--nam-entity-external" },
  ];

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Primitive Palette</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
        {primitives.map((c) => (
          <ColorSwatch key={c.cssVar} {...c} />
        ))}
      </div>

      <h2 style={{ margin: "2rem 0 1rem" }}>Entity Colors</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
        {entities.map((c) => (
          <ColorSwatch key={c.cssVar} {...c} />
        ))}
      </div>

      <h2 style={{ margin: "2rem 0 1rem" }}>Semantic Tokens (theme-dependent)</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
        {[
          { name: "Background", value: "var(--color-bg-base)", cssVar: "--color-bg-base" },
          { name: "Surface", value: "var(--color-bg-surface)", cssVar: "--color-bg-surface" },
          { name: "Card", value: "var(--color-bg-card)", cssVar: "--color-bg-card" },
          { name: "Text", value: "var(--color-text-primary)", cssVar: "--color-text-primary" },
          {
            name: "Text Secondary",
            value: "var(--color-text-secondary)",
            cssVar: "--color-text-secondary",
          },
          { name: "Accent", value: "var(--color-accent)", cssVar: "--color-accent" },
          { name: "Border", value: "var(--color-border)", cssVar: "--color-border" },
        ].map((c) => (
          <ColorSwatch key={c.cssVar} {...c} />
        ))}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Tokens/Colors",
  component: ColorsPanel,
};
export default meta;

export const Palette: StoryObj = {};
