import { siteConfig } from "@/config/site"
import { createAtom } from "@xstate/store"

export const packageManagers = ["pnpm", "npm", "yarn", "bun"] as const

export type PackageManager = (typeof packageManagers)[number]

export const PACKAGE_MANAGER_KEY_STORAGE_KEY = `${siteConfig.name}-package-manager`

export const packageManagerAtom = createAtom<PackageManager>("pnpm")

export const npmInstallBashRE = /^npm install/
export const npxBashRE = /^npx/
