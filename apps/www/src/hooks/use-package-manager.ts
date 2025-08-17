import {
  PACKAGE_MANAGER_KEY_STORAGE_KEY,
  type PackageManager,
  packageManagerAtom,
} from "@/store/atoms/package-manager"
import { useAtom } from "@xstate/store/react"
import { useEffect } from "react"

export function usePackageManager() {
  const packageManager = useAtom(packageManagerAtom)

  useEffect(() => {
    const initialValue = localStorage.getItem(PACKAGE_MANAGER_KEY_STORAGE_KEY)

    if (initialValue) {
      packageManagerAtom.set(initialValue as PackageManager)
    }

    const subscription = packageManagerAtom.subscribe((packageManager) => {
      localStorage.setItem(PACKAGE_MANAGER_KEY_STORAGE_KEY, packageManager)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return packageManager
}
