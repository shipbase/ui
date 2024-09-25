import fs from "node:fs"
import path from "node:path"
import { safeReadFile } from "@ui/lib/utils/fs"
import { safeResolveAndRead, safeResolvePath } from "@ui/lib/utils/mlly"
import { withTrailingSlash } from "ufo"

export async function resolvePackageJson(options: { cwd?: string } = {}) {
  return safeResolveAndRead(
    path.join(options?.cwd || process.cwd(), "package.json")
  )
}

export async function resolveTSConfig(options: { cwd?: string } = {}) {
  const { cwd = process.cwd() } = options

  const result = await safeResolvePath(
    path.join(withTrailingSlash(cwd), "tsconfig.json")
  )

  if (result.success) {
    return fs.readFileSync(result.result, "utf8")
  }

  return null
}
