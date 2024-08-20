import { Suspense, lazy } from "react"

import { Icons } from "@/components/icons"

interface Props {
  component: string
  name: string
}

const ComponentLoader = ({ component, name }: Props) =>
  lazy(() =>
    import(`@ui/react/examples/${component}`).then((module) => {
      console.log("module", module)
      return {
        default: module[name],
      }
    })
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
