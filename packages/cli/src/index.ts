#!/bin/env node

import { cac } from "cac"
import { init } from "./commands/init.js"

const cli = cac("shipbase/ui")

cli
  .command("init [library]", "initialize your project and install dependencies")
  .action(init)

cli.help()
// @ts-ignore
cli.version(VERSION)
cli.parse()
