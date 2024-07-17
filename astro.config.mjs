import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import Inspect from "vite-plugin-inspect"

export default defineConfig({
  integrations: [mdx(), react(), tailwind()],
  vite: {
    plugins: [Inspect()],
  },
  redirects: {
    "/docs": "/docs/introduction",
    "/docs/components": "/docs/components/button",
  },
})
