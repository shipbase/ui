import { describe, expect, it, vi } from "vitest"
import { getPackage } from "../../src/utils/install-package"

describe("getPackage", () => {
  it("should successfully import the package and return", async () => {
    const result = await getPackage("vitest", { cwd: "/" })
    expect(result).toBeDefined()
  })

  it("should throw an error when the package does not exist", async () => {
    try {
      await getPackage("non-existent-package", { cwd: "/" })
    } catch (error: unknown) {
      expect((error as Error).message).toMatchInlineSnapshot(
        `"To continue, shipbase/ui requires the following dependency to be installed: non-existent-package."`
      )
    }
  })
})
