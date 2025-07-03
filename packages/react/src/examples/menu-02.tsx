import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@/components/ui/menu"

export default function Component() {
  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">
          Same width of trigger
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </MenuTrigger>
      <MenuContent className="min-w-(--reference-width)">
        <MenuItem value="Option 1">Option 1</MenuItem>
        <MenuItem value="Option 2">Option 2</MenuItem>
        <MenuItem value="Option 3">Option 3</MenuItem>
        <MenuItem value="Option 4">Option 4</MenuItem>
      </MenuContent>
    </Menu>
  )
}
