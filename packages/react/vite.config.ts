import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { globSync } from "tinyglobby"
import { defineConfig } from "vite"
import viteTsconfigPaths from "vite-tsconfig-paths"
import pkg from "./package.json"

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), tailwindcss()],
  build: {
    minify: false,
    lib: {
      entry: globSync(["src/components", "src/examples"]),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        /@ark-ui/,
        "react/jsx-runtime",
        ...Object.keys(pkg.dependencies ?? {}),
      ],
      output: {
        preserveModules: true,
      },
    },
  },
})
