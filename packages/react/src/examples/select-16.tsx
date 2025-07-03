import {
  Select,
  SelectContent,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectLabel,
  SelectList,
  SelectTrigger,
  SelectValueText,
  createListCollection,
} from "@/components/ui/select"
import { useMemo } from "react"

export default function Component() {
  const timezones = Intl.supportedValuesOf("timeZone")

  const timezoneCollections = useMemo(() => {
    return createListCollection({
      items: timezones
        .map((timezone) => {
          const formatter = new Intl.DateTimeFormat("en", {
            timeZone: timezone,
            timeZoneName: "shortOffset",
          })
          const parts = formatter.formatToParts(new Date())
          const offset =
            parts.find((part) => part.type === "timeZoneName")?.value || ""
          const modifiedOffset = offset === "GMT" ? "GMT+0" : offset

          return {
            value: timezone,
            label: `(${modifiedOffset}) ${timezone.replace(/_/g, " ")}`,
            numericOffset: Number.parseInt(
              offset.replace("GMT", "").replace("+", "") || "0"
            ),
          }
        })
        .sort((a, b) => a.numericOffset - b.numericOffset),
    })
  }, [timezones])

  return (
    <Select
      className="w-64 *:not-first:mt-2"
      defaultValue={["1"]}
      collection={timezoneCollections}
      positioning={{ sameWidth: true }}
    >
      <SelectLabel>Timezone select</SelectLabel>
      <SelectControl className="flex-col">
        <SelectTrigger>
          <SelectValueText placeholder="Select a framework" />
          <SelectIndicator />
        </SelectTrigger>
      </SelectControl>
      <SelectContent>
        <SelectList>
          {timezoneCollections.items.map((item) => (
            <SelectItem key={item.value} item={item}>
              {item.label}
            </SelectItem>
          ))}
        </SelectList>
      </SelectContent>
    </Select>
  )
}
