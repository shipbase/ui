import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["src/**/*.{ts,tsx}", "!src/**/stories/**"],
  exports: false,
  unbundle: true,
  loader: {
    ".jpg": "asset",
  },
})
