import type { Meta, StoryObj } from "@storybook/vue3"

import { default as Accordion } from "@/examples/accordion/Accordion.vue"

export default {
  title: "Components/Accordion",
} satisfies Meta

type Story = StoryObj<typeof Accordion>
export const Usage: Story = {
  render: () => ({
    components: { Accordion },
    template: "<Accordion />",
  }),
}
