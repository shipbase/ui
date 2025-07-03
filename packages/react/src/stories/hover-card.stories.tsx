import type { Meta } from "@storybook/react"

export default {
  title: "Components/Hover Card",
  decorators: [
    (Story) => (
      <div className="absolute inset-0 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta

export { default as HoverCard01 } from "@/examples/hover-card-01"
export { default as HoverCard02 } from "@/examples/hover-card-02"
export { default as HoverCard03 } from "@/examples/hover-card-03"
