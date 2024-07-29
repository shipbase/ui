import * as React from "react"
import type { Meta } from "@storybook/react"
import {
  Cloud,
  CreditCard,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { Button } from "../ui/button"
import {
  Menu,
  MenuArrow,
  MenuCheckboxItem,
  MenuContent,
  MenuContextTrigger,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
} from "../ui/menu"

export default {
  title: "Components/Menu",
} satisfies Meta

export const Basic = () => (
  <Menu>
    <MenuTrigger>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="w-56">
      <MenuItemGroup>
        <MenuItemGroupLabel>My Account</MenuItemGroupLabel>
        <MenuSeparator />
        <MenuItem value="Profile">
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </MenuItem>
        <MenuItem value="Billing">
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Billing</span>
        </MenuItem>
        <MenuItem value="Settings">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </MenuItem>
        <MenuItem value="Keyboard shortcuts">
          <Keyboard className="mr-2 h-4 w-4" />
          <span>Keyboard shortcuts</span>
        </MenuItem>
      </MenuItemGroup>
      <MenuSeparator />
      <MenuItemGroup>
        <MenuItem value="Team">
          <Users className="mr-2 h-4 w-4" />
          <span>Team</span>
        </MenuItem>
        <Menu>
          <MenuTriggerItem>
            <UserPlus className="mr-2 h-4 w-4" />
            <span>Invite users</span>
          </MenuTriggerItem>
          <MenuContent>
            <MenuItem value="Email">
              <Mail className="mr-2 h-4 w-4" />
              <span>Email</span>
            </MenuItem>
            <MenuItem value="Message">
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Message</span>
            </MenuItem>
            <MenuSeparator />
            <MenuItem value="more">
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>More...</span>
            </MenuItem>
          </MenuContent>
        </Menu>
        <MenuItem value="New Team">
          <Plus className="mr-2 h-4 w-4" />
          <span>New Team</span>
        </MenuItem>
      </MenuItemGroup>
      <MenuSeparator />
      <MenuItem value="GitHub">
        {/* <Github className="mr-2 h-4 w-4" /> */}
        <span>GitHub</span>
      </MenuItem>
      <MenuItem value="Support">
        <LifeBuoy className="mr-2 h-4 w-4" />
        <span>Support</span>
      </MenuItem>
      <MenuItem value="API" disabled>
        <Cloud className="mr-2 h-4 w-4" />
        <span>API</span>
      </MenuItem>
      <MenuSeparator />
      <MenuItem value="Log out">
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </MenuItem>
    </MenuContent>
  </Menu>
)

export const Checkbox = () => {
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

export function RadioGroup() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </MenuTrigger>
      <MenuContent className="w-56">
        <MenuArrow />
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

export const ContextMenu = () => {
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
