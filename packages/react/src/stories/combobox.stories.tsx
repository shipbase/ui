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

export function ComboboxDemo() {
  const [value, setValue] = useState<string[]>([])
  const [collection, setCollection] = useState(
    createListCollection({ items: frameworks })
  )
  const handleInputChange = (details: ComboboxInputValueChangeDetails) => {
    const filtered = frameworks.filter((item) =>
      item.label.toLowerCase().includes(details.inputValue.toLowerCase())
    )
    if (filtered.length > 0)
      setCollection(createListCollection({ items: filtered }))
  }

  const handleOpenChange = () => {
    setCollection(createListCollection({ items: frameworks }))
  }

  return (
    <Combobox
      value={value}
      className="w-64"
      collection={collection}
      openOnClick
      onInputValueChange={handleInputChange}
      onOpenChange={handleOpenChange}
      onValueChange={(details) => {
        setValue(details.value[0] === value[0] ? [] : details.value)
      }}
    >
      <ComboboxLabel>Framework</ComboboxLabel>
      <ComboboxControl className="relative">
        <ComboboxInput placeholder="Select a framework" className="pr-6" />
        <ComboboxTrigger className="absolute top-0 right-2 h-full">
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </ComboboxTrigger>
      </ComboboxControl>
      <ComboboxPortal>
        <ComboboxContent>
          <ComboboxItemGroup>
            <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
            {collection.items.map((item) => (
              <ComboboxItem key={item.value} item={item}>
                <ComboboxItemText>{item.label}</ComboboxItemText>
                <ComboboxItemIndicator>
                  <Check className={cn("ml-2 h-4 w-4")} />
                </ComboboxItemIndicator>
              </ComboboxItem>
            ))}
          </ComboboxItemGroup>
        </ComboboxContent>
      </ComboboxPortal>
    </Combobox>
  )
}
