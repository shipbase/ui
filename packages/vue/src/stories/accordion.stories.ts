import type { Meta, StoryObj } from "@storybook/vue3"
import { defineAsyncComponent } from "vue"

export default {
  title: "Components/Accordion",
} satisfies Meta

export const Accordion01 = () => ({
  components: {
    Accordion01: defineAsyncComponent(
      () => import("@/examples/Accordion01.vue")
    ),
  },
  template: "<Accordion01 />",
})
