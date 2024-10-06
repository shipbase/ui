// @ts-nocheck

import type { DataEntryMap } from "astro:content"
import { getCollection } from "astro:content"

export const generateSideItems = async (name: keyof DataEntryMap) => {
  const collection = await getCollection(name)
  return collection
    .filter(
      (entry: DataEntryMap[keyof DataEntryMap]) => entry.data?.sidebar !== false
    )
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
    .map((entry: DataEntryMap[keyof DataEntryMap]) => ({
      title: entry.data?.title,
      href: `/docs/${entry.id}`,
    }))
}
