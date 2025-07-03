import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function Component() {
  return (
    <ToggleGroup variant="outline" multiple>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <UnderlineIcon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
