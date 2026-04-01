import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, Button, Badge, Logo, Input } from "@nam/react";

function PatternsPanel() {
  return (
    <div style={{ maxWidth: 720 }}>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-2xl)",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}
      >
        Usage Patterns
      </h1>
      <p style={{ color: "var(--color-text-secondary)", marginBottom: "2rem" }}>
        When and how to use each component. Follow these conventions for a consistent experience
        across all NāM products.
      </p>

      {/* Logo */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-xl)",
            fontWeight: 600,
            marginBottom: "0.75rem",
          }}
        >
          Logo
        </h2>
        <Card padding="lg">
          <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginBottom: "1rem" }}>
            <Logo href={null} style={{ height: "1.5rem", color: "var(--color-text-primary)" }} />
            <Logo href={null} style={{ height: "1.5rem", color: "var(--color-accent)" }} />
          </div>
          <ul
            style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--color-text-secondary)" }}
          >
            <li>
              <strong>Default color:</strong> Use text-primary (dark) for headers/nav, accent
              (terracotta) for login/splash screens
            </li>
            <li>
              <strong>Link target:</strong> Always links to <code>/</code> in public sites,{" "}
              <code>/dashboard</code> in admin tools
            </li>
            <li>
              <strong>Size:</strong> <code>h-6</code> (1.5rem) standard, <code>h-8</code> for
              hero/splash
            </li>
            <li>
              <strong>In Next.js:</strong> Pass <code>as={"{Link}"}</code> for client-side routing
            </li>
          </ul>
        </Card>
      </section>

      {/* Buttons */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-xl)",
            fontWeight: 600,
            marginBottom: "0.75rem",
          }}
        >
          Button
        </h2>
        <Card padding="lg">
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Cancel</Button>
          </div>
          <ul
            style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--color-text-secondary)" }}
          >
            <li>
              <strong>Primary:</strong> One per view. The main action — "Save", "Create", "Sign in"
            </li>
            <li>
              <strong>Secondary:</strong> Supporting actions — "Learn More", "View Details"
            </li>
            <li>
              <strong>Ghost:</strong> Dismissive actions — "Cancel", "Skip", "Back"
            </li>
            <li>
              <strong>Never:</strong> Multiple primary buttons side by side. If two actions compete,
              one should be secondary
            </li>
          </ul>
        </Card>
      </section>

      {/* Cards */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-xl)",
            fontWeight: 600,
            marginBottom: "0.75rem",
          }}
        >
          Card
        </h2>
        <Card padding="lg">
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <Card variant="default" padding="md" style={{ flex: 1, fontSize: "0.875rem" }}>
              Default
            </Card>
            <Card variant="elevated" padding="md" style={{ flex: 1, fontSize: "0.875rem" }}>
              Elevated
            </Card>
            <Card variant="outlined" padding="md" style={{ flex: 1, fontSize: "0.875rem" }}>
              Outlined
            </Card>
          </div>
          <ul
            style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--color-text-secondary)" }}
          >
            <li>
              <strong>Default:</strong> Content containers — event cards, profile cards, form
              sections
            </li>
            <li>
              <strong>Elevated:</strong> Primary content that needs visual weight — featured items,
              main panels
            </li>
            <li>
              <strong>Outlined:</strong> Interactive selections — format pickers, option groups,
              clickable items
            </li>
          </ul>
        </Card>
      </section>

      {/* Badges */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-xl)",
            fontWeight: 600,
            marginBottom: "0.75rem",
          }}
        >
          Badge
        </h2>
        <Card padding="lg">
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            <Badge>Tag</Badge>
            <Badge variant="accent">Featured</Badge>
            <Badge variant="entity" entity="kinhaus">
              Kin Haus
            </Badge>
            <Badge variant="entity" entity="ai-meetup">
              AI Meetup
            </Badge>
            <Badge variant="entity" entity="nam-space">
              NāM Space
            </Badge>
          </div>
          <ul
            style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--color-text-secondary)" }}
          >
            <li>
              <strong>Default:</strong> Tags, categories, metadata labels
            </li>
            <li>
              <strong>Accent:</strong> Highlighted states — "Featured", "New", "Live"
            </li>
            <li>
              <strong>Entity:</strong> Always use for entity identification. Order: Kin Haus → AI
              Meetup → Island Connection → NāM Space → External
            </li>
          </ul>
        </Card>
      </section>

      {/* General conventions */}
      <section>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-xl)",
            fontWeight: 600,
            marginBottom: "0.75rem",
          }}
        >
          General Conventions
        </h2>
        <Card padding="lg">
          <ul style={{ fontSize: "0.875rem", lineHeight: 2, color: "var(--color-text-secondary)" }}>
            <li>
              <strong>Headings:</strong> Always <code>font-display</code> (Epilogue). Semibold or
              bold. Use <code>text-text-heading</code> color
            </li>
            <li>
              <strong>Body text:</strong> Always <code>font-mono</code> (Sometype Mono). Regular
              weight. Use <code>text-text-primary</code>
            </li>
            <li>
              <strong>Labels:</strong> Uppercase, <code>text-xs</code>, <code>tracking-wider</code>,{" "}
              <code>text-text-muted</code>
            </li>
            <li>
              <strong>Icons:</strong> Lucide only. 24x24 default, 16x16 inline, 20x20 in buttons.{" "}
              <code>stroke-width="2"</code>
            </li>
            <li>
              <strong>Focus rings:</strong> 2px solid accent with 2-3px offset. Already in the
              design system globals
            </li>
            <li>
              <strong>Border radius:</strong> <code>radius-lg</code> (12px) for cards,{" "}
              <code>radius-md</code> (8px) for inputs, <code>radius-full</code> for badges/pills
            </li>
            <li>
              <strong>Spacing:</strong> Use the 4px scale. Prefer <code>gap</code> over margins
              between siblings
            </li>
          </ul>
        </Card>
      </section>
    </div>
  );
}

const meta: Meta = {
  title: "Patterns/Usage Guide",
  component: PatternsPanel,
};
export default meta;

export const Guide: StoryObj = {};
