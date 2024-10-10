import path from "node:path"
import { doesDependencyInstalled } from "../../src/utils/does-dependency-exist"

describe("ensure dependency installed", () => {
  test("should throw if package is not installed", async () => {
    expect(
      doesDependencyInstalled("tailwindcss", {
        cwd: path.resolve(import.meta.dirname, "../fixtures/project-npm"),
      })
    ).toBe(false)

    expect(
      doesDependencyInstalled("tailwindcss", {
        cwd: path.resolve(import.meta.dirname, "../fixtures/project-pnpm"),
      })
    ).toBe(true)

    expect(
      doesDependencyInstalled("tailwindcss", {
        cwd: path.resolve(import.meta.dirname, "../fixtures/project-vite"),
      })
    ).toBe(true)

    expect(
      doesDependencyInstalled("tailwindcss", {
        cwd: path.resolve(import.meta.dirname, "../fixtures/project-nextjs"),
      })
    ).toBe(true)
  })
})
