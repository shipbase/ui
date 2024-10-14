import { cyan, red } from "kleur/colors"
import ora from "ora"
import { detectFramework } from "./detect-framework"
import { doesDependencyInstalled } from "./does-dependency-exist"
import { resolvePackageJson } from "./resolve-file"

export async function prepare() {
  let spinner = ora("Resolving package.json...").start()
  const packageJson = await resolvePackageJson()

  if (!packageJson.success) {
    spinner.fail(red("package.json not found"))
    throw new Error()
  }
  spinner.succeed()

  spinner = ora("Detecting framework...").start()
  const framework = await detectFramework()
  if (!framework) {
    spinner.fail("Detect framework")
    throw new Error()
  }
  spinner.succeed(`Detected framework, Found ${cyan(framework.label)}`)

  spinner = ora("Checking tailwindcss...")
  if (!doesDependencyInstalled("tailwindcss")) {
    spinner.fail(red("tailwindcss is not installed"))
    throw new Error()
  }
  spinner.succeed("Checked tailwindcss")
}
