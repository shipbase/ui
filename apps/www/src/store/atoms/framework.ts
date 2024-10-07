import { siteConfig } from "@/config/site"

export type Framework = "react" | "vue"

export const frameworks: Framework[] = ["react", "vue"]

import { persistentAtom } from "@nanostores/persistent"

export const $framework = persistentAtom<Framework>(
  `${siteConfig.name}-framework`,
  "react",
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
)
