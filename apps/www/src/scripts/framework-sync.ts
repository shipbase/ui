import type { Framework } from "@/constants/frameworks"
import { FRAMEWORK_STORAGE_KEY, frameworkAtom } from "@/store/atoms/framework"
import type { Subscription } from "@xstate/store"

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
