import fs from "node:fs"
import path from "node:path"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * checkbox-with-text to CheckboxWithText
 * @param str string
 * @returns string
 */
export function pascalCase(str: string) {
  return str
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("")
}

export const loadFileSource = async (relativePath: string) => {
  try {
    if (!relativePath) return "No file provided"

    return fs.readFileSync(path.resolve("./src", relativePath), "utf-8")
  } catch (e) {
    console.error(e)
    return "Not yet available"
  }
}
