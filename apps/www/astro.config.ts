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
    cloudflareModules: true,
    imageService: "compile",
  }),

  integrations: [
    mdx({ remarkPlugins: [remarkPluginCodeWrapper] }),
    react(),
    sitemap(),
  ],

  vite: {
    plugins: [inspect(), tailwindcss()],
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
