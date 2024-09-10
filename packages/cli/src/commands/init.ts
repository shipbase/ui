import fs from "node:fs"
import type { Config } from "src/config/schema"

import prompts from "prompts"

export async function init(framework: Config["framework"]) {
  const result = await prompts([
    {
      type: () => (framework ? null : "autocomplete"),
      name: "framework",
      message: "Pick your favorite actor",
      choices: [
        { title: "React", value: "react" },
        { title: "Vue", value: "vue" },
      ],
      initial: () => framework,
    },
  ])

  fs.writeFileSync("components.json", JSON.stringify(result, null, 2))
  console.log(framework, result)
}
