import { ItalicIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export default function Component() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  )
}
