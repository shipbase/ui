import { siteConfig } from "@/config/site"
import { persistentAtom } from "@nanostores/persistent"

export const uiLibraries = ["react", "vue", "svelte", "solid"] as const

export type UiLibrary = (typeof uiLibraries)[number]

export const $framework = persistentAtom<UiLibrary>(
  `${siteConfig.name}-ui-library`,
  "react"
)
