"use client"

import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuTrigger,
} from "@/components/ui/menu"

type Checked = boolean

export default function Component() {
  const [nextjs, setNextjs] = useState<Checked>(false)
  const [sveltekit, setSveltekit] = useState<Checked>(true)
  const [astro, setAstro] = useState<Checked>(false)
  const [remix, setRemix] = useState<Checked>(false)

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">
          Checkbox items
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuCheckboxItem
          value="Next.js"
          checked={nextjs}
          onCheckedChange={setNextjs}
        >
          Next.js
        </MenuCheckboxItem>
        <MenuCheckboxItem
          value="SvelteKit"
          checked={sveltekit}
          onCheckedChange={setSveltekit}
        >
          SvelteKit
        </MenuCheckboxItem>
        <MenuCheckboxItem
          value="Remix"
          checked={remix}
          onCheckedChange={setRemix}
          disabled
        >
          Remix
        </MenuCheckboxItem>
        <MenuCheckboxItem
          value="Astro"
          checked={astro}
          onCheckedChange={setAstro}
        >
          Astro
        </MenuCheckboxItem>
      </MenuContent>
    </Menu>
  )
}
