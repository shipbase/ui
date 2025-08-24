import { siteConfig } from "@/config/site"

export const frameworks = ["react", "vue", "svelte", "solid"] as const

export type Framework = (typeof frameworks)[number]

export const FRAMEWORK_STORAGE_KEY = `${siteConfig.name}-framework`
