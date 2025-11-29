export const frameworks = ["react", "vue", "svelte", "solid"] as const

export type Framework = (typeof frameworks)[number]
