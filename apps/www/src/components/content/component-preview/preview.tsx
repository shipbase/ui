import { RotateCcw } from "lucide-react"
import * as React from "react"

import { Button } from "@ui/react/button"
import Examples from "@ui/react/examples"

import { Icons } from "@/components/icons"
interface Props {
  name: string
}

export default function PreviewReact({ name }: Props) {
  const [key, setKey] = React.useState(0)
  const Component = React.lazy(
    Examples[name] ?? (() => <NotFound component={name} />)
  )

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

function NotFound({ component }: { component: string }) {
  return (
    <p className="text-muted-foreground text-sm">
      Component
      <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
        {component}
      </code>
      not found in registry.
    </p>
  )
}
