import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { globSync } from "tinyglobby"
import { defineConfig } from "vite"
import viteTsconfigPaths from "vite-tsconfig-paths"
import pkg from "./package.json"

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), tailwindcss()],
  build: {
    lib: {
      entry: globSync(["src/components/ui/*.tsx", "src/examples/index.ts"]),
      formats: ["es"],
    },
    target: "esnext",
    minify: false,
    rollupOptions: {
      output: {
        esModule: true,
        preserveModules: true,
        preserveModulesRoot: "src",
      },
      external: Object.keys(pkg.peerDependencies).map((dep) => new RegExp(`^${dep}`)),
    },
  },
})
