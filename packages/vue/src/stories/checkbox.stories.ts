import type { Meta, StoryObj } from "@storybook/vue3"

import { default as Checkbox } from "../examples/checkbox-demo.vue"

export default {
  title: "Components/Checkbox",
} satisfies Meta

type Story = StoryObj<typeof Checkbox>
export const Usage: Story = {
  render: () => ({
    components: { Checkbox },
    template: "<Checkbox />",
  }),
}
