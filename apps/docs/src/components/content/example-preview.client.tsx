"use client"

import { RotateCcw } from "lucide-react"
import { Suspense, useEffect, useState } from "react"

import { Button } from "@ui/react/button"
import Examples from "@ui/react/examples"

interface Props {
  name: string
}

export default function ExamplePreviewClient({ name }: Props) {
  const [key, setKey] = useState(0)
  const Component = Examples[name] ?? (() => <NotFound name={name} />)

  useEffect(() => {
    setKey((prev) => prev + 1)
  }, [])

  return (
    <div className="relative flex size-full h-[450px] w-full items-center justify-center rounded border p-4 md:p-10">
      <Button
        onClick={() => setKey((prev) => prev + 1)}
        variant="ghost"
        className="absolute top-2 right-2"
      >
        <RotateCcw aria-label="restart-btn" size={16} />
      </Button>
      <div
        key={key}
        className="flex size-full max-w-8/12 flex-1 items-center justify-center"
      >
        <Suspense
          fallback={
            <div className="flex w-full items-center justify-center text-muted-foreground text-sm">
              Loading...
            </div>
          }
        >
          <Component />
        </Suspense>
      </div>
    </div>
  )
}

function NotFound({ name }: { name: string }) {
  return (
    <p className="text-muted-foreground text-sm">
      Component{" "}
      <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
        {name}
      </code>{" "}
      not found in registry.
    </p>
  )
}
