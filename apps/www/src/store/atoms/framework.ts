import { siteConfig } from "@/config/site"
import { persistentAtom } from "@nanostores/persistent"
import { createAtom } from "@xstate/store"
import { useAtom } from "@xstate/store/react"
import { useEffect } from "react"

export const uiLibraries = ["react", "vue", "svelte", "solid"] as const

export type UiLibrary = (typeof uiLibraries)[number]

export const UI_LIBRARY_KEY_STORAGE_KEY = `${siteConfig.name}-ui-library`

export const uiLibraryAtom = createAtom<UiLibrary>("react")

export const $framework = persistentAtom<UiLibrary>(
  `${siteConfig.name}-ui-library`,
  "react"
)

export const useUILibrary = () => {
  const uiLibrary = useAtom(uiLibraryAtom)

  useEffect(() => {
    const subscription = uiLibraryAtom.subscribe((uiLibrary) => {
      localStorage.setItem(UI_LIBRARY_KEY_STORAGE_KEY, uiLibrary)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return uiLibrary
}
