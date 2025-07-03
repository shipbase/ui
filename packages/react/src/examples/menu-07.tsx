"use client"

import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Menu,
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuTrigger,
} from "@/components/ui/menu"

export default function Component() {
  const [framework, setFramework] = useState("nextjs")

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">
          Radio items
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </MenuTrigger>
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
  )
}
