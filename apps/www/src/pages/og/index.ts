import { OpenGraph } from "@/components/open-graph"
import { siteConfig } from "@/config/site"
import { Resvg, initWasm } from "@resvg/resvg-wasm"
// @ts-ignore - resvg.wasm is a module
import resvgwasm from "@resvg/resvg-wasm/index_bg.wasm"
import type { APIRoute } from "astro"
// use satori standalone version after https://github.com/vercel/satori/issues/693
import satori, { init } from "satori/wasm"
import initYoga from "yoga-wasm-web"
// @ts-ignore
import yogaWasm from "yoga-wasm-web/dist/yoga.wasm"

export const prerender = false

const WIDTH = 1200
const HEIGHT = 630
const FONT_TEXT = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz/,-."

const initResvgPromise: Promise<void> | null = initWasm(resvgwasm)
const initYogaPromise = initYoga(yogaWasm).then((yoga) => init(yoga))

async function loadGoogleFont(font: string, text?: string) {
  if (!font || !text) return
  const API = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(
    text
  )}`
  const css = await (
    await fetch(API, {
      headers: {
        // Make sure it returns TTF.
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text()
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)
  if (!resource || !resource[1])
    throw new Error("Failed to download dynamic font")
  const res = await fetch(resource[1])
  if (!res.ok) {
    throw new Error(`Failed to download dynamic font. Status: ${res.status}`)
  }
  return res.arrayBuffer()
}

async function loadFonts() {
  const [geistRegularData, geistSemiBoldData, geistMonoData] =
    await Promise.all([
      loadGoogleFont("Geist", FONT_TEXT),
      loadGoogleFont("Geist", FONT_TEXT),
      loadGoogleFont("Geist Mono", FONT_TEXT),
    ])

  if (!geistRegularData || !geistSemiBoldData || !geistMonoData) {
    throw new Error("Failed to load fonts")
  }

  return [
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
}

export const GET: APIRoute = async ({ url }) => {
  try {
    const fonts = await loadFonts()
    const searchParams = url.searchParams

    await Promise.all([initResvgPromise, initYogaPromise])

    const title = searchParams.get("title") ?? siteConfig.name
    const description =
      searchParams.get("description") ?? siteConfig.description

    const svg = await satori(
      OpenGraph({ width: WIDTH, height: HEIGHT, title, description }),
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

    return new Response(pngBuffer as BodyInit, {
      status: 200,
      headers: {
        "content-type": "image/png",
        "cache-control": "public, immutable, no-transform, max-age=31536000",
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
