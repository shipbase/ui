import {
  BoltIcon,
  ChevronDownIcon,
  CopyPlusIcon,
  FilesIcon,
  Layers2Icon,
  TrashIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu"

export default function Component() {
  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">
          Grouped items
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItemGroup>
          <MenuItem value="Copy">
            <CopyPlusIcon size={16} className="opacity-60" aria-hidden="true" />
            Copy
          </MenuItem>
          <MenuItem value="Edit">
            <BoltIcon size={16} className="opacity-60" aria-hidden="true" />
            Edit
          </MenuItem>
        </MenuItemGroup>
        <MenuSeparator />
        <MenuItemGroup>
          <MenuItem value="Group">
            <Layers2Icon size={16} className="opacity-60" aria-hidden="true" />
            Group
          </MenuItem>
          <MenuItem value="Clone">
            <FilesIcon size={16} className="opacity-60" aria-hidden="true" />
            Clone
          </MenuItem>
          <MenuItem value="Delete">
            <TrashIcon size={16} aria-hidden="true" />
            Delete
          </MenuItem>
        </MenuItemGroup>
      </MenuContent>
    </Menu>
  )
}
