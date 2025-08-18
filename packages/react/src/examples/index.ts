const examples = import.meta.glob("./*.js")

export default Object.fromEntries(
  Object.entries(examples).map(([path, module]) => {
    const name = path.match(/\.\/(.*)\.js$/)?.[1]
    return [name, module]
  })
)
