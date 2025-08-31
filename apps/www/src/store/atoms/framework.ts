import { siteConfig } from "@/config/site"
import { type Framework, frameworks } from "@/constants/frameworks"
import { createAtom } from "@xstate/store"

export const FRAMEWORK_STORAGE_KEY = `${siteConfig.name}-framework`

// Get initial value from localStorage or default to "react"
const getInitialFramework = (): Framework => {
  if (typeof window === "undefined") return "react"
  const stored = localStorage.getItem(FRAMEWORK_STORAGE_KEY)
  return stored && frameworks.includes(stored as Framework)
    ? (stored as Framework)
    : "react"
}

export const frameworkAtom = createAtom<Framework>(getInitialFramework())

// Subscribe to atom changes and persist to localStorage
if (typeof window !== "undefined") {
  frameworkAtom.subscribe((framework) => {
    localStorage.setItem(FRAMEWORK_STORAGE_KEY, framework)
  })
}
