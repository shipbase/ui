import { withThemeByClassName } from "@storybook/addon-themes"
import type { Preview } from "@storybook/vue3"

import "@ui/tailwind/global.css"

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
      },
    },
    layout: "padded",
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
}

export default preview
