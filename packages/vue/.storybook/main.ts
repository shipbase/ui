import type { StorybookConfig } from "@storybook/vue3-vite"
import viteTsconfigPaths from "vite-tsconfig-paths"

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite")

    return mergeConfig(config, {
      plugins: [viteTsconfigPaths({ root: "../" })],
    })
  },
}
export default config
