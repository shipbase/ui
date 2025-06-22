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
      { value: "1", label: "ReactReactReactReactReact" },
      { value: "2", label: "Next.js" },
      { value: "3", label: "Astro" },
      { value: "4", label: "Gatsby" },
    ],
  })

  return (
    <Select
      className="*:not-first:mt-2"
      defaultValue={["1"]}
      collection={collection}
    >
      <SelectLabel>Select with auto-width</SelectLabel>
      <SelectControl className="min-w-48 max-w-fit">
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
