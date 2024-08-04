import { fileURLToPath } from "node:url"
import react from "@vitejs/plugin-react"
import { globbySync } from "globby"
import { defineConfig } from "vite"
import viteTsconfigPaths from "vite-tsconfig-paths"
import pkg from "./package.json"

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  build: {
    minify: false,
    lib: {
      entry: globbySync("src/examples/**/*.{ts,tsx}"),
      formats: ["es"],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      watch: {
        include: "src/examples/**",
      },
      external: [
        /@ark-ui/,
        "react/jsx-runtime",
        ...Object.keys(pkg.dependencies ?? {}),
        ...Object.keys(pkg.peerDependencies ?? {}),
      ],
      output: {
        preserveModules: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
