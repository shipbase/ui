import { cyan, green, red, yellow } from "kleur/colors"

export const logger = {
  error(text: string) {
    console.log(red(text))
  },
  warn(text: string) {
    console.log(yellow(text))
  },
  info(text: string) {
    console.log(cyan(text))
  },
  success(text: string) {
    console.log(green(text))
  },
  break() {
    console.log("")
  },
}
