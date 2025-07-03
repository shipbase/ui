import {
  BoltIcon,
  ChevronDownIcon,
  CopyPlusIcon,
  FilesIcon,
  Layers2Icon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@/components/ui/menu"

export default function Component() {
  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">
          Menu with icons
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </MenuTrigger>
      <MenuContent className="min-w-(--reference-width)">
        <MenuItem value="Copy">
          <CopyPlusIcon size={16} className="opacity-60" aria-hidden="true" />
          Copy
        </MenuItem>
        <MenuItem value="Edit">
          <BoltIcon size={16} className="opacity-60" aria-hidden="true" />
          Edit
        </MenuItem>
        <MenuItem value="Group">
          <Layers2Icon size={16} className="opacity-60" aria-hidden="true" />
          Group
        </MenuItem>
        <MenuItem value="Clone">
          <FilesIcon size={16} className="opacity-60" aria-hidden="true" />
          Clone
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
