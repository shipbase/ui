import * as React from "react"

import {
  Combobox,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  type ComboboxInputValueChangeDetails,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxLabel,
  ComboboxTrigger,
  createListCollection,
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

export default function Component() {
  const [value, setValue] = React.useState<string[]>([])
  const [collection, setCollection] = React.useState(
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
      className="w-64 *:not-first:mt-2"
      collection={collection}
      onInputValueChange={handleInputChange}
      onOpenChange={handleOpenChange}
      onValueChange={(details) => {
        setValue(details.value[0] === value[0] ? [] : details.value)
      }}
    >
      <ComboboxLabel>Framework</ComboboxLabel>
      <ComboboxControl>
        <ComboboxInput placeholder="Select a framework" />
        <ComboboxTrigger />
      </ComboboxControl>
      <ComboboxContent>
        <ComboboxItemGroup>
          <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
          {collection.items.map((item) => (
            <ComboboxItem key={item.value} item={item}>
              {item.label}
            </ComboboxItem>
          ))}
        </ComboboxItemGroup>
      </ComboboxContent>
    </Combobox>
  )
}
