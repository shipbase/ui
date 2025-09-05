import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents as MDXComponentsType } from "mdx/types"
import ExamplePreview from "./content/example-preview"

export const MDXComponents: MDXComponentsType = {
  ...(defaultMdxComponents as MDXComponentsType),
  ExamplePreview,
}
