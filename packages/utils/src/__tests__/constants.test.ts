import { describe, it, expect } from "vitest";
import {
  ENTITY_LABELS,
  ENTITY_COLORS,
  ENTITY_HEX,
  ENTITY_BG_CLASSES,
  STAGE_LABELS,
  STAGE_ORDER,
  FORMAT_LABELS,
} from "../constants/index";

const ALL_ENTITIES = [
  "KIN_HAUS",
  "AI_MEETUP",
  "ISLAND_CONNECTION",
  "NAM_SPACE",
  "EXTERNAL",
] as const;

describe("entity constants", () => {
  it("ENTITY_LABELS covers all entities", () => {
    for (const entity of ALL_ENTITIES) {
      expect(ENTITY_LABELS[entity]).toBeDefined();
      expect(typeof ENTITY_LABELS[entity]).toBe("string");
      expect(ENTITY_LABELS[entity].length).toBeGreaterThan(0);
    }
  });

  it("ENTITY_COLORS references CSS variables", () => {
    for (const entity of ALL_ENTITIES) {
      expect(ENTITY_COLORS[entity]).toMatch(/^var\(--nam-entity-/);
    }
  });

  it("ENTITY_HEX contains valid hex color codes", () => {
    for (const entity of ALL_ENTITIES) {
      expect(ENTITY_HEX[entity]).toMatch(/^#[0-9A-Fa-f]{6}$/);
    }
  });

  it("ENTITY_BG_CLASSES follow bg-entity-* pattern", () => {
    for (const entity of ALL_ENTITIES) {
      expect(ENTITY_BG_CLASSES[entity]).toMatch(/^bg-entity-/);
    }
  });

  it("all entity maps have the same keys", () => {
    const labelKeys = Object.keys(ENTITY_LABELS).sort();
    expect(Object.keys(ENTITY_COLORS).sort()).toEqual(labelKeys);
    expect(Object.keys(ENTITY_HEX).sort()).toEqual(labelKeys);
    expect(Object.keys(ENTITY_BG_CLASSES).sort()).toEqual(labelKeys);
  });
});

describe("stage constants", () => {
  it("STAGE_ORDER has 5 stages (excludes CANCELLED)", () => {
    expect(STAGE_ORDER).toHaveLength(5);
    expect(STAGE_ORDER).not.toContain("CANCELLED");
  });

  it("STAGE_LABELS covers all stages including CANCELLED", () => {
    for (const stage of [...STAGE_ORDER, "CANCELLED" as const]) {
      expect(STAGE_LABELS[stage]).toBeDefined();
    }
  });

  it("STAGE_ORDER starts with SEED and ends with DONE", () => {
    expect(STAGE_ORDER[0]).toBe("SEED");
    expect(STAGE_ORDER[STAGE_ORDER.length - 1]).toBe("DONE");
  });
});

describe("format constants", () => {
  it("FORMAT_LABELS has entries for all event formats", () => {
    const formats = [
      "SOCIAL",
      "MEETUP",
      "WORKSHOP",
      "PERFORMANCE",
      "COMMUNITY",
      "RETREAT",
      "POPUP",
    ] as const;
    for (const format of formats) {
      expect(FORMAT_LABELS[format]).toBeDefined();
      expect(typeof FORMAT_LABELS[format]).toBe("string");
    }
  });
});
