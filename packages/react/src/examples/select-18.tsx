import {
  Select,
  SelectContent,
  SelectContext,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValueText,
  createListCollection,
} from "@/components/ui/select"

function StatusDot({ className }: { className?: string }) {
  return (
    <svg
      width="8"
      height="8"
      fill="currentColor"
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="4" />
    </svg>
  )
}

interface StatusOption {
  value: string
  label: string
  color: string
}

export default function Component() {
  const collection = createListCollection<StatusOption>({
    items: [
      { value: "1", label: "Completed", color: "text-emerald-600" },
      { value: "2", label: "In Progress", color: "text-blue-500" },
      { value: "3", label: "Pending", color: "text-amber-500" },
      { value: "4", label: "Cancelled", color: "text-gray-500" },
      { value: "5", label: "Failed", color: "text-red-500" },
    ],
  })

  return (
    <Select
      className="w-64 *:not-first:mt-2"
      defaultValue={["1"]}
      collection={collection}
      positioning={{ sameWidth: true }}
    >
      <SelectLabel>Status select</SelectLabel>
      <SelectControl>
        <SelectTrigger>
          <div className="flex items-center gap-2">
            <SelectContext<StatusOption>>
              {(context) => (
                <StatusDot className={context.selectedItems[0].color} />
              )}
            </SelectContext>
            <SelectValueText placeholder="Select a framework" />
          </div>
          <SelectIndicator />
        </SelectTrigger>
      </SelectControl>
      <SelectContent className="[&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8">
        {collection.items.map((item) => (
          <SelectItem key={item.value} item={item}>
            <span className="flex items-center gap-2">
              <StatusDot className={item.color} />
              <span className="truncate">{item.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
