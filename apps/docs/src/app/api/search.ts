import { source } from "@/lib/source"
import { createFromSource } from "fumadocs-core/search/server"

const server = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: "english",
})

export const ServerRoute = createServerFileRoute().methods({
  GET: async ({ request }) => server.GET(request),
})
