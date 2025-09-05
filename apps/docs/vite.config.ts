import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import react from "@vitejs/plugin-react"
import mdx from "fumadocs-mdx/vite"
import { defineConfig } from "vite"
import tsConfigPaths from "vite-tsconfig-paths"
import * as sourceConfig from "./src/source.config"

const FumadocsDeps = ["fumadocs-core", "fumadocs-ui"]

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    noExternal: FumadocsDeps,
  },
  optimizeDeps: {
    exclude: FumadocsDeps,
  },
  plugins: [
    mdx(sourceConfig, {
      configPath: "./src/source.config.ts",
      generateIndexFile: false,
    }),
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      tsr: {
        routesDirectory: "src/app",
        verboseFileRoutes: false,
      },
      customViteReactPlugin: true,
      prerender: { enabled: true },
    }),
    react(),
  ],
})
