const examples = import.meta.glob("./*.tsx")

export default Object.fromEntries(
  Object.entries(examples).map(([path, module]) => {
    const name = path.match(/\.\/(.*)\.tsx$/)?.[1]
    return [name, module]
  })
)
