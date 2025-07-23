import {
  type UiLibrary,
  uiLibraries,
  uiLibraryAtom,
} from "@/store/atoms/ui-library"
import type { Subscription } from "@xstate/store"

let subscription: Subscription

document.addEventListener("astro:page-load", () => {
  subscription?.unsubscribe()

  const handleUiLibraryChange = (value: UiLibrary) => {
    // 遍历所有的 UI 库，根据当前选择的值显示/隐藏对应元素
    for (const library of uiLibraries) {
      const elements = document.querySelectorAll(
        `[data-ui-library="${library}"]`
      )
      for (const el of elements) {
        // @ts-ignore
        el.hidden = value !== library
      }
    }
  }

  handleUiLibraryChange(uiLibraryAtom.get())
  subscription = uiLibraryAtom.subscribe(handleUiLibraryChange)
})
