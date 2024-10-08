import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import vue from "@astrojs/vue"
import { transformerMetaHighlight } from "@shikijs/transformers"
import { defineConfig } from "astro/config"
import type { Element, Root } from "hast"
import Inspect from "vite-plugin-inspect"
import rehypeCodeWrapper from "./src/lib/rehype-code-wrapper"

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      shikiConfig: {
        theme: "vesper",
        transformers: [
          {
            root(root: Root) {
              const pre = root.children?.[0] as Element
              if (pre) pre.properties.source = this.source
            },
          },
          transformerMetaHighlight({
            className: "line--highlighted",
          }),
        ],
      },
      rehypePlugins: [rehypeCodeWrapper],
    }),
    react(),
    vue(),
    tailwind(),
  ],
  vite: {
    // @ts-ignore FIXME when inspect vite@6
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
