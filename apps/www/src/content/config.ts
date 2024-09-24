import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const overview = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/overview" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sidebar: z.boolean().optional(),
  }),
})

const components = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/components" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
})

export const collections = {
  overview,
  components,
}
