// src/date/index.ts
function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
function formatDateTime(date) {
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
function formatDateForInput(date) {
  if (!date) return "";
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}
function formatDateParts(date) {
  if (!date) return { monthShort: "", dayNum: "" };
  const d = new Date(date);
  return {
    monthShort: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    dayNum: String(d.getDate()),
  };
}
function generateICS(event) {
  const tz = event.timezone || "Asia/Bangkok";
  const start = new Date(event.startDate);
  const end = event.endDate
    ? new Date(event.endDate)
    : new Date(start.getTime() + 2 * 60 * 60 * 1e3);
  const fmt = (d) =>
    d
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//N\u0101M//Events//EN",
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

export { formatDate, formatDateTime, formatDateForInput, formatDateParts, generateICS };
//# sourceMappingURL=chunk-GESGIYKY.js.map
