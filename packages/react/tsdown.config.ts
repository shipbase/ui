import path from "node:path"
import { fileURLToPath } from "node:url"
import { glob } from "tinyglobby"
import { defineConfig } from "tsdown"

const importGlobRE = /\bimport\.meta\.glob(?:<\w+>)?\s*\(['|"](.*)['|"]\)/g

export default defineConfig({
  entry: ["src/**/*.{ts,tsx}", "!src/**/stories/**"],
  platform: "neutral",
  exports: false,
  unbundle: true,
  logLevel: "error",
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
  },
  loader: {
    ".jpg": "asset",
  },
  plugins: [
    {
      name: "import-glob",
      transform: {
        order: "pre",
        filter: { code: importGlobRE },
        async handler(code, id) {
          const [match, globPattern] = Array.from(importGlobRE.exec(code) || [])

          const files = await glob(globPattern, {
            cwd: path.dirname(id),
            absolute: true,
          })

          let imports = ""
          for (const file of files) {
            const relative = path.relative(id, file).replace(/^\.\.\//, "./")
            imports += `"${relative}": () => import("${relative}"),\n`
          }

          return code.replace(match, `{${imports}}`)
        },
      },
    },
  ],
})
