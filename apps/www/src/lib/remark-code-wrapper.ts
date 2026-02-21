import type { Code, Parent, Root } from "mdast"
import type { MdxJsxAttribute, MdxJsxFlowElement } from "mdast-util-mdx-jsx"
import { visit } from "unist-util-visit"

/**
 * Wraps code blocks in a custom MDX Code component.
 *
 * @returns Transform function for the AST.
 */
export function remarkPluginCodeWrapper() {
  return (tree: Root) => {
    visit(tree, "code", (node: Code, index: number | undefined, parent: Parent | undefined) => {
      if (!parent || index === undefined) return

      const attributes = [
        ["src", node.value || ""],
        ["lang", node.lang || "text"],
        ["meta", node.meta || ""],
        ["data-scope", "code-wrapper"],
      ] as const

      const mdxJSxAttribute = attributes.map(([name, value]) => ({
        type: "mdxJsxAttribute",
        name,
        value,
      })) satisfies MdxJsxAttribute[]

      const codeElement = {
        type: "mdxJsxFlowElement",
        name: "CodeWrapper",
        attributes: mdxJSxAttribute,
        children: [],
      } satisfies MdxJsxFlowElement

      parent.children.splice(index, 1, codeElement)
    })
  }
}
