import { Button } from "@/components/ui/button"
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@/components/ui/menu"
import { EllipsisIcon } from "lucide-react"

export default function Component() {
  return (
    <Menu>
      <MenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full shadow-none"
          aria-label="Open edit menu"
        >
          <EllipsisIcon size={16} aria-hidden="true" />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="Option 1">Option 1</MenuItem>
        <MenuItem value="Option 2">Option 2</MenuItem>
        <MenuItem value="Option 3">Option 3</MenuItem>
        <MenuItem value="Option 4">Option 4</MenuItem>
      </MenuContent>
    </Menu>
  )
}
