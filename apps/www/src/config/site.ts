export const siteConfig = {
  name: "shipbase/ui",
  url: "https://ui.shipbase.xyz",
  // Dynamic OG images via Satori endpoint (Cloudflare-compatible)
  ogImage: "/api/og",
  twitterImage: "/api/og",
  description:
    "A set of beautiful designed components you can customize, extend, and make your own. Multi Framework Support, Open Source.",
  links: {
    twitter: "https://x.com/shipba_se",
    github: "https://github.com/shipbase/ui",
  },
}

export type SiteConfig = typeof siteConfig
