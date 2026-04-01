/**
 * Convert a string to a URL-friendly slug.
 * Handles common diacritics (Thai transliterations, European accents).
 */
declare function slugify(text: string): string;
/**
 * Truncate a string to a maximum length with ellipsis.
 */
declare function truncate(text: string, maxLength: number): string;
/**
 * Capitalize the first letter of a string.
 */
declare function capitalize(text: string): string;

export { capitalize, slugify, truncate };
