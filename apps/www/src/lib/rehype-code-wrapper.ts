import type { Root } from "hast"
import type { MdxjsEsm } from "mdast-util-mdx"
import type { MdxJsxFlowElementHast } from "mdast-util-mdx-jsx"
import { visit } from "unist-util-visit"

export default function rehypeCodeWrapper() {
  return (tree: Root) => {
    visit(tree, { type: "element", tagName: "pre" }, (node, index, parent) => {
      if (
        typeof node.properties.dataLanguage === "string" &&
        typeof node.properties.source === "string"
      ) {
        const componentElement: MdxJsxFlowElementHast = {
          type: "mdxJsxFlowElement",
          name: "CodeWrapper",
          attributes: [
            {
              type: "mdxJsxAttribute",
              name: "lang",
              value: node.properties.dataLanguage,
            },
            {
              type: "mdxJsxAttribute",
              name: "src",
              value: node.properties.source,
            },
          ],
          children: node.children,
        }
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        parent!.children.splice(index!, 1, componentElement)
      }
    })

    const codeWrapperImport: MdxjsEsm = {
      type: "mdxjsEsm",
      value: "",
      data: {
        estree: {
          body: [
            {
              type: "ImportDeclaration",
              specifiers: [
                {
                  type: "ImportSpecifier",
                  imported: {
                    type: "Identifier",
                    name: "CodeWrapper",
                  },
                  local: {
                    type: "Identifier",
                    name: "CodeWrapper",
                  },
                },
              ],
              source: {
                type: "Literal",
                value: "@/components/content",
              },
            },
          ],
          type: "Program",
          sourceType: "module",
        },
      },
    }

    tree.children.unshift(codeWrapperImport)
  }
}
