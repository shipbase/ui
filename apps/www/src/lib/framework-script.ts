import { frameworkAtom } from "@/store/atoms/framework"
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
}

document.addEventListener("astro:page-load", () => {
  subscription?.unsubscribe()
  handler()
  subscription = frameworkAtom.subscribe(handler)
})
