import path from "node:path"
import { safeResolvePath } from "@ui/lib/utils/mlly"
import { withTrailingSlash } from "ufo"
import {
  FRAMEWORKS,
  type Framework,
  type FrameworkConfig,
} from "../constants/frameworks"

const DEFAULT_EXTENSIONS = [".js", ".cjs", ".mjs", ".ts"]

/**
 * Detects the framework of the project by checking for the presence of a configuration file.
 *
 * @returns {Promise<Framework>} - A promise that resolves to the framework name if detected, or null if not detected.
 */
export async function detectFramework(
  options: { cwd?: string } = {}
): Promise<FrameworkConfig | null> {
  const { cwd = process.cwd() } = options

  let result = null

  result = await safeResolvePath(
    path.join(withTrailingSlash(cwd), "next.config"),
    { extensions: DEFAULT_EXTENSIONS }
  )
  if (result.success) {
    return FRAMEWORKS.next
  }

  result = await safeResolvePath(
    path.join(withTrailingSlash(cwd), "vite.config"),
    { extensions: DEFAULT_EXTENSIONS }
  )
  if (result.success) {
    return FRAMEWORKS.vite
  }

  result = await safeResolvePath(
    path.join(withTrailingSlash(cwd), "astro.config"),
    { extensions: DEFAULT_EXTENSIONS }
  )
  if (result.success) {
    return FRAMEWORKS.astro
  }

  return null
}
