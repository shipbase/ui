import { Button } from "@ui/react/button"
import { useState } from "react"

import { CopyButton } from "@/components/copy-button"
import { cn } from "@/lib/utils"

interface Props {
  collapsible?: boolean
  copy?: boolean
  children?: React.ReactNode
  className?: string
  src?: string
  [key: string]: unknown
}

export default function CodeWrapper({
  children,
  className,
  src,
  collapsible,
  copy = true,
  ...props
}: Props) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={cn(
        "code-wrapper relative mt-4 mb-4 [&_pre]:py-4",
        collapsible && !open && "max-h-32 overflow-hidden",
        collapsible && open && "[&_pre]:pb-12",
        className
      )}
      {...props}
    >
      {src ? children : null}
      {collapsible ? (
        <div
          className={cn(
            "absolute flex items-center justify-center rounded-lg bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 p-2",
            open
              ? "inset-x-0 bottom-0 h-12 rounded-t-none rounded-tr-none"
              : "inset-0"
          )}
        >
          <Button variant="outline" size="sm" onClick={() => setOpen(!open)}>
            {open ? "Collapse" : "Expand"}
          </Button>
        </div>
      ) : null}
      {copy ? (
        <CopyButton className="absolute top-4 right-4" value={src} />
      ) : null}
    </div>
  )
}
