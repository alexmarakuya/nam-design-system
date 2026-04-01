// src/api/index.ts
function successBody(data) {
  return { data };
}
function errorBody(message, details) {
  return { error: message, ...(details ? { details } : {}) };
}
var corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
var cachePresets = {
  /** 2 min cache, 10 min stale-while-revalidate */
  short: "public, s-maxage=120, stale-while-revalidate=600",
  /** 1 hour cache, 1 day stale */
  medium: "public, s-maxage=3600, stale-while-revalidate=86400",
  /** No cache */
  none: "no-store, no-cache, must-revalidate",
};

export { successBody, errorBody, corsHeaders, cachePresets };
//# sourceMappingURL=chunk-42KWW5XW.js.map
