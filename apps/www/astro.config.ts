import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
// import vue from "@astrojs/vue"
import { transformerMetaHighlight } from "@shikijs/transformers"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import type { Element, Root } from "hast"
import inspect from "vite-plugin-inspect"
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
    // vue({ include: ["**/*.vue"] }),
  ],
  vite: {
    plugins: [inspect(), tailwindcss()],
  },
  trailingSlash: "never",
  redirects: {
    "/docs": "/docs/introduction",
    "/docs/components": "/docs/components/accordion",
  },
  devToolbar: {
    enabled: true,
  },
})
