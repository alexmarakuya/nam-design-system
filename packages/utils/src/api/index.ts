/**
 * API response helpers for Next.js route handlers.
 * These return plain objects — wrap with NextResponse.json() in your routes.
 */

/** Standard success response shape */
export function successBody<T>(data: T) {
  return { data };
}

/** Standard error response shape */
export function errorBody(message: string, details?: unknown) {
  return { error: message, ...(details ? { details } : {}) };
}

/** Common CORS headers for public API routes */
export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
} as const;

/** Cache control presets */
export const cachePresets = {
  /** 2 min cache, 10 min stale-while-revalidate */
  short: "public, s-maxage=120, stale-while-revalidate=600",
  /** 1 hour cache, 1 day stale */
  medium: "public, s-maxage=3600, stale-while-revalidate=86400",
  /** No cache */
  none: "no-store, no-cache, must-revalidate",
} as const;
