import fs from "node:fs/promises"
import path from "node:path"
import type { Framework } from "@/store/atoms/framework"
import { safeReadFile } from "@ui/lib/utils/fs"
import { safeResolvePath } from "@ui/lib/utils/mlly"
import { findExports } from "mlly"
import type { BuiltinLanguage } from "shiki"

export const getExampleSource = async (framework: Framework, name: string) => {
  const entryPath = await safeResolvePath(`@ui/${framework}/examples/${name}`, {
    conditions: ["source"],
  })
  if (!entryPath.success) return null
  const entryFile = await safeReadFile(entryPath.result)
  if (!entryFile.success) return null
  const entryFileInfo = extractFileInfo(entryPath.result)
  return {
    filename: `${entryFileInfo[1]}.${entryFileInfo[2]}`,
    source: entryFile.result,
    lang: entryFileInfo[2] as BuiltinLanguage,
  }
}

export const getComponentSource = async (
  framework: Framework,
  name: string
) => {
  const entryPath = await safeResolvePath(`@ui/${framework}/${name}`, {
    conditions: ["source"],
  })
  if (!entryPath.success) return []
  const entryFile = await safeReadFile(entryPath.result)
  if (!entryFile.success) return []

  const exports = findExports(entryFile.result)
  const sources = await Promise.all(
    exports
      .filter((exp) => exp.specifier?.startsWith("./"))
      .map(async (exp) => {
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        const [, name, lang] = extractFileInfo(exp.specifier!)

        return {
          filename: `${name}.${lang}`,
          source: await fs.readFile(
            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            path.resolve(path.dirname(entryPath.result), exp.specifier!),
            "utf-8"
          ),
          lang: lang as BuiltinLanguage,
        }
      })
  )

  const entryFileInfo = extractFileInfo(entryPath.result)
  return [
    ...sources,
    {
      filename: `${entryFileInfo[1]}.${entryFileInfo[2]}`,
      source: entryFile.result,
      lang: entryFileInfo[2] as BuiltinLanguage,
    },
  ]
}

export const extractFileInfo = (p: string) => {
  return p.match(/([\w-]+)\.(vue|ts|tsx)$/) || []
}
