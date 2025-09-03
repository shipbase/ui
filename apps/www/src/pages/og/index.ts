import { OpenGraph } from "@/components/open-graph"
import { siteConfig } from "@/config/site"
import { Resvg, initWasm } from "@resvg/resvg-wasm"
// @ts-ignore - resvg.wasm is a module
import resvgwasm from "@resvg/resvg-wasm/index_bg.wasm"
import type { APIRoute } from "astro"
import satori, { type Font, init } from "satori/wasm"
import initYoga from "yoga-wasm-web"
// @ts-ignore - yoga.wasm is a module
import yogaWasm from "yoga-wasm-web/dist/yoga.wasm"

export const prerender = false

const WIDTH = 1200
const HEIGHT = 630

let fontsCache: Font[] | null = null
const initResvgPromise: Promise<void> | null = initWasm(resvgwasm)
const initYogaPromise = initYoga(yogaWasm).then((yoga) => init(yoga))

async function loadFonts(baseUrl: string) {
  if (fontsCache) {
    return fontsCache
  }
  const [geistRegularData, geistSemiBoldData, geistMonoData] =
    await Promise.all([
      fetch(new URL("/fonts/Geist-Regular.ttf", baseUrl)).then((result) => {
        return result.arrayBuffer()
      }),
      fetch(new URL("/fonts/Geist-SemiBold.ttf", baseUrl)).then((result) =>
        result.arrayBuffer()
      ),
      fetch(new URL("/fonts/GeistMono-Regular.ttf", baseUrl)).then((result) =>
        result.arrayBuffer()
      ),
    ]).catch((error) => {
      console.error(error)
      return []
    })

  fontsCache = [
    {
      name: "Geist",
      data: geistRegularData,
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Geist",
      data: geistSemiBoldData,
      weight: 600 as const,
      style: "normal" as const,
    },
    {
      name: "Geist Mono",
      data: geistMonoData,
      weight: 400 as const,
      style: "normal" as const,
    },
  ]

  return fontsCache
}

export const GET: APIRoute = async ({ url }) => {
  try {
    const searchParams = url.searchParams

    const [fonts] = await Promise.all([
      loadFonts(url.origin),
      initResvgPromise,
      initYogaPromise,
    ])

    const title = searchParams.get("title") ?? siteConfig.name
    const description =
      searchParams.get("description") ?? siteConfig.description

    const logoSrc = new URL("/logo-dark.png", url.origin).toString()

    const svg = await satori(
      OpenGraph({ width: WIDTH, height: HEIGHT, title, description, logoSrc }),
      {
        width: WIDTH,
        height: HEIGHT,
        fonts,
      }
    )

    const renderer = new Resvg(svg, {
      fitTo: {
        mode: "width",
        value: WIDTH,
      },
    })
    const image = renderer.render()
    const pngBuffer = image.asPng()

    return new Response(new Uint8Array(pngBuffer), {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "s-maxage=1, stale-while-revalidate=59",
      },
    })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "OG image generation failed"
    return new Response(`Error ${message}`, {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    })
  }
}
