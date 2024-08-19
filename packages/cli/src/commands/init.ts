import fs from "node:fs/promises"
import path from "node:path"
import { safeResolveAndRead } from "@ui/lib/utils/mlly"
import { cyan } from "kleur/colors"
import ora from "ora"
import prompts from "prompts"
import {
  type Config,
  type UserConfig,
  userConfigSchema,
} from "../config/schema"
import {
  DEFAULT_COMPONENTS,
  DEFAULT_STYLE,
  DEFAULT_TAILWIND_BASE_COLOR,
  DEFAULT_TAILWIND_CONFIG,
  DEFAULT_UTILS,
  LIBRARIES,
  TAILWIND_CSS_FILE_PATH,
} from "../constants"
import { logger } from "../utils/logger"
import { prepare } from "../utils/prepare"

export async function init({ library }: { library?: Config["library"] }) {
  let userConfig: UserConfig

  try {
    await prepare()
    userConfig = await promptConfig({ library })

    const { write } = await prompts({
      type: "confirm",
      name: "write",
      message: `Write configuration to ${cyan("components.json")}. Proceed?`,
      initial: true,
    })

    // Write components.json.
    if (write) {
      const writeSpinner = ora("Writing components.json...").start()
      const targetPath = path.resolve(process.cwd(), "components.json")
      await fs.writeFile(
        targetPath,
        JSON.stringify(userConfig, null, 2),
        "utf8"
      )
      writeSpinner.succeed()
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(error.message)
    } else {
      logger.error("unknown errors")
    }
    process.exit(1)
  }
}

async function validateFilePath(relative: string) {
  const file = await safeResolveAndRead(path.resolve(process.cwd(), relative))
  if (!file.success)
    return "File not found. Please check the path and try again."
  return true
}

async function validateTailwindGlobalCss(relative: string) {
  const file = await safeResolveAndRead(path.resolve(process.cwd(), relative))
  if (!file.success)
    return "File not found. Please check the path and try again."
  if (!file.result.includes("@tailwind base")) {
    return "The file does not include '@tailwind base'. Please ensure it contains the necessary Tailwind directives."
  }
  return true
}

async function promptConfig(defaultConfig: Partial<UserConfig>) {
  const result = await prompts(
    [
      {
        type:
          defaultConfig.library &&
          LIBRARIES.findIndex((lib) => lib.value === defaultConfig.library) > -1
            ? null
            : "select",
        name: "library",
        initial: defaultConfig.library,
        message: "Pick your favorite library",
        choices: LIBRARIES,
      },
      {
        type: null, // TODO: Implement toggle
        name: "typescript",
        message: `Would you like to use ${cyan("TypeScript")} (recommended)?`,
        initial: true,
        active: "yes",
        inactive: "no",
      },
      {
        type: null, // TODO: Implement select
        name: "style",
        message: `Which ${cyan("style")} would you like to use?`,
        choices: [{ title: "Default", value: "default" }],
        initial: DEFAULT_STYLE,
      },
      {
        type: null, // TODO: Implement select
        name: "tailwindBaseColor",
        message: `Which color would you like to use as the ${cyan("base color")}?`,
        choices: [{ title: "Slate", value: "slate" }],
        initial: DEFAULT_TAILWIND_BASE_COLOR,
      },
      {
        type: "text",
        name: "tailwindCss",
        message: `Where is your ${cyan("global CSS")} file?`,
        initial: TAILWIND_CSS_FILE_PATH.vite,
        validate: validateTailwindGlobalCss,
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
        type: null, // TODO: Implement text
        name: "tailwindPrefix",
        message: `Are you using a custom ${cyan(
          "tailwind prefix eg. tw-"
        )}? (Leave blank if not)`,
        initial: "",
      },
      {
        type: "text",
        name: "tailwindConfig",
        message: `Where is your ${cyan("tailwind.config.js")} located?`,
        initial: DEFAULT_TAILWIND_CONFIG,
        validate: validateFilePath,
      },
      {
        type: "text",
        name: "aliasComponents",
        message: `Configure the import alias for ${cyan("components")}:`,
        initial: DEFAULT_COMPONENTS,
      },
      {
        type: "text",
        name: "utils",
        message: `Configure the import alias for ${cyan("utils")}:`,
        initial: DEFAULT_UTILS,
      },
    ],
    {
      onCancel: () => {
        throw new Error("✖ Operation cancelled")
      },
    }
  )

  return userConfigSchema.parse({
    library: defaultConfig.library ?? result.library,
    style: "default",
    tsx: true,
    tailwind: {
      config: result.tailwindConfig,
      css: result.tailwindCss,
      baseColor: "slate",
      cssVariables: result.tailwindCssVariables,
      prefix: "",
    },
    aliases: {
      components: result.aliasComponents,
      utils: result.utils,
    },
  })
}
