import { z } from "zod"

export const userConfigSchema = z
  .object({
    // $schema: z.string().optional(),
    library: z.enum(["react", "vue"]),
    style: z.string(),
    // rsc: z.coerce.boolean().default(false),
    tsx: z.coerce.boolean().default(true),
    tailwind: z.object({
      config: z.string(),
      css: z.string(),
      baseColor: z.string(),
      cssVariables: z.boolean().default(true),
      prefix: z.string().default("").optional(),
    }),
    aliases: z.object({
      components: z.string(),
      utils: z.string(),
    }),
  })
  .strict()

export type UserConfig = z.infer<typeof userConfigSchema>

export const configSchema = userConfigSchema.extend({
  resolvedPaths: z.object({
    cwd: z.string(),
    tailwindConfig: z.string(),
    tailwindCss: z.string(),
    components: z.string(),
    utils: z.string(),
  }),
})

export type Config = z.infer<typeof configSchema>
