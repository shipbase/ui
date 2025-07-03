import type { Meta } from "@storybook/react"

export default {
  title: "Components/Tooltip",
  decorators: [
    (Story) => (
      <div className="absolute inset-0 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta

export { default as Tooltip01 } from "@/examples/tooltip-01"
export { default as Tooltip02 } from "@/examples/tooltip-02"
export { default as Tooltip03 } from "@/examples/tooltip-03"
export { default as Tooltip04 } from "@/examples/tooltip-04"
export { default as Tooltip05 } from "@/examples/tooltip-05"
export { default as Tooltip06 } from "@/examples/tooltip-06"
export { default as Tooltip07 } from "@/examples/tooltip-07"
export { default as Tooltip08 } from "@/examples/tooltip-08"
export { default as Tooltip09 } from "@/examples/tooltip-09"
