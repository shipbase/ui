import Examples from "@ui/react/examples"
import { Suspense, lazy } from "react"

import { Icons } from "@/components/icons"

interface Props {
  name: string
}

export default function Preview({ name }: Props) {
  const Component = lazy(Examples[name])

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
