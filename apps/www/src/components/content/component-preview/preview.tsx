import { Suspense, lazy } from "react"

import { Icons } from "@/components/icons"

interface Props {
  component: string
  name: string
}

const ComponentLoader = ({ component, name }: Props) =>
  lazy(
    () =>
      import(
        `../../../../node_modules/@ui/react/dist/examples/${component}/${name}.js`
      )
  )

export default function Preview({ component, name }: Props) {
  const Component = ComponentLoader({ component, name })

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
