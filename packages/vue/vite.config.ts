import { fileURLToPath } from "node:url"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { globSync } from "tinyglobby"
import { defineConfig } from "vite"
import viteTsconfigPaths from "vite-tsconfig-paths"
import pkg from "./package.json"

export default defineConfig({
  plugins: [vue(), vueJsx(), viteTsconfigPaths()],
  build: {
    minify: false,
    lib: {
      entry: globSync(["src/components", "src/examples"]),
      formats: ["es"],
      fileName: (_, entryName) =>
        entryName.endsWith(".vue")
          ? entryName.replace(/\.vue$/, ".js")
          : `${entryName}.js`,
    },
    rollupOptions: {
      external: [/@ark-ui/, ...Object.keys(pkg.devDependencies ?? {})],
      output: {
        preserveModules: true,
      },
      onLog(level, log, handler) {
        if (log.code === "SOURCEMAP_ERROR") return
        handler(level, log)
      },
    },
  },
})
