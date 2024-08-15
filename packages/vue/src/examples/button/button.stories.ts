import type { Meta, StoryObj } from "@storybook/vue3"

import { default as Button } from "./button.vue"

export default {
  title: "Components/Button",
} satisfies Meta

type Story = StoryObj<typeof Button>
export const Usage: Story = {
  render: () => ({
    components: { Button },
    template: "<Button />",
  }),
}