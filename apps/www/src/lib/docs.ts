import { getCollection } from "astro:content"

export const generateComponentSideItems = async () => {
  const components = await getCollection("components")
  return components
    .filter((entry) => entry.data?.sidebar !== false)
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
    .map((entry) => ({
      title: entry.data?.title,
      href: `/docs/components/${entry.id}`,
    }))
}
