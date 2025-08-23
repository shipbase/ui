import { default as ComponentAddBashCommand } from "./code-wrapper/component-add-bash-command.astro"
import { default as CodeWrapper } from "./code-wrapper/index.astro"
import { default as ComponentInstall } from "./component-install/index.astro"
import { default as ComponentPreview } from "./component-preview/index.astro"
import { default as ComponentSource } from "./component-source.astro"
import porse from "./prose"
import { default as Step } from "./step.astro"
import { default as Steps } from "./steps.astro"

export const MDXComponents = {
  ...porse,
  ComponentInstall,
  ComponentPreview,
  ComponentSource,
  ComponentAddBashCommand,
  Step,
  Steps,
  CodeWrapper,
}
