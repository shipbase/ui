import type { Code, Parent, Root } from "mdast"
import type { MdxJsxAttribute, MdxJsxFlowElement } from "mdast-util-mdx-jsx"
import { visit } from "unist-util-visit"

/**
 * Wraps code blocks in a custom MDX Code component.
 *
 * @returns Transform function for the AST.
 */
export function remarkCodeWrapper() {
  return (tree: Root) => {
    visit(
      tree,
      "code",
      (node: Code, index: number | undefined, parent: Parent | undefined) => {
        if (!parent || index === undefined) return

        const attributes: MdxJsxAttribute[] = [
          {
            type: "mdxJsxAttribute",
            name: "src",
            value: node.value,
          },
          {
            type: "mdxJsxAttribute",
            name: "lang",
            value: node.lang || "text",
          },
          {
            type: "mdxJsxAttribute",
            name: "className",
            value: "remark-code-wrapper",
          },
        ]

        const codeElement: MdxJsxFlowElement = {
          type: "mdxJsxFlowElement",
          name: "Code",
          attributes,
          children: [],
        }

        parent.children.splice(index, 1, codeElement)
      }
    )
  }
}
