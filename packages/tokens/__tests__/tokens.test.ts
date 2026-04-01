import { describe, it, expect } from "vitest";
import { readFile } from "fs/promises";
import path from "path";

describe("tokens.json", () => {
  let tokens: Record<string, unknown>;

  async function loadTokens() {
    if (!tokens) {
      const raw = await readFile(path.resolve(__dirname, "../dist/tokens.json"), "utf-8");
      tokens = JSON.parse(raw);
    }
    return tokens;
  }

  it("is valid JSON with a $schema field", async () => {
    const t = await loadTokens();
    expect(t.$schema).toBeDefined();
  });

  it("has all expected top-level categories", async () => {
    const t = await loadTokens();
    const expected = ["primitives", "typography", "spacing", "motion", "radius", "themes"];
    for (const cat of expected) {
      expect(t, `missing category: ${cat}`).toHaveProperty(cat);
    }
  });

  it("primitives include all entity colors", async () => {
    const t = await loadTokens();
    const primitives = t.primitives as Record<string, string>;
    const entityTokens = [
      "--nam-entity-kinhaus",
      "--nam-entity-ai-meetup",
      "--nam-entity-island-connection",
      "--nam-entity-nam-space",
      "--nam-entity-external",
    ];
    for (const token of entityTokens) {
      expect(primitives[token], `missing ${token}`).toBeDefined();
      expect(primitives[token]).toMatch(/^#[0-9A-Fa-f]{6}$/);
    }
  });

  it("themes include light, dark, and studio", async () => {
    const t = await loadTokens();
    const themes = t.themes as Record<string, unknown>;
    expect(themes).toHaveProperty("light");
    expect(themes).toHaveProperty("dark");
    expect(themes).toHaveProperty("studio");
  });

  it("typography defines the three font families", async () => {
    const t = await loadTokens();
    const typo = t.typography as Record<string, string>;
    expect(typo["--font-display"]).toContain("Epilogue");
    expect(typo["--font-mono"]).toContain("Sometype Mono");
    expect(typo["--font-editorial"]).toContain("Cormorant Garamond");
  });

  it("spacing values use rem units (except --space-0)", async () => {
    const t = await loadTokens();
    const spacing = t.spacing as Record<string, string>;
    for (const [key, value] of Object.entries(spacing)) {
      if (key === "--space-0") {
        expect(value).toBe("0");
      } else {
        expect(value, `${key} should use rem`).toMatch(/rem$/);
      }
    }
  });

  it("radius values are valid CSS lengths or 0", async () => {
    const t = await loadTokens();
    const radius = t.radius as Record<string, string>;
    for (const [key, value] of Object.entries(radius)) {
      expect(
        value === "0" || /^\d+px$/.test(value) || /^\d+$/.test(value),
        `${key}: "${value}" is not a valid radius`,
      ).toBe(true);
    }
  });
});
