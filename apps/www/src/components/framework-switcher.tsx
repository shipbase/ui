import { useStore } from "@nanostores/react"
import {
  Select,
  SelectContent,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectTrigger,
  SelectValueText,
  createListCollection,
} from "@ui/react/select"
import { useEffect, useState } from "react"
import { pascalCase } from "scule"

import { $framework, type UiLibrary, uiLibraries } from "@/store/atoms/framework"

const uiLibrariesCollection = createListCollection({
  items: uiLibraries.map((library) => ({
    value: library,
    label: pascalCase(library),
  })),
})

export function FrameworkSwitcher() {
  const framework = useStore($framework)
  const [value, setValue] = useState<UiLibrary>("react")

  // avoid hydration mismatch
  useEffect(() => {
    setValue(framework)
  }, [framework])

  return (
    <Select
      className="w-20"
      value={[value]}
      onValueChange={(details) => {
        setValue(details.value[0] as UiLibrary)
      }}
      collection={uiLibrariesCollection}
      positioning={{ sameWidth: true }}
    >
      <SelectControl className="border-none hover:bg-accent hover:text-accent-foreground">
        <SelectTrigger>
          <SelectValueText placeholder="Select a framework" />
          <SelectIndicator />
        </SelectTrigger>
      </SelectControl>
      <SelectContent>
        {uiLibrariesCollection.items.map((item) => (
          <SelectItem key={item.value} item={item}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
