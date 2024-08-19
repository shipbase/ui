import preferredPM from "preferred-pm"

export async function getPackageManager(
  pkgPath: string
): Promise<"yarn" | "pnpm" | "bun" | "npm"> {
  const packageManager = await preferredPM(pkgPath)
  return packageManager?.name ?? "npm"
}
