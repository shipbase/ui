import { siteConfig } from "@/config/site"
import { persistentAtom } from "@nanostores/persistent"
import { createAtom } from "@xstate/store"

export const uiLibraries = ["react", "vue", "svelte", "solid"] as const

export type UiLibrary = (typeof uiLibraries)[number]

export const UI_LIBRARY_KEY_STORAGE_KEY = `${siteConfig.name}-ui-library`

export const uiLibraryAtom = createAtom<UiLibrary>("react")

export const $framework = persistentAtom<UiLibrary>(
  `${siteConfig.name}-ui-library`,
  "react"
)
