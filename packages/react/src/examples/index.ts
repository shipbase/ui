import * as React from "react"

type Example = { default: React.ComponentType }
const examples = import.meta.glob<Example>("./*.tsx")

export default Object.fromEntries(
  Object.entries(examples).map(([path, importer]) => {
    const name = path.match(/\.\/(.*)\.tsx$/)?.[1]
    return [name, React.lazy(importer)]
  })
) as Record<string, React.LazyExoticComponent<React.ComponentType>>
