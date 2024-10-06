import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const overview = defineCollection({
  loader: glob({
    pattern: ["**/*.mdx", "!components"],
    base: "./content",
    generateId: ({ entry }) => entry.replace(/\/index\.mdx$|\.mdx$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sidebar: z.boolean().optional(),
  }),
})

const components = defineCollection({
  loader: glob({
    pattern: ["components/*.mdx"],
    base: "./content",
    generateId: ({ entry }) => entry.replace(/\/index\.mdx$|\.mdx$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sidebar: z.boolean().optional(),
  }),
})

export const collections = {
  overview,
  components,
}
