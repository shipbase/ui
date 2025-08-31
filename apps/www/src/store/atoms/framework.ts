import { siteConfig } from "@/config/site"
import type { Framework } from "@/constants/frameworks"
import { type Subscription, createAtom } from "@xstate/store"

export const frameworkAtom = createAtom<Framework>("react")

export const FRAMEWORK_STORAGE_KEY = `${siteConfig.name}-framework`

// for ui display
let subscription: Subscription

const handler = () => {
  for (const element of document.querySelectorAll("[data-framework]")) {
    if (element.getAttribute("data-framework") === frameworkAtom.get()) {
      element.classList.remove("hidden")
    } else {
      element.classList.add("hidden")
    }
  }

  localStorage.setItem(FRAMEWORK_STORAGE_KEY, frameworkAtom.get())
}

document.addEventListener("astro:page-load", () => {
  subscription?.unsubscribe()

  // sync state in client
  frameworkAtom.set(
    (localStorage.getItem(FRAMEWORK_STORAGE_KEY) as Framework) || "react"
  )

  handler()
  subscription = frameworkAtom.subscribe(handler)
})
