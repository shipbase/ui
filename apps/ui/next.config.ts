import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/ui";

const nextConfig: NextConfig = {
  basePath: basePath === "/" ? undefined : basePath,
  async redirects() {
    if (basePath === "/") return [];

    return [
      {
        basePath: false as const,
        destination: basePath,
        permanent: false,
        source: "/",
      },
    ];
  },
  async rewrites() {
    return [
      {
        destination: "/api/raw/docs/:path*",
        source: "/docs/:path*.md",
      },
    ];
  },
  transpilePackages: ["@coss/ui"],
};

export default withMDX(nextConfig);
