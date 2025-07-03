import {
  Select,
  SelectContent,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValueText,
  createListCollection,
} from "@/components/ui/select"

export default function Component() {
  const collection = createListCollection({
    items: [
      { value: "1", label: "React" },
      { value: "2", label: "Next.js", disabled: true },
      { value: "3", label: "Astro" },
      { value: "4", label: "Gatsby", disabled: true },
    ],
    isItemDisabled: (item) => !!item.disabled,
  })

  return (
    <Select
      className="w-64 *:not-first:mt-2"
      defaultValue={["1"]}
      collection={collection}
      positioning={{ sameWidth: true }}
    >
      <SelectLabel>Select with disabled options</SelectLabel>
      <SelectControl>
        <SelectTrigger>
          <SelectValueText placeholder="Select a framework" />
          <SelectIndicator />
        </SelectTrigger>
      </SelectControl>
      <SelectContent>
        {collection.items.map((item) => (
          <SelectItem key={item.value} item={item}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
