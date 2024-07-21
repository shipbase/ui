import CodeWrapper from "./code-wrapper.astro"
import { default as ComponentInstall } from "./component-install/index.astro"
import { default as ComponentPreview } from "./component-preview/component-preview.astro"
import { default as ComponentSource } from "./component-source.astro"
import porse from "./prose"
import { default as Step } from "./step.astro"
import { default as Steps } from "./steps.astro"

export const MDXComponents = {
  ...porse,
  ComponentInstall,
  ComponentPreview,
  ComponentSource,
  Step,
  Steps,
  codewrapper: CodeWrapper,
}
