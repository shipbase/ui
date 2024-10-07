import Examples from "@ui/react/examples"
import * as React from "react"

import { RotateCcw } from "lucide-react"

import { Icons } from "@/components/icons"
import { Button } from "@ui/react/button"

interface Props {
  name: string
  hidden?: boolean
}

export default function Preview({ name, hidden }: Props) {
  if (hidden) return null

  const [key, setKey] = React.useState(0)
  const Component = React.lazy(Examples[name])

  return (
    <div
      key={key}
      className="relative flex size-full flex-1 items-center justify-center p-4 md:p-10"
    >
      <Button
        onClick={() => setKey((prev) => prev + 1)}
        variant="ghost"
        className="absolute top-2 right-2"
      >
        <RotateCcw aria-label="restart-btn" size={16} />
      </Button>
      <React.Suspense
        fallback={
          <div className="flex w-full items-center justify-center text-muted-foreground text-sm">
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </div>
        }
      >
        <Component />
      </React.Suspense>
    </div>
  )
}
