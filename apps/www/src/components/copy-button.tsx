import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@ui/react/button"
import { CheckIcon, ClipboardIcon } from "lucide-react"
import { useState } from "react"

interface CopyButtonProps extends ButtonProps {
  value?: string
  className?: string
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!value) return

    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy to clipboard:", error)
    }
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        "copy-code-button",
        "size-7 bg-code hover:opacity-100 focus-visible:opacity-100",
        className
      )}
      onClick={handleCopy}
      {...props}
    >
      {copied ? (
        <CheckIcon className="check-icon" />
      ) : (
        <ClipboardIcon className="copy-icon" />
      )}
      <span className="sr-only">Copy</span>
    </Button>
  )
}
