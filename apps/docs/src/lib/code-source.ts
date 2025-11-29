import fs from "node:fs/promises"
import path from "node:path"

import type { Framework } from "@/constants/frameworks"

export const getExampleSource = async (
  framework: Framework,
  example: string
) => {
  try {
    // Construct the path to the example file
    const packagesPath = path.resolve(process.cwd(), "../../packages")
    const examplePath = path.join(
      packagesPath,
      framework,
      "src/examples",
      `${example}.tsx`
    )

    const content = await fs.readFile(examplePath, "utf-8")
    const [, name, lang] = examplePath.match(/([\w-]+)\.(tsx|ts|vue)$/) || []

    return {
      filename: `${name}.${lang}`,
      content,
      lang: lang as "tsx" | "ts" | "vue",
    }
  } catch (error) {
    console.error(`Failed to load example source: ${example}`, error)
    return null
  }
}
