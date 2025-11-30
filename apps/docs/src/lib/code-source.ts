import type { Framework } from "@/constants/frameworks"
import { safeReadFile } from "@ui/lib/utils/fs"
import { safeResolvePath } from "@ui/lib/utils/mlly"
import type { BuiltinLanguage } from "shiki"

export const getExampleSource = async (
  framework: Framework,
  example: string
) => {
  const entryPath = await safeResolvePath(
    `@ui/${framework}/examples/${example}`,
    {
      conditions: ["source"],
    }
  )

  if (!entryPath.success) return
  const entryFile = await safeReadFile(entryPath.result)
  if (!entryFile.success) return
  const entryFileInfo = extractFileInfo(entryPath.result)
  return {
    filename: `${entryFileInfo[1]}.${entryFileInfo[2]}`,
    content: entryFile.result,
    lang: entryFileInfo[2] as BuiltinLanguage,
  }
}

export const extractFileInfo = (p: string) => {
  return p.match(/([\w-]+)\.(vue|ts|tsx)$/) || []
}
