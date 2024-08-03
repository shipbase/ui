import { defineCollection, z } from "astro:content"

const overview = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sidebar: z.boolean().optional(),
  }),
})

const components = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
})

export const collections = {
  overview,
  components,
}
