import type { Registry } from "./schema"

export const ui: Registry = [
  {
    name: "accordion",
    type: "registry:ui",
    dependencies: [],
    files: ["ui/accordion.tsx"],
    tailwind: {
      config: {
        theme: {
          extend: {
            keyframes: {
              "collapse-down": {
                from: { height: "0" },
                to: { height: "var(--height)" },
              },
              "collapse-up": {
                from: { height: "var(--height)" },
                to: { height: "0" },
              },
            },
            animation: {
              "accordion-down": "collapse-down 0.2s ease-out",
              "accordion-up": "collapse-up 0.2s ease-out",
            },
          },
        },
      },
    },
  },
]
