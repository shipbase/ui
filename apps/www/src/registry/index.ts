// import { blocks } from "./registry-blocks"
// import { charts } from "./registry-charts"
// import { examples } from "./registry-examples"
// import { hooks } from "./registry-hooks"
import { lib } from "./registry-lib"
import { themes } from "./registry-themes"
import { ui } from "./registry-ui"
// import { v0 } from "./registry-v0"
import type { Registry } from "./schema"

export const registry: Registry = [
  ...ui,
  // ...examples,
  // ...blocks,
  // ...charts,
  ...lib,
  // ...hooks,
  ...themes,
  // ...v0,
]
