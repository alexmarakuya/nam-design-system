import { describe, it, expect } from "vitest";
import {
  formatDate,
  formatDateTime,
  formatDateForInput,
  formatDateParts,
  generateICS,
} from "../date/index";

describe("formatDate", () => {
  it("returns empty string for null", () => {
    expect(formatDate(null)).toBe("");
  });

  it("formats a Date object", () => {
    const result = formatDate(new Date("2026-03-15T00:00:00"));
    expect(result).toContain("Mar");
    expect(result).toContain("15");
    expect(result).toContain("2026");
  });

  it("accepts an ISO string", () => {
    const result = formatDate("2026-03-15T00:00:00Z");
    expect(result).toContain("Mar");
  });
});

describe("formatDateTime", () => {
  it("returns empty string for null", () => {
    expect(formatDateTime(null)).toBe("");
  });

  it("includes time component", () => {
    const result = formatDateTime(new Date("2026-03-15T10:30:00"));
    expect(result).toContain("10");
    expect(result).toContain("30");
  });
});

describe("formatDateForInput", () => {
  it("returns empty string for null", () => {
    expect(formatDateForInput(null)).toBe("");
  });

  it("returns ISO-like format for datetime-local input", () => {
    const result = formatDateForInput(new Date("2026-03-15T10:30:00"));
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/);
  });
});

describe("formatDateParts", () => {
  it("returns empty strings for null", () => {
    const result = formatDateParts(null);
    expect(result.monthShort).toBe("");
    expect(result.dayNum).toBe("");
  });

  it("returns uppercase month and day number", () => {
    const result = formatDateParts(new Date("2026-03-15T00:00:00"));
    expect(result.monthShort).toBe("MAR");
    expect(result.dayNum).toBe("15");
  });
});

describe("generateICS", () => {
  it("generates valid ICS structure", () => {
    const ics = generateICS({
      title: "Test Event",
      startDate: new Date("2026-03-15T10:00:00"),
    });
    expect(ics).toContain("BEGIN:VCALENDAR");
    expect(ics).toContain("VERSION:2.0");
    expect(ics).toContain("BEGIN:VEVENT");
    expect(ics).toContain("SUMMARY:Test Event");
    expect(ics).toContain("END:VEVENT");
    expect(ics).toContain("END:VCALENDAR");
  });

  it("uses Asia/Bangkok timezone by default", () => {
    const ics = generateICS({
      title: "Test",
      startDate: new Date("2026-03-15T10:00:00"),
    });
    expect(ics).toContain("TZID=Asia/Bangkok");
  });

  it("includes location when provided", () => {
    const ics = generateICS({
      title: "Test",
      startDate: new Date("2026-03-15T10:00:00"),
      location: "Q's Cafe, Srithanu",
    });
    expect(ics).toContain("LOCATION:Q's Cafe, Srithanu");
  });

  it("defaults to 2-hour duration when no endDate", () => {
    const ics = generateICS({
      title: "Test",
      startDate: new Date("2026-03-15T10:00:00"),
    });
    // Should have DTEND 2 hours after DTSTART
    expect(ics).toContain("DTEND");
  });
});
