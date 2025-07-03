import { UnderlineIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export default function Component() {
  return (
    <Toggle aria-label="Toggle italic" disabled>
      <UnderlineIcon className="h-4 w-4" />
    </Toggle>
  )
}
