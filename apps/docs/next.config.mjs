import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  serverExternalPackages: ["mlly"],
}

export default withMDX(config)
