import { SelectValueText } from "@ark-ui/react"
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
} from "../ui/select"

export default {
  title: "Components/Select",
} satisfies Meta

export function Basic() {
  const frameworks = [
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
  ]

  return (
    <Select
      className="w-64"
      positioning={{ sameWidth: true }}
      items={frameworks}
    >
      <SelectLabel>Framework</SelectLabel>
      <SelectControl>
        <SelectTrigger className="h-full">
          <SelectValueText placeholder="Select a framework" className="pr-6" />
        </SelectTrigger>
      </SelectControl>
      <SelectContent>
        <SelectItemGroup>
          <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
          {frameworks.map((framework) => (
            <SelectItem item={framework.value}>{framework.label}</SelectItem>
          ))}
        </SelectItemGroup>
      </SelectContent>
    </Select>
  )
}
