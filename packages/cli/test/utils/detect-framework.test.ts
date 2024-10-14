import path from "node:path"
import { FRAMEWORKS } from "../../src/constants/frameworks"
import { detectFramework } from "../../src/utils/detect-framework"

describe("detect framework", () => {
  test("nextjs", async () => {
    expect(
      await detectFramework({
        cwd: path.resolve(import.meta.dirname, "../fixtures/project-nextjs"),
      })
    ).toMatchObject(FRAMEWORKS.next)
  })

  test("vite", async () => {
    expect(
      await detectFramework({
        cwd: path.resolve(import.meta.dirname, "../fixtures/project-vite"),
      })
    ).toMatchObject(FRAMEWORKS.vite)
  })

  test("astro", async () => {
    expect(
      await detectFramework({
        cwd: path.resolve(import.meta.dirname, "../fixtures/project-astro"),
      })
    ).toMatchObject(FRAMEWORKS.astro)
  })
})
