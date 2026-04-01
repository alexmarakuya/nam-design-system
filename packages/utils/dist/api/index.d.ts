/**
 * API response helpers for Next.js route handlers.
 * These return plain objects — wrap with NextResponse.json() in your routes.
 */
/** Standard success response shape */
declare function successBody<T>(data: T): {
  data: T;
};
/** Standard error response shape */
declare function errorBody(
  message: string,
  details?: unknown,
): {
  details?: {} | undefined;
  error: string;
};
/** Common CORS headers for public API routes */
declare const corsHeaders: {
  readonly "Access-Control-Allow-Origin": "*";
  readonly "Access-Control-Allow-Methods": "GET, POST, OPTIONS";
  readonly "Access-Control-Allow-Headers": "Content-Type, Authorization";
};
/** Cache control presets */
declare const cachePresets: {
  /** 2 min cache, 10 min stale-while-revalidate */
  readonly short: "public, s-maxage=120, stale-while-revalidate=600";
  /** 1 hour cache, 1 day stale */
  readonly medium: "public, s-maxage=3600, stale-while-revalidate=86400";
  /** No cache */
  readonly none: "no-store, no-cache, must-revalidate";
};

export { cachePresets, corsHeaders, errorBody, successBody };
