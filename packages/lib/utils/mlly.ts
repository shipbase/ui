import { type ResolveOptions, findExports, resolvePath } from "mlly"

type SafeResolvePathResult =
  | {
      success: true
      result: string
    }
  | {
      success: false
      error: Error
    }

export const safeResolvePath = async (
  id: string,
  options: ResolveOptions
): Promise<SafeResolvePathResult> => {
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
