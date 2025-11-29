import { defineConfig, defineDocs } from "fumadocs-mdx/config"
import { z } from "zod"

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: z.object({
      title: z.string(),
      description: z.string(),
    }),
  },
})

export default defineConfig()
