const examples = import.meta.glob("./*.vue")

export default Object.fromEntries(
  Object.entries(examples).map(([path, module]) => {
    const name = path.match(/\.\/(.*)\.vue$/)?.[1]
    return [name, module]
  })
)
