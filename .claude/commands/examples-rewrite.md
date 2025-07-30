---
description: rewrite an example component following the user given description
---



## Tasks

1. Ask the user for a description of the example they want to create.
2. Determine primitive components existing in this repository.
  a. for React, primitives are in @packages/react/src/components/ui
3. Determine the components that can be built on top of the primitive components.
4. Write a new example file for a given description.
  a. the usage of each primitive component you should reference their example in @packages/react/src/examples/

## Specifics

- If the component has a `Label` anatomy, you should use it, do not use another `Label` component. Example:

✅ Right:
```tsx
function Example() {
  return (
    <Switch>
      <SwitchControl />
      <SwitchLabel>Label</SwitchLabel>
    </Switch>
  )
}
```

❌ Wrong:
```tsx
function Example() {
  const id = useId()
  return (
    <Label htmlFor={id}>
    <Switch id={id}>
      <SwitchControl />
    </Switch>
  )
}
```