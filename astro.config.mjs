import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

export default defineConfig({
  integrations: [mdx(), react(), tailwind()],
  devToolbar: {
    enabled: true,
  },
  redirects: {
    "/docs": "/docs/introduction",
    "/docs/components": "/docs/components/button",
  },
})
