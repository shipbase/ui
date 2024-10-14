import { execSync } from "node:child_process"
import path from "node:path"
import { doesDependencyInstalled } from "../../src/utils/does-dependency-exist"

describe("ensure dependency installed", () => {
  beforeAll(async () => {
    for (const pkg of [
      "project-astro",
      "project-nextjs",
      "project-pnpm",
      "project-vite",
    ]) {
      execSync("pnpm install --ignore-workspace", {
        cwd: path.resolve(import.meta.dirname, `../fixtures/${pkg}`),
      })
    }

    execSync("npm install", {
      cwd: path.resolve(import.meta.dirname, "../fixtures/project-npm"),
    })

    execSync("yarn install", {
      cwd: path.resolve(import.meta.dirname, "../fixtures/project-yarn"),
    })
  })

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
