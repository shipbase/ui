import fs from "node:fs/promises"
import { type ResolveOptions, resolvePath } from "mlly"

type SafeResult<T> =
  | {
      success: true
      result: T
    }
  | {
      success: false
      error: Error
    }

export const safeResolvePath = async (
  id: string,
  options?: ResolveOptions
): Promise<SafeResult<string>> => {
  try {
    return {
      success: true,
      result: await resolvePath(id, options),
    }
  } catch (error) {
    return {
      success: false,
      error: error as Error,
    }
  }
}

export const safeResolveAndRead = async (
  id: string,
  options?: ResolveOptions
): Promise<SafeResult<string>> => {
  try {
    const filePath = await resolvePath(id, options)
    return {
      success: true,
      result: await fs.readFile(filePath, "utf8"),
    }
  } catch (error) {
    return {
      success: false,
      error: error as Error,
    }
  }
}
