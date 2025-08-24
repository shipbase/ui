import { getCollection } from "astro:content"
import { type Framework, frameworks } from "@/constants/frameworks"
import { z } from "zod"

export const generateComponentSideItems = async (framework: Framework) => {
  const components = await getCollection("components")
  return components
    .filter((entry) => entry.data?.sidebar !== false)
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
    .map((entry) => ({
      title: entry.data?.title,
      href: `/docs/components/${framework}/${entry.id}`,
    }))
}

const componentPageParamsSchema = z.object({
  framework: z.enum(frameworks).default("react"),
  component: z.string().min(1, "Component name is required").optional(),
})

export type ComponentPageParams = z.infer<typeof componentPageParamsSchema>

export function getComponentPageParams(
  params: Record<string, string | undefined>
): ComponentPageParams {
  return componentPageParamsSchema.parse(params)
}
