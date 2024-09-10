import { cac } from "cac"
import pkg from "../package.json" assert { type: "json" }
import { init } from "./commands/init.js"

const cli = cac("shipbase/ui")

cli
  .command(
    "init [framework]",
    "initialize your project and install dependencies"
  )
  .action(init)

cli.help()
cli.version(pkg.version)
cli.parse()
