import * as React from "react"

import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuContextTrigger,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuSeparator,
  MenuTriggerItem,
} from "../ui/menu"

export default function ContextMenu() {
  return (
    <Menu>
      <MenuContextTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </MenuContextTrigger>
      <MenuContent className="w-64">
        <MenuItem inset value="back">
          Back
        </MenuItem>
        <MenuItem inset disabled value="forward">
          Forward
        </MenuItem>
        <MenuItem inset value="reload">
          Reload
        </MenuItem>
        <Menu>
          <MenuTriggerItem inset>More Tools</MenuTriggerItem>
          <MenuContent className="w-48">
            <MenuItem value="save page">Save Page As...</MenuItem>
            <MenuItem value="create shortcut">Create Shortcut...</MenuItem>
            <MenuItem value="name widnow">Name Window...</MenuItem>
            <MenuSeparator />
            <MenuItem value="developer tools">Developer Tools</MenuItem>
          </MenuContent>
        </Menu>
        <MenuSeparator />
        <MenuCheckboxItem value="show bookmarks" checked>
          Show Bookmarks Bar
        </MenuCheckboxItem>
        <MenuCheckboxItem value="show full" checked={false}>
          Show Full URLs
        </MenuCheckboxItem>
        <MenuSeparator />
        <MenuItemGroup>
          <MenuRadioItemGroup value="pedro">
            <MenuItemGroupLabel inset>People</MenuItemGroupLabel>
            <MenuSeparator />
            <MenuRadioItem value="pedro">Pedro Duarte</MenuRadioItem>
            <MenuRadioItem value="colm">Colm Tuite</MenuRadioItem>
          </MenuRadioItemGroup>
        </MenuItemGroup>
      </MenuContent>
    </Menu>
  )
}
