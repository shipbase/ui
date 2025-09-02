/**
 * Remove a single trailing slash from the end of a URL/string, if present.
 * - Preserves protocol separators (e.g. keeps `https://` intact).
 * - Leaves the root path "/" unchanged.
 */
export function removeTrailingSlash(input: string | URL): string {
  const value = typeof input === "string" ? input : input.toString()
  if (value === "/") return "/"
  return value.replace(/\/$/, "")
}
