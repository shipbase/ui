import { fileURLToPath } from "node:url"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { globbySync } from "globby"
import { defineConfig } from "vite"
import viteTsconfigPaths from "vite-tsconfig-paths"
import pkg from "./package.json"

export default defineConfig({
  plugins: [vue(), vueJsx(), viteTsconfigPaths()],
  build: {
    minify: false,
    lib: {
      entry: globbySync("src/examples/**/*.{ts,tsx}"),
      formats: ["es"],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    emptyOutDir: false,
    rollupOptions: {
      external: [
        /@ark-ui/,
        ...Object.keys(pkg.dependencies ?? {}),
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
