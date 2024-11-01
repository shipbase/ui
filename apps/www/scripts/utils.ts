import fs from "node:fs/promises"
import path from "node:path"

export async function writeFileSafe(filePath: string, data: string) {
  try {
    await fs.access(filePath)
  } catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true })
  }
  await fs.writeFile(filePath, data, "utf8")
}
