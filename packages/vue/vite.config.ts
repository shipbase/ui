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
      entry: globbySync("src/**/*.{ts,tsx,vue}", {
        ignore: ["**/*.stories.ts"],
      }),
      formats: ["es"],
      fileName: (_, entryName) =>
        entryName.endsWith(".vue")
          ? entryName.replace(/\.vue$/, ".js")
          : `${entryName}.js`,
    },
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
