import { createRequire } from "node:module"
import type { OperationOptions } from "nypm"
import { withTrailingSlash } from "ufo"

export function doesDependencyInstalled(
  name: string,
  options: Pick<OperationOptions, "cwd"> = {}
) {
  const { cwd = process.cwd() } = options

  const require = createRequire(withTrailingSlash(cwd))
  try {
    const resolvedPath = require.resolve(name)
    return resolvedPath.startsWith(cwd)
  } catch {
    return false
  }
}
