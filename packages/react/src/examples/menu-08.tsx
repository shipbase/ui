import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
  MenuTriggerItem,
} from "@/components/ui/menu"
import { Portal } from "@ark-ui/react/portal"

export default function Component() {
  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">
          Rich menu
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </MenuTrigger>
      <Portal>
        <MenuContent>
          <MenuItemGroup>
            <MenuItem value="Edit">
              <span>Edit</span>
              <MenuShortcut>⌘E</MenuShortcut>
            </MenuItem>
            <MenuItem value="Duplicate">
              <span>Duplicate</span>
              <MenuShortcut>⌘D</MenuShortcut>
            </MenuItem>
          </MenuItemGroup>
          <MenuSeparator />
          <MenuItemGroup>
            <MenuItem value="Archive">
              <span>Archive</span>
              <MenuShortcut>⌘A</MenuShortcut>
            </MenuItem>
            <Menu>
              <MenuTriggerItem>More</MenuTriggerItem>
              <MenuContent>
                <MenuItem value="Move to project">Move to project</MenuItem>
                <MenuItem value="Move to folder">Move to folder</MenuItem>
                <MenuSeparator />
                <MenuItem value="Advanced options">Advanced options</MenuItem>
              </MenuContent>
            </Menu>
          </MenuItemGroup>
          <MenuSeparator />
          <MenuItemGroup>
            <MenuItem value="Share">Share</MenuItem>
            <MenuItem value="Add to favorites">Add to favorites</MenuItem>
          </MenuItemGroup>
          <MenuSeparator />
          <MenuItem value="Delete">
            <span>Delete</span>
            <MenuShortcut>⌘⌫</MenuShortcut>
          </MenuItem>
        </MenuContent>
      </Portal>
    </Menu>
  )
}
