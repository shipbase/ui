#!/bin/env node

import { cac } from "cac"
import { init } from "./commands/init"
import { DEFAULT_LIBRARY } from "./constants/config"

const cli = cac("shipbase-ui")

cli.option("--library [library]", "Choose a ui library", {
  type: ["react", "vue"],
})

cli
  .command("init", "initialize your project and install dependencies")
  .action(({ library }) => init({ library: library?.[0] }))

cli.help()
// @ts-ignore
cli.version(VERSION)
cli.parse()

if (!cli.matchedCommand) {
  cli.outputHelp()
}
