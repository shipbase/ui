import { useStore } from "@nanostores/react"
import { useEffect, useState } from "react"
import { pascalCase } from "scule"

import { $framework, type Framework, frameworks } from "@/store/atoms/framework"
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

const frameworksCollection = createListCollection({
  items: frameworks.map((framework) => ({
    value: framework,
    label: pascalCase(framework),
  })),
})

export function FrameworkSwitcher() {
  const framework = useStore($framework)
  const [value, setValue] = useState<Framework>("react")

  // avoid hydration mismatch
  useEffect(() => {
    setValue(framework)
  }, [framework])

  return (
    <Select
      className="w-48"
      value={[value]}
      onValueChange={(details) => {
        setValue(details.value[0] as Framework)
      }}
      collection={frameworksCollection}
      positioning={{ sameWidth: true }}
    >
      <SelectControl>
        <SelectTrigger>
          <SelectValueText placeholder="Select a framework" />
          <SelectIndicator />
        </SelectTrigger>
      </SelectControl>
      <SelectContent>
        {frameworksCollection.items.map((item) => (
          <SelectItem key={item.value} item={item}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
