import type { Meta, StoryFn } from "@storybook/react"

export default {
  title: "Components/Popover",
} satisfies Meta

export { default as Popover01 } from "@/examples/popover-01"
export { default as Popover02 } from "@/examples/popover-02"
export { default as Popover03 } from "@/examples/popover-03"
export { default as Popover04 } from "@/examples/popover-04"
export { default as Popover05 } from "@/examples/popover-05"

import { default as Popover09Component } from "@/examples/popover-09"
export const Popover09 = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <Popover09Component />
  </div>
)
