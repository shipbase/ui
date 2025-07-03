"use client"

import {
  ArchiveRestoreIcon,
  ChevronDownIcon,
  PlusIcon,
  Share2Icon,
  TrashIcon,
} from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
  MenuTriggerItem,
} from "@/components/ui/menu"

export default function Component() {
  const [framework, setFramework] = useState("nextjs")
  const [emailNotifications, setEmailNotifications] = useState(false)
  const [pushNotifications, setPushNotifications] = useState(true)

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">
          Rich menu with icons
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItemGroup>
          <MenuItem value="new">
            <PlusIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>New</span>
            <MenuShortcut>⌘N</MenuShortcut>
          </MenuItem>
        </MenuItemGroup>
        <MenuSeparator />
        <MenuItemGroup>
          <Menu>
            <MenuTriggerItem>Framework</MenuTriggerItem>
            <MenuContent>
              <MenuRadioItemGroup
                value={framework}
                onValueChange={(e) => setFramework(e.value)}
              >
                <MenuRadioItem value="nextjs">Next.js</MenuRadioItem>
                <MenuRadioItem value="sveltekit" disabled>
                  SvelteKit
                </MenuRadioItem>
                <MenuRadioItem value="remix">Remix</MenuRadioItem>
                <MenuRadioItem value="astro">Astro</MenuRadioItem>
              </MenuRadioItemGroup>
            </MenuContent>
          </Menu>
          <Menu>
            <MenuTriggerItem>Notifications</MenuTriggerItem>
            <MenuContent>
              <MenuCheckboxItem
                value="email"
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              >
                Email
              </MenuCheckboxItem>
              <MenuCheckboxItem
                value="push"
                checked={pushNotifications}
                onCheckedChange={setPushNotifications}
              >
                Push
              </MenuCheckboxItem>
            </MenuContent>
          </Menu>
        </MenuItemGroup>
        <MenuSeparator />
        <MenuItemGroup>
          <MenuItem value="share">
            <Share2Icon size={16} className="opacity-60" aria-hidden="true" />
            <span>Share</span>
          </MenuItem>
          <MenuItem value="archive">
            <ArchiveRestoreIcon
              size={16}
              className="opacity-60"
              aria-hidden="true"
            />
            <span>Archive</span>
          </MenuItem>
        </MenuItemGroup>
        <MenuSeparator />
        <MenuItem value="delete">
          <TrashIcon size={16} className="opacity-60" aria-hidden="true" />
          <span>Delete</span>
          <MenuShortcut>⌘⌫</MenuShortcut>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
