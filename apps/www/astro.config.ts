import cloudflare from "@astrojs/cloudflare"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import inspect from "vite-plugin-inspect"

import { siteConfig } from "./src/config/site"
import { remarkPluginCodeWrapper } from "./src/lib/remark-code-wrapper"

export default defineConfig({
  site: siteConfig.url,

  adapter: cloudflare({
    imageService: "compile",
  }),

  integrations: [mdx({ remarkPlugins: [remarkPluginCodeWrapper] }), react(), sitemap()],

  vite: {
    // @ts-expect-error - Astro 5 internally depends on Vite 6 types, but the plugins work at runtime with Vite 8
    plugins: [inspect(), tailwindcss()],
    ssr: {
      external: [
        "node:path",
        "node:fs",
        "node:module",
        "node:fs/promises",
        "node:v8",
        "node:url",
        "node:process",
        "node:assert",
        "node:util",
      ],
    },
  },

  output: "server",

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
