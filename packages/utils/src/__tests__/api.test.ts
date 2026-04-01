import { describe, it, expect } from "vitest";
import { successBody, errorBody, corsHeaders, cachePresets } from "../api/index";

describe("successBody", () => {
  it("wraps data in a { data } envelope", () => {
    const result = successBody({ id: 1 });
    expect(result).toEqual({ data: { id: 1 } });
  });

  it("works with arrays", () => {
    const result = successBody([1, 2, 3]);
    expect(result).toEqual({ data: [1, 2, 3] });
  });

  it("works with null", () => {
    const result = successBody(null);
    expect(result).toEqual({ data: null });
  });
});

describe("errorBody", () => {
  it("returns error message", () => {
    const result = errorBody("Not found");
    expect(result).toEqual({ error: "Not found" });
  });

  it("includes details when provided", () => {
    const result = errorBody("Validation failed", { field: "email" });
    expect(result).toEqual({
      error: "Validation failed",
      details: { field: "email" },
    });
  });

  it("omits details key when not provided", () => {
    const result = errorBody("Server error");
    expect(result).not.toHaveProperty("details");
  });
});

describe("corsHeaders", () => {
  it("allows all origins", () => {
    expect(corsHeaders["Access-Control-Allow-Origin"]).toBe("*");
  });

  it("includes GET and POST methods", () => {
    expect(corsHeaders["Access-Control-Allow-Methods"]).toContain("GET");
    expect(corsHeaders["Access-Control-Allow-Methods"]).toContain("POST");
  });
});

describe("cachePresets", () => {
  it("short preset has s-maxage", () => {
    expect(cachePresets.short).toContain("s-maxage=");
  });

  it("none preset disables caching", () => {
    expect(cachePresets.none).toContain("no-store");
  });

  it("has short, medium, and none presets", () => {
    expect(cachePresets).toHaveProperty("short");
    expect(cachePresets).toHaveProperty("medium");
    expect(cachePresets).toHaveProperty("none");
  });
});
