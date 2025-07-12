import type { Root } from "hast"
import type { MdxjsEsm } from "mdast-util-mdx"
import type { MdxJsxFlowElementHast } from "mdast-util-mdx-jsx"
import { visit } from "unist-util-visit"

export default function rehypeCodeWrapper() {
  return (tree: Root) => {
    visit(tree, { type: "element", tagName: "pre" }, (node, index, parent) => {
      console.log(node)
      if (
        typeof node.properties.dataLanguage === "string" &&
        typeof node.properties.source === "string"
      ) {
        const componentElement: MdxJsxFlowElementHast = {
          type: "mdxJsxFlowElement",
          name: "Code",
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
        if (parent && index) parent.children.splice(index, 1, componentElement)
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
                    name: "Code",
                  },
                  local: {
                    type: "Identifier",
                    name: "Code",
                  },
                },
              ],
              source: {
                type: "Literal",
                value: "@/components",
              },
              attributes: [],
            },
          ],
          type: "Program",
          sourceType: "module",
        },
      },
    }

    // tree.children.unshift(codeWrapperImport)
  }
}
