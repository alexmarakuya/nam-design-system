/**
 * Format a date as a short human-readable string.
 * Example: "Sat, Mar 15, 2026"
 */
declare function formatDate(date: Date | string | null): string;
/**
 * Format a date with time.
 * Example: "Sat, Mar 15, 10:30 AM"
 */
declare function formatDateTime(date: Date | string | null): string;
/**
 * Format a date for HTML datetime-local input value.
 * Example: "2026-03-15T10:30"
 */
declare function formatDateForInput(date: Date | string | null): string;
/**
 * Format a date into compact parts for calendar-style display.
 * Returns { monthShort: "MAR", dayNum: "15" }
 */
declare function formatDateParts(date: Date | string | null): {
  monthShort: string;
  dayNum: string;
};
/**
 * Generate an ICS calendar event string.
 * Uses Asia/Bangkok timezone by default.
 */
declare function generateICS(event: {
  title: string;
  startDate: Date | string;
  endDate?: Date | string;
  location?: string;
  description?: string;
  timezone?: string;
}): string;

export { formatDate, formatDateForInput, formatDateParts, formatDateTime, generateICS };
