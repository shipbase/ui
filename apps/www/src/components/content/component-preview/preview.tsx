import { Suspense, lazy } from "react"

import { Icons } from "@/components/icons"

interface Props {
  component: string
  name?: string
}

const ComponentLoader = ({ component, name }: Props) =>
  lazy(
    () =>
      import(
        `../../../../node_modules/@ui/react/dist/examples/${component}/${name || component}.js`
      )
  )

export const Preview = ({ component, name }: Props) => {
  const Component = ComponentLoader({ component, name })

  if (!Component) {
    return (
      <p className="text-muted-foreground text-sm">
        Component
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {component}
        </code>
        not found in registry.
      </p>
    )
  }

  return (
    <Suspense
      fallback={
        <div className="flex w-full items-center justify-center text-muted-foreground text-sm">
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </div>
      }
    >
      <Component />
    </Suspense>
  )
}
