import type { Framework } from "@/constants/frameworks"
import type { PackageManager } from "@/constants/package-managers"
import { createAtom } from "@xstate/store"

export const frameworkAtom = createAtom<Framework>("react")
export const packageManagerAtom = createAtom<PackageManager>("pnpm")
