import path from "node:path"
import { defineConfig } from "tsup"
import pkg from "./package.json"

export default defineConfig({
  entry: ["src/index.ts"],
  format: "esm",
  target: "node14",
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  define: {
    VERSION: JSON.stringify(pkg.version),
  },
})
