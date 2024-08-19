import { createRequire } from "node:module"

type GetPackageOptions = {
  cwd?: string
}

const require = createRequire(import.meta.url)

export async function getPackage<T>(
  packageName: string,
  options: GetPackageOptions
): Promise<T | undefined> {
  try {
    // Try to resolve with `createRequire` first to prevent ESM caching of the package
    // if it errors and fails here
    require.resolve(packageName, { paths: [options.cwd ?? process.cwd()] })
    const packageImport = await import(packageName)
    return packageImport as T
  } catch (error) {
    const message = `To continue, shipbase/ui requires the following dependency to be installed: ${packageName}.`
    throw new Error(message)
    // TODO: installPackage
    // const result = await installPackage()
  }
}
