import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import inspect from "vite-plugin-inspect"

import { remarkPluginCodeWrapper } from "./src/lib/remark-code-wrapper"

// https://astro.build/configo
export default defineConfig({
  integrations: [mdx({ remarkPlugins: [remarkPluginCodeWrapper] }), react()],

  vite: {
    plugins: [inspect(), tailwindcss()],
  },

  trailingSlash: "ignore",

  redirects: {
    "/docs": "/docs/introduction",
    "/docs/components": "/docs/components/react/accordion",
  },

  devToolbar: {
    enabled: true,
  },

  experimental: {
    clientPrerender: true,
    contentIntellisense: true,
    chromeDevtoolsWorkspace: true,
  },
})
