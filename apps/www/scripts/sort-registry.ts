#!/usr/bin/env tsx

import fs from "node:fs/promises"
import { fileURLToPath } from "node:url"
import { z } from "zod"

const RegistrySchema = z.object({
  name: z.string(),
  items: z.array(
    z.object({
      name: z.string(),
      type: z.string(),
      files: z.array(
        z.object({
          path: z.string(),
          type: z.string(),
        })
      ),
    })
  ),
})

async function main() {
  const registryPath = fileURLToPath(
    new URL("../registry.json", import.meta.url)
  )

  const rawData = await fs.readFile(registryPath, "utf8")
  const registryData = RegistrySchema.parse(JSON.parse(rawData))

  // Sort registry items with the following rules:
  // 1. Items with type "registry:ui" come first
  // 2. Within each type group, sort alphabetically by name
  registryData.items.sort((a, b) => {
    // Priority rule: registry:ui items always come first
    if (a.type === "registry:ui" && b.type !== "registry:ui") {
      return -1 // a comes before b
    }
    if (a.type !== "registry:ui" && b.type === "registry:ui") {
      return 1 // b comes before a
    }

    // Alphabetical rule: within registry:ui group, sort by name
    if (a.type === "registry:ui" && b.type === "registry:ui") {
      return a.name.localeCompare(b.name)
    }

    // Alphabetical rule: for other types, also sort by name
    return a.name.localeCompare(b.name)
  })

  await fs.writeFile(registryPath, JSON.stringify(registryData, null, 2))
}

main().catch(console.error)
