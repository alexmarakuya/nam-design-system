/**
 * Format a date as a short human-readable string.
 * Example: "Sat, Mar 15, 2026"
 */
export function formatDate(date: Date | string | null): string {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Format a date with time.
 * Example: "Sat, Mar 15, 10:30 AM"
 */
export function formatDateTime(date: Date | string | null): string {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

/**
 * Format a date for HTML datetime-local input value.
 * Example: "2026-03-15T10:30"
 */
export function formatDateForInput(date: Date | string | null): string {
  if (!date) return "";
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

/**
 * Format a date into compact parts for calendar-style display.
 * Returns { monthShort: "MAR", dayNum: "15" }
 */
export function formatDateParts(date: Date | string | null): {
  monthShort: string;
  dayNum: string;
} {
  if (!date) return { monthShort: "", dayNum: "" };
  const d = new Date(date);
  return {
    monthShort: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    dayNum: String(d.getDate()),
  };
}

/**
 * Generate an ICS calendar event string.
 * Uses Asia/Bangkok timezone by default.
 */
export function generateICS(event: {
  title: string;
  startDate: Date | string;
  endDate?: Date | string;
  location?: string;
  description?: string;
  timezone?: string;
}): string {
  const tz = event.timezone || "Asia/Bangkok";
  const start = new Date(event.startDate);
  const end = event.endDate
    ? new Date(event.endDate)
    : new Date(start.getTime() + 2 * 60 * 60 * 1000);

  const fmt = (d: Date) =>
    d
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//NāM//Events//EN",
    "BEGIN:VEVENT",
    `DTSTART;TZID=${tz}:${fmt(start)}`,
    `DTEND;TZID=${tz}:${fmt(end)}`,
    `SUMMARY:${event.title}`,
    event.location ? `LOCATION:${event.location}` : "",
    event.description ? `DESCRIPTION:${event.description.replace(/\n/g, "\\n")}` : "",
    `UID:${Date.now()}@nam.space`,
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .join("\r\n");
}
