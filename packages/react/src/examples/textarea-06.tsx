import { useId } from "react"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Textarea with error</Label>
      <Textarea
        id={id}
        placeholder="Leave a comment"
        defaultValue="Hello!"
        aria-invalid
      />
      <p
        className="mt-2 text-destructive text-xs"
        role="alert"
        aria-live="polite"
      >
        Message should be at least 10 characters
      </p>
    </div>
  )
}
