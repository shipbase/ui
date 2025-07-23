import type React from "react"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@ui/react/button"

export default function CodeCollapsible({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [])

  return (
    <>
      <div
        ref={contentRef}
        className="relative overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen
            ? `${contentHeight}px`
            : "calc(var(--spacing) * 48)",
        }}
      >
        {children}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          className={cn(
            "absolute inset-x-0 bottom-0 z-10 h-12 rounded-none border-0 bg-gradient-to-t from-background to-transparent text-muted-foreground transition-all duration-300 hover:bg-transparent"
          )}
        >
          {isOpen ? "Collapse" : "Expand"}
        </Button>
      </div>
    </>
  )
}
