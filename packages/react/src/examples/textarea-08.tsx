import { useId } from "react"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Shorter textarea</Label>
      <Textarea
        id={id}
        className="min-h-0"
        placeholder="Leave a comment"
        rows={2}
      />
    </div>
  )
}
