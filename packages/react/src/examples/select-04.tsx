import {
  Select,
  SelectContent,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectLabel,
  SelectTrigger,
  SelectValueText,
  createListCollection,
} from "@/components/ui/select"

export default function Component() {
  const collection = createListCollection({
    items: [
      { value: "1", label: "React" },
      { value: "2", label: "Next.js" },
      { value: "3", label: "Astro" },
      { value: "4", label: "Gatsby" },
    ],
  })

  return (
    <Select
      className="w-64 *:not-first:mt-2"
      defaultValue={["1"]}
      collection={collection}
      positioning={{ sameWidth: true }}
    >
      <SelectLabel>Select with helper text</SelectLabel>
      <SelectControl>
        <SelectTrigger>
          <SelectValueText placeholder="Select a framework" />
          <SelectIndicator />
        </SelectTrigger>
      </SelectControl>
      <SelectContent>
        <SelectItemGroup>
          <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
          {collection.items.map((item) => (
            <SelectItem key={item.value} item={item}>
              {item.label}
            </SelectItem>
          ))}
        </SelectItemGroup>
      </SelectContent>
      <p className="mt-2 text-muted-foreground text-xs" aria-live="polite">
        Tell us what&lsquo;s your favorite Select framework
      </p>
    </Select>
  )
}
