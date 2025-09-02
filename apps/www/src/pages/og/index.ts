import { readFile } from "node:fs/promises"
import path from "node:path"
import { siteConfig } from "@/config/site"
import type { APIRoute } from "astro"
import type { ReactNode } from "react"
import satori, { type Font } from "satori"
import sharp from "sharp"

export const prerender = false

const WIDTH = 1200
const HEIGHT = 630

let fontsCache: Font[] | null = null

async function loadFonts() {
  if (fontsCache) {
    return fontsCache
  }
  const fontPath = path.join(process.cwd(), "public", "fonts")
  const [normal, semibold, mono] = await Promise.all([
    readFile(path.join(fontPath, "Geist-Regular.ttf")),
    readFile(path.join(fontPath, "Geist-SemiBold.ttf")),
    readFile(path.join(fontPath, "GeistMono-Regular.ttf")),
  ])

  fontsCache = [
    {
      name: "Geist",
      data: normal,
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Geist",
      data: semibold,
      weight: 600 as const,
      style: "normal" as const,
    },
    {
      name: "Geist Mono",
      data: mono,
      weight: 400 as const,
      style: "normal" as const,
    },
  ]

  return fontsCache
}

async function loadLogo(dark = true) {
  const publicPath = path.join(process.cwd(), "public")
  // Prefer PNG to avoid external font dependencies inside SVG
  const fileName = dark ? "logo-dark.png" : "logo.png"
  const filePath = path.join(publicPath, fileName)
  const buffer = await readFile(filePath)
  const mime = "image/png"
  const dataUrl = `data:${mime};base64,${buffer.toString("base64")}`
  return dataUrl
}

export const GET: APIRoute = async ({ url }) => {
  try {
    const { searchParams } = new URL(url)

    const title = searchParams.get("title") ?? siteConfig.name
    const description =
      searchParams.get("description") ?? siteConfig.description

    const fonts = await loadFonts()
    const logoSrc = await loadLogo(true)

    const titleFontSize = title && title.length > 20 ? 64 : 80
    const logoSize = 88
    // Color palette for OG image
    const COLORS = {
      background: "#000000",
      text: "#ffffff",
      guide: "#1a1a1a", // thin guide lines
      cross: "#515356", // thicker cross-only color
      description: "#a8a29e", // muted description text
    } as const

    // Guide/cross layout variables
    const GUIDE_INSET = 64 // distance from each edge to the guides
    const GUIDE_THICKNESS = 1
    const CROSS_LENGTH = 48
    const CROSS_THICKNESS = 3
    const CROSS_HALF = CROSS_LENGTH / 2
    const CROSS_HALF_THICKNESS = Math.floor(CROSS_THICKNESS / 2)

    const svg = await satori(
      {
        type: "div",
        props: {
          style: {
            width: `${WIDTH}px`,
            height: `${HEIGHT}px`,
            position: "relative",
            display: "flex",
            background: COLORS.background,
            color: COLORS.text,
            fontFamily: "Geist,system-ui,sans-serif",
          },
          children: [
            // Vertical dashed guide left (x = GUIDE_INSET)
            {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  left: GUIDE_INSET,
                  top: 0,
                  bottom: 0,
                  width: GUIDE_THICKNESS,
                  background: COLORS.guide,
                  opacity: 1,
                },
              },
            },
            // Vertical dashed guide right (x = width - GUIDE_INSET)
            {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  right: GUIDE_INSET,
                  top: 0,
                  bottom: 0,
                  width: GUIDE_THICKNESS,
                  background: COLORS.guide,
                  opacity: 1,
                },
              },
            },
            // Horizontal guide top (y = GUIDE_INSET)
            {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: GUIDE_INSET,
                  height: GUIDE_THICKNESS,
                  background: COLORS.guide,
                },
              },
            },
            // Horizontal guide bottom (y = height - GUIDE_INSET)
            {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: GUIDE_INSET,
                  height: GUIDE_THICKNESS,
                  background: COLORS.guide,
                },
              },
            },
            // Thicker cross at the top-left guide intersection
            // Creates a short, thicker segment on both axes at (x=GUIDE_INSET, y=GUIDE_INSET)
            {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  left: GUIDE_INSET - CROSS_HALF, // center around x
                  top: GUIDE_INSET - CROSS_HALF_THICKNESS, // align to horizontal line
                  width: CROSS_LENGTH,
                  height: CROSS_THICKNESS,
                  background: COLORS.cross,
                },
              },
            },
            {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  left: GUIDE_INSET - CROSS_HALF_THICKNESS, // align to vertical line
                  top: GUIDE_INSET - CROSS_HALF, // center around y
                  width: CROSS_THICKNESS,
                  height: CROSS_LENGTH,
                  background: COLORS.cross,
                },
              },
            },
            // Thicker cross at the bottom-right guide intersection (x=width-GUIDE_INSET, y=height-GUIDE_INSET)
            {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  right: GUIDE_INSET - CROSS_HALF, // center around x
                  bottom: GUIDE_INSET - CROSS_HALF_THICKNESS, // align to horizontal line
                  width: CROSS_LENGTH,
                  height: CROSS_THICKNESS,
                  background: COLORS.cross,
                },
              },
            },
            {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  right: GUIDE_INSET - CROSS_HALF_THICKNESS, // align to vertical line
                  bottom: GUIDE_INSET - CROSS_HALF, // center around y
                  width: CROSS_THICKNESS,
                  height: CROSS_LENGTH,
                  background: COLORS.cross,
                },
              },
            },
            // (Logo + Title) row
            // Moved logo next to the title instead of bottom-right corner.
            // Content container centered with 32px inset and fixed width
            {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  left: 128,
                  top: 128,
                  bottom: 128,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: 896,
                },
                children: [
                  {
                    type: "div",
                    props: {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 32,
                        marginBottom: 8,
                        width: "100%",
                      },
                      children: [
                        {
                          type: "img",
                          props: {
                            src: logoSrc,
                            width: logoSize,
                            height: logoSize,
                            alt: "shipbase/ui",
                          },
                        },
                        {
                          type: "div",
                          props: {
                            style: {
                              fontWeight: 600,
                              fontSize: titleFontSize,
                              lineHeight: 1.1,
                              letterSpacing: "-0.04em",
                              whiteSpace: "pre-wrap",
                              wordBreak: "break-word",
                              flex: 1,
                              minWidth: 0,
                            },
                            children: title,
                          },
                        },
                      ],
                    },
                  },
                  {
                    type: "div",
                    props: {
                      style: {
                        marginTop: 16,
                        fontWeight: 500,
                        fontSize: 40,
                        lineHeight: 1.5,
                        color: COLORS.description,
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                      },
                      children: description,
                    },
                  },
                ],
              },
            },
          ],
        },
      } as ReactNode,
      {
        width: WIDTH,
        height: HEIGHT,
        fonts,
      }
    )

    const png = sharp(Buffer.from(svg)).png()
    const response = await png.toBuffer()
    const body = new Uint8Array(response)

    return new Response(body, {
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
