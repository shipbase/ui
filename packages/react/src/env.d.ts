// / <reference types="vite/client" />

interface ImportMeta {
  glob: <M>(glob: string) => Record<string, () => Promise<M>>
}
