import { withThemeByClassName } from "@storybook/addon-themes"
import type { Preview } from "@storybook/react"

import "../src/assets/global.css"

const preview: Preview = {
  parameters: {},
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
