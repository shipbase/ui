export const siteConfig = {
  name: "shipbase/ui",
  url: "https://ui.shipbase.xyz",
  author: "shipbase",
  creator: "shipbase",
  // Dynamic OG images via Satori endpoint
  // Route lives at /og (not /api/og)
  ogImage: "/og",
  twitterImage: "/og",
  description:
    "A set of beautiful designed components you can customize, extend, and make your own. Multi Framework Support, Open Source.",
  links: {
    twitter: "https://x.com/shipba_se",
    github: "https://github.com/shipbase/ui",
  },
}

export type SiteConfig = typeof siteConfig

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}
