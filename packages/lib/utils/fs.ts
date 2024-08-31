import fs from "node:fs/promises"

type SafeReadFileResult =
  | {
      success: true
      result: string
    }
  | {
      success: false
      error: Error
    }

export const safeReadFile = async (
  filePath: string
): Promise<SafeReadFileResult> => {
  try {
    const file = await fs.readFile(filePath, "utf-8")
    return {
      success: true,
      result: file,
    }
  } catch (error) {
    return {
      success: false,
      error: error as Error,
    }
  }
}
