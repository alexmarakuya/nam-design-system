/**
 * Convert a string to a URL-friendly slug.
 * Handles common diacritics (Thai transliterations, European accents).
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[āàáâãä]/g, "a")
    .replace(/[ēèéêë]/g, "e")
    .replace(/[īìíîï]/g, "i")
    .replace(/[ōòóôõö]/g, "o")
    .replace(/[ūùúûü]/g, "u")
    .replace(/[ñ]/g, "n")
    .replace(/[ç]/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Truncate a string to a maximum length with ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}

/**
 * Capitalize the first letter of a string.
 */
export function capitalize(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}
