import type { PackageManager } from "@/constants/package-managers"
import { PACKAGE_MANAGER_STORAGE_KEY } from "@/constants/storage-keys"
import { packageManagerAtom } from "@/store/atoms"
import type { Subscription } from "@xstate/store"

let subscription: Subscription

const handler = () => {
  localStorage.setItem(PACKAGE_MANAGER_STORAGE_KEY, packageManagerAtom.get())
}

document.addEventListener("astro:page-load", () => {
  subscription?.unsubscribe()

  // sync state in client
  packageManagerAtom.set(
    (localStorage.getItem(PACKAGE_MANAGER_STORAGE_KEY) as PackageManager) || "pnpm",
  )

  handler()
  subscription = packageManagerAtom.subscribe(handler)
})
