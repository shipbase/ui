import type { ThemePresets } from "@astrojs/markdown-remark"
import type { HTMLAttributes } from "react"
import type {
  BuiltinLanguage,
  LanguageRegistration,
  ShikiTransformer,
  SpecialLanguage,
  ThemeRegistration,
  ThemeRegistrationRaw,
} from "shiki"
import { bundledLanguages } from "shiki/langs"

import { getCachedHighlighter } from "@/lib/shiki"

interface CodeProps extends Omit<HTMLAttributes<"pre">, "lang"> {
  /** The code to highlight. Required. */
  code: string
  /**
   * The language of your code.
   * Supports all languages listed here: https://shiki.style/languages
   * Instructions for loading a custom language: https://shiki.style/guide/load-lang
   *
   * @default "plaintext"
   */
  lang?: BuiltinLanguage | SpecialLanguage | LanguageRegistration
  /**
   * A metastring to pass to the highlighter.
   * Allows passing information to transformers: https://shiki.style/guide/transformers\#meta
   *
   * @default undefined
   */
  meta?: string
  /**
   * The styling theme.
   * Supports all themes listed here: https://shiki.style/themes
   * Instructions for loading a custom theme: https://shiki.style/guide/load-theme
   *
   * @default "github-dark"
   */
  theme?: ThemePresets | ThemeRegistration | ThemeRegistrationRaw
  /**
   * Multiple themes to style with -- alternative to "theme" option.
   * Supports all themes found above; see https://shiki.style/guide/dual-themes for more information.
   */
  themes?: Record<
    string,
    ThemePresets | ThemeRegistration | ThemeRegistrationRaw
  >
  /**
   * Chooses a theme from the "themes" option that you've defined as the default styling theme.
   *  - <string>: one of the keys defined in the "themes" option. Will throw an error if the key is not defined.
   *  - false: disabled. You'll have to apply the styling theme yourself. No effect if the "themes" option is not set.
   *
   * See https://shiki.style/guide/dual-themes\#without-default-color for more information.
   *
   * @default "light"
   */
  defaultColor?: "light" | "dark" | string | false
  /**
   * Enable word wrapping.
   *  - true: enabled.
   *  - false: disabled.
   *  - null: All overflow styling removed. Code will overflow the element by default.
   *
   * @default false
   */
  wrap?: boolean | null
  /**
   * Generate inline code element only, without the pre element wrapper.
   *
   * @default false
   */
  inline?: boolean
  /**
   * Shiki transformers to customize the generated HTML by manipulating the hast tree.
   * Supports all transformers listed here: https://shiki.style/packages/transformers\#transformers
   * Instructions for custom transformers: https://shiki.style/guide/transformers
   */
  transformers?: ShikiTransformer[]
  /**
   * Loading placeholder content while highlighting
   */
  placeholder?: string
}

export async function Code({
  code,
  lang = "plaintext",
  meta,
  theme = "github-dark",
  themes = {},
  defaultColor = "light",
  wrap = false,
  inline = false,
  transformers = [],
  ...rest
}: CodeProps) {
  // const highlighter = await getCachedHighlighter({
  //   langs: [
  //     typeof lang === "string"
  //       ? Object.keys(bundledLanguages).includes(lang)
  //         ? lang
  //         : "plaintext"
  //       : (lang as any),
  //   ],
  //   themes: {
  //     dark: "github-dark",
  //     light: "github-light",
  //   },
  // })

  // const html = await highlighter.codeToHtml(
  //   code,
  //   typeof lang === "string" ? lang : lang.name,
  //   {
  //     defaultColor,
  //     wrap,
  //     inline,
  //     transformers,
  //     meta,
  //     attributes: rest as any,
  //   }
  // )

  console.log("html")
  return <><div>hh</div></>
  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
  // return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default Code
