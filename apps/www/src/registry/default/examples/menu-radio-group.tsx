import * as React from "react"

import { Button } from "../ui/button"
import {
  Menu,
  MenuContent,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuSeparator,
  MenuTrigger,
} from "../ui/menu"

export default function MenuCheckboxes() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </MenuTrigger>
      <MenuContent className="w-56">
        <MenuItemGroup>
          <MenuItemGroupLabel>Panel Position</MenuItemGroupLabel>
          <MenuSeparator />
          <MenuRadioItemGroup
            value={position}
            onValueChange={(e) => setPosition(e.value)}
          >
            <MenuRadioItem value="top">Top</MenuRadioItem>
            <MenuRadioItem value="bottom">Bottom</MenuRadioItem>
            <MenuRadioItem value="right">Right</MenuRadioItem>
          </MenuRadioItemGroup>
        </MenuItemGroup>
      </MenuContent>
    </Menu>
  )
}
