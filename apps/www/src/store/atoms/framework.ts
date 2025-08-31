import { siteConfig } from "@/config/site"
import type { Framework } from "@/constants/frameworks"
import { createAtom } from "@xstate/store"

export const frameworkAtom = createAtom<Framework>("react")

export const FRAMEWORK_STORAGE_KEY = `${siteConfig.name}-framework`
