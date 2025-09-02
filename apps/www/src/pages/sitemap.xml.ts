import { getCollection } from "astro:content"
import type { APIRoute } from "astro"

const xml = (
  urls: {
    loc: string
    lastmod?: string
    changefreq?: string
    priority?: number
  }[]
) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}
    ${u.changefreq ? `<changefreq>${u.changefreq}</changefreq>` : ""}
    ${typeof u.priority === "number" ? `<priority>${u.priority.toFixed(1)}</priority>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>`

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, "") ?? ""
  const now = new Date().toISOString()

  const overview = await getCollection("overview")
  const components = await getCollection("components")

  const routes = new Set<string>()
  routes.add("/")
  routes.add("/examples")

  for (const entry of overview) {
    routes.add(`/docs/${entry.id}`)
  }
  for (const entry of components) {
    routes.add(`/docs/components/${entry.id}`)
    routes.add(`/examples/${entry.id}`)
  }

  const urls = Array.from(routes).map((path) => ({
    loc: `${base}${path}`,
    lastmod: now,
    changefreq: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1.0 : 0.7,
  }))

  return new Response(xml(urls), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
