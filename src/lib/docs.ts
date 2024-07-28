import { getCollection, type CollectionEntry } from "astro:content"

export const getCollectionEntrySlug = (
  entry: CollectionEntry<"overview" | "components">
) => {
  return entry.collection === "overview"
    ? `${entry.slug}`
    : `${entry.collection}/${entry.slug}`
}

export const getDocsSidebarGroup = async () => {
  const overview = await getCollection("overview")
  const components = await getCollection("components")

  const overviewPriority = ["introduction", "installation", "about"]
  return [
    {
      title: "Get Started",
      items: overview
        .filter((c) => c.data.sidebar !== false)
        .sort(
          (a, b) =>
            overviewPriority.indexOf(a.slug) - overviewPriority.indexOf(b.slug)
        )
        .map((entry) => ({
          title: entry.data.title,
          href: `/docs/${getCollectionEntrySlug(entry)}`,
        })),
    },
    {
      title: "Components",
      items: components.map((entry) => ({
        title: entry.data.title,
        href: `/docs/${getCollectionEntrySlug(entry)}`,
      })),
    },
  ]
}
