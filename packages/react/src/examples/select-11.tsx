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
      { value: "1", label: "React", group: "Frontend" },
      { value: "2", label: "Vue", group: "Frontend" },
      { value: "3", label: "Solid", group: "Frontend" },
      { value: "4", label: "Nodejs", group: "Backend" },
      { value: "5", label: "Python", group: "Backend" },
      { value: "6", label: "Java", group: "Backend" },
    ],
    groupBy: (item) => item.group,
  })

  return (
    <Select
      className="w-64 *:not-first:mt-2"
      defaultValue={["1"]}
      collection={collection}
      positioning={{ sameWidth: true }}
    >
      <SelectLabel>Select with options groups</SelectLabel>
      <SelectControl>
        <SelectTrigger>
          <SelectValueText placeholder="Select a framework" />
          <SelectIndicator />
        </SelectTrigger>
      </SelectControl>
      <SelectContent>
        {collection.group().map(([groupName, items], groupIndex) => {
          return (
            <SelectItemGroup key={groupIndex}>
              <SelectItemGroupLabel>{groupName}</SelectItemGroupLabel>
              {items.map((item, itemIndex) => {
                return (
                  <SelectItem key={itemIndex} item={item}>
                    {item.label}
                  </SelectItem>
                )
              })}
            </SelectItemGroup>
          )
        })}
      </SelectContent>
    </Select>
  )
}
