import { cyan, red } from "kleur/colors"
import prompts from "prompts"
import type { Config } from "../config/schema"
import {
  DEFAULT_COMPONENTS,
  DEFAULT_STYLE,
  DEFAULT_TAILWIND_BASE_COLOR,
  DEFAULT_TAILWIND_CONFIG,
} from "../constants/config"
import { logger } from "../utils/logger"
import { prepare } from "../utils/prepare"

export async function init(initialLibrary: Config["library"]) {
  let result: { library?: Config["library"] } = {}

  try {
    await prepare()
    result = await prompts(
      [
        {
          type: () => (initialLibrary ? null : "select"),
          name: "library",
          message: "Pick your favorite library",
          choices: [
            { title: "React", value: "react" },
            { title: "Vue", value: "vue" },
          ],
          initial: initialLibrary,
        },
        {
          type: null,
          name: "style",
          message: `Which ${cyan("style")} would you like to use?`,
          choices: [{ title: "Default", value: "default" }],
          initial: DEFAULT_STYLE,
        },
        {
          type: null,
          name: "tailwindBaseColor",
          message: `Which color would you like to use as the ${cyan("base color")}?`,
          choices: [{ title: "Slate", value: "slate" }],
          initial: DEFAULT_TAILWIND_BASE_COLOR,
        },
        {
          type: "text",
          name: "tailwindCss",
          message: `Where is your ${cyan("global CSS")} file?`,
        },
        {
          type: "toggle",
          name: "tailwindCssVariables",
          message: `Would you like to use ${cyan("CSS variables")} for theming?`,
          initial: true,
          active: "yes",
          inactive: "no",
        },
        {
          type: "text",
          name: "tailwindConfig",
          message: `Where is your ${cyan("tailwind.config.js")} located?`,
          initial: DEFAULT_TAILWIND_CONFIG,
        },
        {
          type: "text",
          name: "aliasComponents",
          message: `Configure the import alias for ${cyan("components")}:`,
          initial: DEFAULT_COMPONENTS,
        },
      ],
      {
        onCancel: () => {
          throw new Error("✖ Operation cancelled")
        },
      }
    )
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(error.message)
    } else {
      logger.error("unknown errors")
    }
    process.exit(1)
  }

  const { library = initialLibrary } = result

  // fs.writeFileSync("components.json",)
  console.log({
    initialLibrary,
    ...result,
  })
}
