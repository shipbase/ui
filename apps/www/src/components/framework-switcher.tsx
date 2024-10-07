import { useStore } from "@nanostores/react"
import { useEffect, useState } from "react"
import { pascalCase } from "scule"

import { $framework, type Framework, frameworks } from "@/store/atoms/framework"
import {
  Select,
  SelectContent,
  SelectControl,
  SelectItem,
  SelectItemGroup,
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
      value={[value]}
      onValueChange={(d) => {
        $framework.set(d.value[0] as Framework)
      }}
      className="w-[80px]"
      positioning={{ sameWidth: true, slide: true }}
      collection={frameworksCollection}
    >
      <SelectControl>
        <SelectTrigger className="h-7 border-none text-xs">
          <SelectValueText />
        </SelectTrigger>
      </SelectControl>
      <SelectContent>
        <SelectItemGroup>
          {frameworksCollection.items.map((item) => (
            <SelectItem className="text-xs" item={item} key={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectItemGroup>
      </SelectContent>
    </Select>
  )
}
