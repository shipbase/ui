import { atom } from "nanostores"

export type Framework = "react" | "vue"

export const $framework = atom<Framework>("react")
