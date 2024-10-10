export const FRAMEWORKS = {
  next: {
    name: "next",
    label: "Next.js",
    links: {
      tailwind: "https://tailwindcss.com/docs/guides/nextjs",
    },
  },
  vite: {
    name: "vite",
    label: "Vite",
    links: {
      tailwind: "https://tailwindcss.com/docs/guides/vite",
    },
  },
  astro: {
    name: "astro",
    label: "Astro",
    links: {
      tailwind: "https://tailwindcss.com/docs/guides/astro",
    },
  },
  manual: {
    name: "manual",
    label: "Manual",
    links: {
      installation: "https://ui.shipbase.co/docs/installation/manual",
      tailwind: "https://tailwindcss.com/docs/installation",
    },
  },
} as const

export type Framework = keyof typeof FRAMEWORKS
export type FrameworkConfig = (typeof FRAMEWORKS)[keyof typeof FRAMEWORKS]
