import fs from "node:fs/promises"
import path from "node:path"
import type { Framework } from "@/atoms/framework"
import { type ResolveOptions, findExports, resolvePath } from "mlly"

const resolvePathAndReadFile = async (id: string, options: ResolveOptions) => {
  try {
    const filePath = await resolvePath(id, options)
    return fs.readFile(filePath, "utf-8")
  } catch (error) {
    console.log("error", error)
    return false
  }
}

export const getExampleSource = async (framework: Framework, name: string) => {
  return resolvePathAndReadFile(`@ui/${framework}/examples/${name}`, {
    conditions: ["source"],
  })
}

export const getComponentSource = async (
  framework: Framework,
  name: string
) => {
  switch (framework) {
    case "react": {
      return [
        await resolvePathAndReadFile(`@ui/react/${name}`, {
          conditions: ["source"],
        }),
      ]
    }

    case "vue": {
      const entryPath = await resolvePath(`@ui/vue/${name}`, {
        conditions: ["source"],
      })
      const entry = await resolvePathAndReadFile(`@ui/vue/${name}`, {
        conditions: ["source"],
      })

      if (entry) {
        const exports = await findExports(entry)
        const sources = await Promise.all(
          exports
            .filter((exp) => exp.specifier?.startsWith("./"))
            .map(async (exp) => {
              console.log("exp", exp)
              return fs.readFile(
                // biome-ignore lint/style/noNonNullAssertion: <explanation>
                path.resolve(path.dirname(entryPath), exp.specifier!),
                "utf-8"
              )
            })
        )
        return [...sources, entry]
      }
      return []
    }
  }
}
