import { fileURLToPath } from "node:url"
import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["src/**/*.{ts,tsx}", "!src/env.d.ts", "!src/**/stories/**"],
  platform: "neutral",
  exports: false,
  unbundle: true,
  logLevel: "error",
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
  },
  loader: {
    ".jpg": "asset",
  },
})
