import type { Meta } from "@storybook/react"

import {
  Select,
  SelectContent,
  SelectControl,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectLabel,
  SelectTrigger,
  SelectValueText,
  createListCollection,
} from "@/components/ui/select"
import { useState } from "react"

export default {
  title: "Components/Select",
} satisfies Meta

export function Basic() {
  const [fruits] = useState(
    createListCollection({
      items: [
        {
          value: "apple",
          label: "Apple",
        },
        {
          value: "banana",
          label: "Banana",
          disabled: true,
        },
        {
          value: "blueberry",
          label: "Blueberry",
        },
        {
          value: "grapes",
          label: "Grapes",
        },
        {
          value: "pineapple",
          label: "Pineapple",
        },
      ],
    })
  )

  return (
    <Select
      className="w-64"
      positioning={{ sameWidth: true }}
      collection={fruits}
    >
      <SelectLabel>Framework</SelectLabel>
      <SelectControl>
        <SelectTrigger className="h-full">
          <SelectValueText placeholder="Select a framework" className="pr-6" />
        </SelectTrigger>
      </SelectControl>
      <SelectContent>
        <SelectItemGroup>
          <SelectItemGroupLabel>Fruits</SelectItemGroupLabel>
          {fruits.items.map((fruit) => (
            <SelectItem item={fruit.value} key={fruit.value}>
              {fruit.label}
            </SelectItem>
          ))}
        </SelectItemGroup>
      </SelectContent>
    </Select>
  )
}
