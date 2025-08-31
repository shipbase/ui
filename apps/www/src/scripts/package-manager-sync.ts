import {
  PACKAGE_MANAGER_KEY_STORAGE_KEY,
  packageManagerAtom,
} from "@/store/atoms/package-manager"
import type { PackageManager } from "@/store/atoms/package-manager"
import type { Subscription } from "@xstate/store"

let subscription: Subscription

const handler = () => {
  localStorage.setItem(
    PACKAGE_MANAGER_KEY_STORAGE_KEY,
    packageManagerAtom.get()
  )
}

document.addEventListener("astro:page-load", () => {
  subscription?.unsubscribe()

  // sync state in client
  packageManagerAtom.set(
    (localStorage.getItem(PACKAGE_MANAGER_KEY_STORAGE_KEY) as PackageManager) ||
      "pnpm"
  )

  handler()
  subscription = packageManagerAtom.subscribe(handler)
})
