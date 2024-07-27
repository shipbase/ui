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
} from "../ui/select"

export default function SelectDemo() {
  const fruits = [
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
    <Select className="w-64" positioning={{ sameWidth: true }} items={fruits}>
      <SelectLabel>Framework</SelectLabel>
      <SelectControl>
        <SelectTrigger className="h-full">
          <SelectValueText placeholder="Select a framework" className="pr-6" />
        </SelectTrigger>
      </SelectControl>
      <SelectContent>
        <SelectItemGroup>
          <SelectItemGroupLabel>Fruits</SelectItemGroupLabel>
          {fruits.map((fruit) => (
            <SelectItem item={fruit.value} key={fruit.value}>
              {fruit.label}
            </SelectItem>
          ))}
        </SelectItemGroup>
      </SelectContent>
    </Select>
  )
}
