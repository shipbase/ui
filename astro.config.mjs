import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import Inspect from "vite-plugin-inspect"

import { shikiConfig } from "./src/config/shiki"

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({ shikiConfig }), react(), tailwind()],
  vite: {
    plugins: [Inspect()],
  },
  redirects: {
    "/docs": "/docs/introduction",
    "/docs/components": "/docs/components/button",
  },
})
