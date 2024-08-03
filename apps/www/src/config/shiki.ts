import type { ShikiConfig } from "@astrojs/markdown-remark"
import { transformerMetaHighlight } from "@shikijs/transformers"

export const shikiConfig = {
  theme: "vesper",
  transformers: [
    {
      // @ts-ignore
      root(tree) {
        return {
          type: "root",
          children: [
            {
              type: "element",
              tagName: "CodeWrapper",
              properties: {
                src: this.source,
              },
              children: tree.children,
            },
          ],
        }
      },
    },
    transformerMetaHighlight({
      className: "line--highlighted",
    }),
  ],
} satisfies ShikiConfig
