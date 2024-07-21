import fs from "node:fs"
import path from "node:path"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
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
