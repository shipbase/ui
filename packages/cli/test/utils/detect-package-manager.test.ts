import path from "node:path"
import { detectPackageManager } from "nypm"

test("detect package manager", async () => {
  expect(
    await detectPackageManager(
      path.resolve(__dirname, "../fixtures/project-yarn")
    )
  ).toMatchObject({
    name: "yarn",
    command: "yarn",
    lockFile: "yarn.lock",
  })

  expect(
    await detectPackageManager(
      path.resolve(__dirname, "../fixtures/project-npm")
    )
  ).toMatchObject({
    name: "npm",
    command: "npm",
    lockFile: "package-lock.json",
  })

  expect(
    await detectPackageManager(
      path.resolve(__dirname, "../fixtures/project-pnpm")
    )
  ).toMatchObject({
    name: "pnpm",
    command: "pnpm",
    lockFile: "pnpm-lock.yaml",
  })

  expect(
    await detectPackageManager(
      path.resolve(__dirname, "../fixtures/project-bun")
    )
  ).toMatchObject({
    name: "bun",
    command: "bun",
    lockFile: "bun.lockb",
  })
})
