import type React from "react"
import { useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@ui/react/button"

export default function CodeCollapsible({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    if (!containerRef.current) return
    if (!isOpen) {
      // Measure and expand
      containerRef.current.style.maxHeight = "none"
      const height = containerRef.current.scrollHeight
      containerRef.current.style.maxHeight = `${height}px`
    } else {
      // Collapse
      containerRef.current.style.maxHeight = "calc(var(--spacing) * 48)"
    }

    setIsOpen(!isOpen)
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden transition-all duration-500 ease-in-out"
      style={{ maxHeight: "calc(var(--spacing) * 48)" }}
    >
      {children}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleToggle}
        className={cn(
          "absolute inset-x-0 bottom-0 z-10 h-12 rounded-none border-0 bg-gradient-to-t from-background to-transparent text-muted-foreground transition-all duration-300 hover:bg-transparent",
        )}
      >
        {isOpen ? "Collapse" : "Expand"}
      </Button>
    </div>
  )
}
