import { useStore } from "@nanostores/react"
import { useEffect, useState } from "react"
import { pascalCase } from "scule"

import { $framework, type Framework, frameworks } from "@/atoms/framework"
import {
  Select,
  SelectContent,
  SelectControl,
  SelectItem,
  SelectItemGroup,
  SelectTrigger,
  SelectValueText,
} from "@ui/react/select"

const frameworksItems = frameworks.map((framework) => ({
  value: framework,
  label: pascalCase(framework),
}))

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
      className="w-[160px]"
      positioning={{ sameWidth: true }}
      items={frameworksItems}
    >
      <SelectControl>
        <SelectTrigger className="h-7 text-xs">
          <span className="text-muted-foreground">Framework: </span>
          <SelectValueText />
        </SelectTrigger>
      </SelectControl>
      <SelectContent>
        <SelectItemGroup>
          {frameworksItems.map((item) => (
            <SelectItem className="text-xs" item={item} key={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectItemGroup>
      </SelectContent>
    </Select>
  )
}
