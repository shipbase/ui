import type { Meta } from "@storybook/react"
import { Check, ChevronsUpDown } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"

import {
  Combobox,
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  type ComboboxInputValueChangeDetails,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxList,
  ComboboxPortal,
  ComboboxTrigger,
  createListCollection,
} from "@/components/ui/combobox"

export default {
  title: "Components/Combobox",
} satisfies Meta

export function Usage() {
  const collection = createListCollection({ items: ["React", "Vue"] })
  return (
    <Combobox collection={collection}>
      <ComboboxLabel>Framework</ComboboxLabel>
      <ComboboxControl>
        <ComboboxInput placeholder="Select a framework" />
        <ComboboxTrigger>
          <ChevronsUpDown />
        </ComboboxTrigger>
        <ComboboxClearTrigger>Close</ComboboxClearTrigger>
      </ComboboxControl>
      <ComboboxPortal>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxItemGroup>
              <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
              {collection.items.map((item) => (
                <ComboboxItem key={item} item={item}>
                  <ComboboxItemText>{item}</ComboboxItemText>
                  <ComboboxItemIndicator>
                    <Check />
                  </ComboboxItemIndicator>
                </ComboboxItem>
              ))}
            </ComboboxItemGroup>
          </ComboboxList>
        </ComboboxContent>
      </ComboboxPortal>
    </Combobox>
  )
}

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
    disabled: true,
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export { default as Combobox02 } from "@/examples/combobox-02"
