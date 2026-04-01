import { describe, it, expect } from "vitest";
import { slugify, truncate, capitalize } from "../string/index";

describe("slugify", () => {
  it("lowercases and replaces spaces with hyphens", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("handles diacritics (macrons, accents)", () => {
    expect(slugify("NāM Studio")).toBe("nam-studio");
    expect(slugify("Cafe Résumé")).toBe("cafe-resume");
  });

  it("strips non-alphanumeric characters", () => {
    expect(slugify("Hello! @World#")).toBe("hello-world");
  });

  it("removes leading and trailing hyphens", () => {
    expect(slugify("--hello--")).toBe("hello");
  });

  it("collapses consecutive special chars into a single hyphen", () => {
    expect(slugify("a   b   c")).toBe("a-b-c");
  });

  it("handles ñ and ç", () => {
    expect(slugify("Niño François")).toBe("nino-francois");
  });

  it("returns empty string for empty input", () => {
    expect(slugify("")).toBe("");
  });
});

describe("truncate", () => {
  it("returns original string if shorter than maxLength", () => {
    expect(truncate("hello", 10)).toBe("hello");
  });

  it("truncates and adds ellipsis", () => {
    const result = truncate("Hello wonderful world", 10);
    expect(result.length).toBeLessThanOrEqual(11); // 10 + ellipsis char
    expect(result).toContain("\u2026");
  });

  it("returns original string if exactly maxLength", () => {
    expect(truncate("12345", 5)).toBe("12345");
  });
});

describe("capitalize", () => {
  it("capitalizes first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("returns empty string for empty input", () => {
    expect(capitalize("")).toBe("");
  });

  it("leaves already capitalized strings unchanged", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("only affects the first character", () => {
    expect(capitalize("hELLO")).toBe("HELLO");
  });
});
