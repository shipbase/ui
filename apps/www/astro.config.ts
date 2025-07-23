import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
// import vue from "@astrojs/vue"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import inspect from "vite-plugin-inspect"

import { remarkCodeWrapper } from "./src/lib/remark-code-wrapper"

// https://astro.build/configo
export default defineConfig({
  integrations: [
    mdx({ remarkPlugins: [remarkCodeWrapper] }),
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
