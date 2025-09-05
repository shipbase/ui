"use client"

import { RotateCcw } from "lucide-react"
import { Suspense, lazy, useEffect, useMemo, useState } from "react"

import { Button } from "@ui/react/button"
import Examples from "@ui/react/examples"
import { ClientOnly } from "../client-only"

interface Props {
  name: string
}

export default function ExamplePreview({ name }: Props) {
  const [key, setKey] = useState(0)
  const Component = useMemo(
    () => Examples[name] || <NotFound name={name} />,
    [name]
  )

  console.log(Examples)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientOnly>
        <Component />
      </ClientOnly>
    </Suspense>
  )

  // return (
  //   <>
  //     <Button
  //       onClick={() => setKey((prev) => prev + 1)}
  //       variant="ghost"
  //       className="absolute top-2 right-2"
  //     >
  //       <RotateCcw aria-label="restart-btn" size={16} />
  //     </Button>
  //     <div
  //       key={key}
  //       className="flex size-full max-w-8/12 flex-1 items-center justify-center "
  //     >
  //       <Suspense
  //         fallback={
  //           <div className="flex w-full items-center justify-center text-muted-foreground text-sm">
  //             Loading...
  //           </div>
  //         }
  //       >
  //         <Component />
  //       </Suspense>
  //     </div>
  //   </>
  // )
}

function NotFound({ name }: { name: string }) {
  return (
    <p className="text-muted-foreground text-sm">
      Component
      <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
        {name}
      </code>
      not found in registry.
    </p>
  )
}
