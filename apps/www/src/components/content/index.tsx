import { default as Code } from "@/components/code.astro"
import { default as ComponentAddBashCommand } from "./component-add-bash-command/index.astro"
import { default as ComponentInstall } from "./component-install/index.astro"
import { default as ComponentPreview } from "./component-preview/index.astro"
import { default as ComponentSource } from "./component-source.astro"
import { default as PackageInstallBashCommand } from "./package-install-bash-command/index.astro"
import porse from "./prose"
import { default as Step } from "./step.astro"
import { default as Steps } from "./steps.astro"

export const MDXComponents = {
  ...porse,
  ComponentInstall,
  ComponentPreview,
  ComponentSource,
  ComponentAddBashCommand,
  PackageInstallBashCommand,
  Step,
  Steps,
  Code,
}
