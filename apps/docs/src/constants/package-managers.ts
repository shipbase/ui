export const packageManagers = ["pnpm", "npm", "yarn", "bun"] as const

export type PackageManager = (typeof packageManagers)[number]

export const npmInstallBashRE = /^npm install/
export const npxBashRE = /^npx/
