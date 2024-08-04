import * as React from "react"

import {
  Combobox as ArkCombobox,
  type ComboboxInputValueChangeDetails,
} from "@ark-ui/react"
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
} from "@/components/ui/combobox"

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

export default function ComboboxDemo() {
  const [value, setValue] = React.useState<string[]>([])
  const [items, setItems] = React.useState(frameworks)
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
      value={value}
      className="w-64"
      items={items}
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
