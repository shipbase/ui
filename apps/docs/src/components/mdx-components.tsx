import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"

import ExamplePreview from "@/components/content/example-preview"

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  // @ts-expect-error
  return {
    ...defaultMdxComponents,
    ...components,
    ExamplePreview,
  } as MDXComponents
}
