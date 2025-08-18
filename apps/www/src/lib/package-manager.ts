import {
  PACKAGE_MANAGER_KEY_STORAGE_KEY,
  type PackageManager,
  packageManagerAtom,
} from "@/store/atoms/package-manager"
import type { Subscription } from "@xstate/store"

let subscription: Subscription

document.addEventListener("astro:page-load", () => {
  subscription?.unsubscribe()

  const localPackageManager = localStorage.getItem(
    PACKAGE_MANAGER_KEY_STORAGE_KEY
  ) as PackageManager

  if (localPackageManager) {
    console.log("packageManager", localPackageManager)
    setTimeout(() => {
      packageManagerAtom.set(localPackageManager)
    })
  }

  subscription = packageManagerAtom.subscribe((value) => {
    localStorage.setItem(PACKAGE_MANAGER_KEY_STORAGE_KEY, value)
  })
})
