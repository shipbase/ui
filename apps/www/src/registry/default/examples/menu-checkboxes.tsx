import * as React from "react"

import { Button } from "../ui/button"
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuSeparator,
  MenuTrigger,
} from "../ui/menu"

export default function MenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const [showPanel, setShowPanel] = React.useState(false)

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </MenuTrigger>
      <MenuContent className="w-56">
        <MenuItemGroup>
          <MenuItemGroupLabel>Appearance</MenuItemGroupLabel>
          <MenuSeparator />
        </MenuItemGroup>
        <MenuCheckboxItem
          value="status-bar"
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </MenuCheckboxItem>
        <MenuCheckboxItem
          value="activity-bar"
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </MenuCheckboxItem>
        <MenuCheckboxItem
          value="panel"
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </MenuCheckboxItem>
      </MenuContent>
    </Menu>
  )
}
