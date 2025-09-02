import type { APIRoute } from "astro"

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, "") ?? ""
  const body = `User-agent: *
Allow: /f
Sitemap: ${base}/sitemap.xml\n`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  })
}
