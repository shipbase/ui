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
      entry: globbySync("src/**/*.{ts,tsx}", {
        ignore: ["**/*.stories.ts"],
      }),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        /@ark-ui/,
        "react/jsx-runtime",
        // ...Object.keys(pkg.dependencies ?? {}),
        ...Object.keys(pkg.peerDependencies ?? {}),
      ],
      output: {
        preserveModules: true,
      },
      onLog(level, log, handler) {
        if (log.code === "SOURCEMAP_ERROR") return
        handler(level, log)
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
