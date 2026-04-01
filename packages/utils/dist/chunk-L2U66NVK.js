// src/string/index.ts
function slugify(text) {
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
function truncate(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "\u2026";
}
function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export { slugify, truncate, capitalize };
//# sourceMappingURL=chunk-L2U66NVK.js.map
