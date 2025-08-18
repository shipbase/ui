import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import viteTsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), tailwindcss()],
})
