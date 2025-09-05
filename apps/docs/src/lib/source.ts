import { loader } from "fumadocs-core/source"
import { fromConfig } from "fumadocs-mdx/runtime/vite"
import type * as Config from "../source.config"

export const create = fromConfig<typeof Config>()

export const docs = {
  doc: create.doc(
    "docs",
    import.meta.glob(["./**/*.{mdx,md}"], {
      query: {
        collection: "docs",
      },
      base: "/content",
    })
  ),
  meta: create.meta(
    "docs",
    import.meta.glob(["./**/*.{json,yaml}"], {
      import: "default",
      query: {
        collection: "docs",
      },
      base: "/content",
    })
  ),
}

export const source = loader({
  baseUrl: "/docs",
  source: await create.sourceAsync(docs.doc, docs.meta),
})
