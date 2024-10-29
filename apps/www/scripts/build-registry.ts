import fs from "node:fs/promises"
import path from "node:path"
import template from "lodash-es/template"
// import { tmpdir } from "node:os"
import { resolvePath } from "mlly"
import { rimraf } from "rimraf"
// import { Project, ScriptKind, SyntaxKind } from "ts-morph"
import type { z } from "zod"
import { registry } from "../src/registry"
import { baseColors } from "../src/registry/registry-base-colors"
import {
  type ColorWithChannel,
  type ScaleColor,
  colorMapping,
  colors,
} from "../src/registry/registry-colors"
import { styles } from "../src/registry/registry-styles"
import {
  type Registry,
  type RegistryEntry,
  registryEntrySchema,
  type registryItemTypeSchema,
  registrySchema,
} from "../src/registry/schema"
import { writeFileSafe } from "./utils"

const REGISTRY_PATH = path.join(process.cwd(), "public/r")

const REGISTRY_INDEX_WHITELIST: z.infer<typeof registryItemTypeSchema>[] = [
  "registry:ui",
  // "registry:lib",
  // "registry:hook",
  // "registry:theme",
  "registry:block",
  "registry:example",
]

// const project = new Project({
//   compilerOptions: {},
// })

// async function createTempSourceFile(filename: string) {
//   const dir = await fs.mkdtemp(path.join(tmpdir(), "shadcn-"))
//   return path.join(dir, filename)
// }

// ----------------------------------------------------------------------------
// Build registry/index.json.
// ----------------------------------------------------------------------------
async function buildRegistryIndex(registry: Registry) {
  const items = registry
    .filter((item) => item.type === "registry:ui")
    .map((item) => {
      return {
        ...item,
        files: item.files?.map((file) =>
          typeof file === "string"
            ? {
                path: file,
                type: item.type,
              }
            : file
        ),
      }
    })

  await writeFileSafe(
    path.join(REGISTRY_PATH, "index.json"),
    JSON.stringify(items, null, 2)
  )
}

// ----------------------------------------------------------------------------
// Build registry/styles/[style]/[name].json.
// ----------------------------------------------------------------------------
async function buildStyles(registry: Registry) {
  for (const style of styles) {
    for (const item of registry) {
      if (!REGISTRY_INDEX_WHITELIST.includes(item.type)) {
        continue
      }
      const files = await Promise.all(
        (item.files || []).map(async (_file) => {
          const file =
            typeof _file === "string"
              ? {
                  path: _file,
                  type: item.type,
                  content: "",
                  target: "",
                }
              : _file

          // TODO: Just Support for @ui/react for now.
          const entryPath = await resolvePath("@ui/react/package.json")
          const filePath = path.resolve(
            entryPath,
            "../src/components",
            file.path
          )
          file.content = await fs.readFile(filePath, "utf8")
          return file
        })
      )

      const payload = registryEntrySchema.parse({
        ...item,
        files,
      })

      await writeFileSafe(
        path.join(REGISTRY_PATH, "styles", style.name, `${item.name}.json`),
        JSON.stringify(payload, null, 2)
      )
    }
  }
}

// ----------------------------------------------------------------------------
// Build registry/styles/index.json.
// Build registry/styles/[name]/index.json.
// ----------------------------------------------------------------------------
async function buildStylesIndex() {
  for (const style of styles) {
    const payload: RegistryEntry = {
      name: style.name,
      type: "registry:style",
      dependencies: [
        "@ark-ui/react",
        "tailwindcss-animate",
        "class-variance-authority",
        "lucide-react",
      ],
      registryDependencies: ["utils"],
      tailwind: {
        config: {
          plugins: [`require("tailwindcss-animate")`],
        },
      },
      cssVars: {},
      files: [],
    }

    await writeFileSafe(
      path.join(REGISTRY_PATH, "styles", style.name, "index.json"),
      JSON.stringify(payload, null, 2)
    )
  }
  await writeFileSafe(
    path.join(REGISTRY_PATH, "styles/index.json"),
    JSON.stringify(styles, null, 2)
  )
}

async function buildThemes() {
  // ----------------------------------------------------------------------------
  // Build registry/colors/index.json.
  // ----------------------------------------------------------------------------
  const colorsData = Object.entries(colors).reduce(
    (buf, [color, value]) => {
      if (typeof value === "string") {
        buf[color] = value
      }
      if (Array.isArray(value)) {
        buf[color] = value.map((item) => ({
          ...item,
          rgbChannel: item.rgb.replace(
            /^rgb\((\d+),(\d+),(\d+)\)$/,
            "$1 $2 $3"
          ),
          hslChannel: item.hsl.replace(
            /^hsl\(([\d.]+),([\d.]+%),([\d.]+%)\)$/,
            "$1 $2 $3"
          ),
        }))
      }
      if (typeof value === "object" && "rgb" in value && "hsl" in value) {
        buf[color] = {
          ...value,
          rgbChannel: value.rgb.replace(
            /^rgb\((\d+),(\d+),(\d+)\)$/,
            "$1 $2 $3"
          ),
          hslChannel: value.hsl.replace(
            /^hsl\(([\d.]+),([\d.]+%),([\d.]+%)\)$/,
            "$1 $2 $3"
          ),
        }
      }

      return buf
    },
    {} as Record<string, string | ColorWithChannel | ScaleColor[]>
  )

  await writeFileSafe(
    path.join(REGISTRY_PATH, "colors/index.json"),
    JSON.stringify(colorsData, null, 2)
  )

  // ----------------------------------------------------------------------------
  // Build registry/colors/[base].json.
  // ----------------------------------------------------------------------------
  const BASE_STYLES = `@tailwind base;
@tailwind components;
@tailwind utilities;
  `

  const BASE_STYLES_WITH_VARIABLES = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: <%- colors.light["background"] %>;
    --foreground: <%- colors.light["foreground"] %>;
    --card: <%- colors.light["card"] %>;
    --card-foreground: <%- colors.light["card-foreground"] %>;
    --popover: <%- colors.light["popover"] %>;
    --popover-foreground: <%- colors.light["popover-foreground"] %>;
    --primary: <%- colors.light["primary"] %>;
    --primary-foreground: <%- colors.light["primary-foreground"] %>;
    --secondary: <%- colors.light["secondary"] %>;
    --secondary-foreground: <%- colors.light["secondary-foreground"] %>;
    --muted: <%- colors.light["muted"] %>;
    --muted-foreground: <%- colors.light["muted-foreground"] %>;
    --accent: <%- colors.light["accent"] %>;
    --accent-foreground: <%- colors.light["accent-foreground"] %>;
    --destructive: <%- colors.light["destructive"] %>;
    --destructive-foreground: <%- colors.light["destructive-foreground"] %>;
    --border: <%- colors.light["border"] %>;
    --input: <%- colors.light["input"] %>;
    --ring: <%- colors.light["ring"] %>;
    --radius: 0.5rem;
    --chart-1: <%- colors.light["chart-1"] %>;
    --chart-2: <%- colors.light["chart-2"] %>;
    --chart-3: <%- colors.light["chart-3"] %>;
    --chart-4: <%- colors.light["chart-4"] %>;
    --chart-5: <%- colors.light["chart-5"] %>;
  }

  .dark {
    --background: <%- colors.dark["background"] %>;
    --foreground: <%- colors.dark["foreground"] %>;
    --card: <%- colors.dark["card"] %>;
    --card-foreground: <%- colors.dark["card-foreground"] %>;
    --popover: <%- colors.dark["popover"] %>;
    --popover-foreground: <%- colors.dark["popover-foreground"] %>;
    --primary: <%- colors.dark["primary"] %>;
    --primary-foreground: <%- colors.dark["primary-foreground"] %>;
    --secondary: <%- colors.dark["secondary"] %>;
    --secondary-foreground: <%- colors.dark["secondary-foreground"] %>;
    --muted: <%- colors.dark["muted"] %>;
    --muted-foreground: <%- colors.dark["muted-foreground"] %>;
    --accent: <%- colors.dark["accent"] %>;
    --accent-foreground: <%- colors.dark["accent-foreground"] %>;
    --destructive: <%- colors.dark["destructive"] %>;
    --destructive-foreground: <%- colors.dark["destructive-foreground"] %>;
    --border: <%- colors.dark["border"] %>;
    --input: <%- colors.dark["input"] %>;
    --ring: <%- colors.dark["ring"] %>;
    --chart-1: <%- colors.dark["chart-1"] %>;
    --chart-2: <%- colors.dark["chart-2"] %>;
    --chart-3: <%- colors.dark["chart-3"] %>;
    --chart-4: <%- colors.dark["chart-4"] %>;
    --chart-5: <%- colors.dark["chart-5"] %>;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
  [hidden] {
    display: none !important;
  }
}`

  for (const baseColor of ["slate", "gray", "zinc", "neutral", "stone"]) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const base: Record<string, any> = {
      inlineColors: {},
      cssVars: {},
    }
    for (const [mode, values] of Object.entries(colorMapping)) {
      base.inlineColors[mode] = {}
      base.cssVars[mode] = {}
      for (const [key, value] of Object.entries(values)) {
        if (typeof value === "string") {
          // Chart colors do not have a 1-to-1 mapping with tailwind colors.
          if (key.startsWith("chart-")) {
            base.cssVars[mode][key] = value
            continue
          }

          const resolvedColor = value.replace(/{{base}}-/g, `${baseColor}-`)
          base.inlineColors[mode][key] = resolvedColor

          const [resolvedBase, scale] = resolvedColor.split("-") as [
            string,
            string,
          ]
          const color = scale
            ? Array.isArray(colorsData[resolvedBase]) &&
              colorsData[resolvedBase].find(
                (item) => item.scale === Number.parseInt(scale)
              )
            : colorsData[resolvedBase]
          if (color && typeof color === "object" && "hslChannel" in color) {
            base.cssVars[mode][key] = color.hslChannel
          }
        }
      }
    }

    // Build css vars.
    base.inlineColorsTemplate = template(BASE_STYLES)({})
    base.cssVarsTemplate = template(BASE_STYLES_WITH_VARIABLES)({
      colors: base.cssVars,
    })

    await writeFileSafe(
      path.join(REGISTRY_PATH, `colors/${baseColor}.json`),
      JSON.stringify(base, null, 2)
    )

    // ----------------------------------------------------------------------------
    // Build registry/themes.css
    // ----------------------------------------------------------------------------
    const THEME_STYLES_WITH_VARIABLES = `.theme-<%- theme %> {
  --background: <%- colors.light["background"] %>;
  --foreground: <%- colors.light["foreground"] %>;

  --muted: <%- colors.light["muted"] %>;
  --muted-foreground: <%- colors.light["muted-foreground"] %>;

  --popover: <%- colors.light["popover"] %>;
  --popover-foreground: <%- colors.light["popover-foreground"] %>;

  --card: <%- colors.light["card"] %>;
  --card-foreground: <%- colors.light["card-foreground"] %>;

  --border: <%- colors.light["border"] %>;
  --input: <%- colors.light["input"] %>;

  --primary: <%- colors.light["primary"] %>;
  --primary-foreground: <%- colors.light["primary-foreground"] %>;

  --secondary: <%- colors.light["secondary"] %>;
  --secondary-foreground: <%- colors.light["secondary-foreground"] %>;

  --accent: <%- colors.light["accent"] %>;
  --accent-foreground: <%- colors.light["accent-foreground"] %>;

  --destructive: <%- colors.light["destructive"] %>;
  --destructive-foreground: <%- colors.light["destructive-foreground"] %>;

  --ring: <%- colors.light["ring"] %>;

  --radius: <%- colors.light["radius"] %>;
}

.dark .theme-<%- theme %> {
  --background: <%- colors.dark["background"] %>;
  --foreground: <%- colors.dark["foreground"] %>;

  --muted: <%- colors.dark["muted"] %>;
  --muted-foreground: <%- colors.dark["muted-foreground"] %>;

  --popover: <%- colors.dark["popover"] %>;
  --popover-foreground: <%- colors.dark["popover-foreground"] %>;

  --card: <%- colors.dark["card"] %>;
  --card-foreground: <%- colors.dark["card-foreground"] %>;

  --border: <%- colors.dark["border"] %>;
  --input: <%- colors.dark["input"] %>;

  --primary: <%- colors.dark["primary"] %>;
  --primary-foreground: <%- colors.dark["primary-foreground"] %>;

  --secondary: <%- colors.dark["secondary"] %>;
  --secondary-foreground: <%- colors.dark["secondary-foreground"] %>;

  --accent: <%- colors.dark["accent"] %>;
  --accent-foreground: <%- colors.dark["accent-foreground"] %>;

  --destructive: <%- colors.dark["destructive"] %>;
  --destructive-foreground: <%- colors.dark["destructive-foreground"] %>;

  --ring: <%- colors.dark["ring"] %>;
}`

    const themeCSS = []
    for (const theme of baseColors) {
      themeCSS.push(
        // @ts-ignore
        template(THEME_STYLES_WITH_VARIABLES)({
          colors: theme.cssVars,
          theme: theme.name,
        })
      )
    }

    await writeFileSafe(
      path.join(REGISTRY_PATH, "themes.css"),
      themeCSS.join("\n")
    )

    // ----------------------------------------------------------------------------
    // Build registry/themes/[theme].json
    // ----------------------------------------------------------------------------
    for (const baseColor of ["slate", "gray", "zinc", "neutral", "stone"]) {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      const payload: Record<string, any> = {
        name: baseColor,
        label: baseColor.charAt(0).toUpperCase() + baseColor.slice(1),
        cssVars: {},
      }
      for (const [mode, values] of Object.entries(colorMapping)) {
        payload.cssVars[mode] = {}
        for (const [key, value] of Object.entries(values)) {
          if (typeof value === "string") {
            const resolvedColor = value.replace(/{{base}}-/g, `${baseColor}-`)
            payload.cssVars[mode][key] = resolvedColor

            const [resolvedBase, scale] = resolvedColor.split("-") as [
              string,
              string,
            ]
            const color = scale
              ? Array.isArray(colorsData[resolvedBase]) &&
                colorsData[resolvedBase].find(
                  (item) => item.scale === Number.parseInt(scale)
                )
              : colorsData[resolvedBase]
            if (color && typeof color === "object" && "hslChannel" in color) {
              payload.cssVars[mode][key] = color.hslChannel
            }
          }
        }
      }

      await writeFileSafe(
        path.join(REGISTRY_PATH, `themes/${payload.name}.json`),
        JSON.stringify(payload, null, 2)
      )
    }
  }
}

try {
  const result = registrySchema.safeParse(registry)

  if (!result.success) {
    console.error(result.error)
    process.exit(1)
  }

  await rimraf(REGISTRY_PATH)

  await buildRegistryIndex(result.data)
  await buildStyles(result.data)
  await buildStylesIndex()
  await buildThemes()

  console.log("✅ Done!")
} catch (error) {
  console.error(error)
  process.exit(1)
}
