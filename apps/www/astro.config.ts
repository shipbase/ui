import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import vue from "@astrojs/vue"
import { defineConfig } from "astro/config"
import Inspect from "vite-plugin-inspect"
import { rehypeCodeWrapper, shikiConfig } from "./src/lib/code"

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({ shikiConfig, rehypePlugins: [rehypeCodeWrapper] }),
    react(),
    vue(),
    tailwind(),
  ],
  vite: {
    plugins: [Inspect()],
    build: {
      dynamicImportVarsOptions: {
        warnOnError: true,
      },
      rollupOptions: {
        onLog(level, log, handler) {
          if (log.code === "SOURCEMAP_ERROR") {
            return
          }
          handler(level, log)
        },
      },
    },
  },
  trailingSlash: "never",
  redirects: {
    "/docs": "/docs/introduction",
    "/docs/components": "/docs/components/accordion",
  },
})
