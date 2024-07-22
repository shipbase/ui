import { useState } from "react"
import type { Meta } from "@storybook/react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"

import {
  Combobox,
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxList,
  ComboboxPortal,
  ComboboxTrigger,
  type ComboboxInputValueChangeDetails,
} from "../ui/combobox"

export default {
  title: "Components/Combobox",
} satisfies Meta

export function Usage() {
  return (
    <Combobox items={["React", "Vue"]}>
      <ComboboxLabel>Framework</ComboboxLabel>
      <ComboboxControl>
        <ComboboxInput placeholder="Select a framework" />
        <ComboboxTrigger>
          <ChevronsUpDown />
        </ComboboxTrigger>
      </ComboboxControl>
      <ComboboxPortal>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxItemGroup>
              <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
              {["React", "Vue"].map((item) => (
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

export function ComboboxDemo() {
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
  const [items, setItems] = useState(frameworks)
  const handleInputChange = ({
    inputValue,
  }: ComboboxInputValueChangeDetails) => {
    const filtered = frameworks.filter((item) =>
      item.label.toLowerCase().includes(inputValue.toLowerCase())
    )
    setItems(filtered.length > 0 ? filtered : frameworks)
  }

  const handleOpenChange = () => {
    setItems(frameworks)
  }

  return (
    <Combobox
      className="w-64"
      items={items}
      onInputValueChange={handleInputChange}
      onOpenChange={handleOpenChange}
    >
      <ComboboxLabel>Framework</ComboboxLabel>
      <ComboboxControl className="relative">
        <ComboboxInput placeholder="Select a framework" className="pr-6" />
        <ComboboxTrigger className="absolute right-2 top-0 h-full">
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </ComboboxTrigger>
      </ComboboxControl>
      <ComboboxPortal>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxItemGroup>
              <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
              {items.map((item) => (
                <ComboboxItem key={item.value} item={item}>
                  <ComboboxItemText>{item.label}</ComboboxItemText>
                  <ComboboxItemIndicator>
                    <Check className={cn("ml-2 h-4 w-4")} />
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
