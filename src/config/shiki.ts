import type { ShikiConfig } from "@astrojs/markdown-remark"
import { transformerMetaHighlight } from "@shikijs/transformers"
import { normalizeTheme } from "shiki"

import theme from "../lib/highlighter-theme.json"

export const shikiConfig = {
  // @ts-ignore
  theme: normalizeTheme(theme),
  transformers: [
    /**
     * @type {import('shiki').ShikiTransformer}
     */
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
