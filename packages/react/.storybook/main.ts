import type { StorybookConfig } from "@storybook/react-vite"
import inspect from "vite-plugin-inspect"
import viteTsconfigPaths from "vite-tsconfig-paths"

const config: StorybookConfig = {
  stories: ["../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  typescript: {
    reactDocgen: false,
  },
  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite")

    return mergeConfig(config, {
      plugins: [viteTsconfigPaths({ root: "../" }), inspect()],
    })
  },
}

export default config
