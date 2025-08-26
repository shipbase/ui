import { BoldIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export default function Component() {
  return (
    <Toggle aria-label="Toggle italic">
      <BoldIcon className="h-4 w-4" />
    </Toggle>
  )
}
