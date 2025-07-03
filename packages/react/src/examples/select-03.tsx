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
import { ClockIcon } from "lucide-react"

export default function Component() {
  const collection = createListCollection({
    items: [
      { value: "1", label: "00:00 AM - 11:59 PM" },
      { value: "2", label: "01:00 AM - 12:59 PM" },
      { value: "3", label: "02:00 AM - 01:59 PM" },
      { value: "4", label: "03:00 AM - 02:59 PM" },
    ],
  })

  return (
    <Select
      className="w-64 *:not-first:mt-2"
      collection={collection}
      positioning={{ sameWidth: true }}
    >
      <SelectLabel>Select with icon</SelectLabel>
      <SelectControl>
        <SelectTrigger className="relative ps-9">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 group-has-[select[disabled]]:opacity-50">
            <ClockIcon size={16} aria-hidden="true" />
          </div>
          <SelectValueText placeholder="Select time" />
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
    </Select>
  )
}
