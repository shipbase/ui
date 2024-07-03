import { useState } from "react"
import {
  Combobox as ArkCombobox,
  type ComboboxInputValueChangeDetails,
} from "@ark-ui/react"
import type { Meta } from "@storybook/react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"

import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxLabel,
  ComboboxPortal,
  ComboboxTrigger,
} from "../ui/combobox"

export default {
  title: "Components/Combobox",
} satisfies Meta

export const Basic = () => {
  const items = ["React", "Solid", "Vue"]
  return (
    <ArkCombobox.Root items={items} lazyMount unmountOnExit open>
      <ArkCombobox.Label>Framework</ArkCombobox.Label>
      <ArkCombobox.Control>
        <ArkCombobox.Input />
        <ArkCombobox.Trigger>Open</ArkCombobox.Trigger>
        <ArkCombobox.ClearTrigger>Clear</ArkCombobox.ClearTrigger>
      </ArkCombobox.Control>
      <ComboboxPortal>
        <ArkCombobox.Content>
          <ArkCombobox.ItemGroup>
            <ArkCombobox.ItemGroupLabel>Frameworks</ArkCombobox.ItemGroupLabel>
            {items.map((item) => (
              <ArkCombobox.Item key={item} item={item}>
                <ArkCombobox.ItemText>{item}</ArkCombobox.ItemText>
                <ArkCombobox.ItemIndicator>✓</ArkCombobox.ItemIndicator>
              </ArkCombobox.Item>
            ))}
          </ArkCombobox.ItemGroup>
        </ArkCombobox.Content>
      </ComboboxPortal>
    </ArkCombobox.Root>
  )
}

export function UI() {
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
          <ComboboxItemGroup>
            <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
            {items.map((item) => (
              <ComboboxItem key={item.value} item={item}>
                <ArkCombobox.ItemText>{item.label}</ArkCombobox.ItemText>
                <ArkCombobox.ItemIndicator>
                  <Check className={cn("ml-2 h-4 w-4")} />
                </ArkCombobox.ItemIndicator>
              </ComboboxItem>
            ))}
          </ComboboxItemGroup>
        </ComboboxContent>
      </ComboboxPortal>
    </Combobox>
  )
}
