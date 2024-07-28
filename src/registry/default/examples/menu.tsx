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

import { Icons } from "@/components/icons"

import { Button } from "../ui/button"
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
} from "../ui/menu"

export default function MenuDemo() {
  return (
    <Menu>
      <MenuTrigger asChild>
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
          <Icons.gitHub className="mr-2 h-4 w-4" />
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
}
