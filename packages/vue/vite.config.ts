import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import viteTsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [vue(), viteTsconfigPaths(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
