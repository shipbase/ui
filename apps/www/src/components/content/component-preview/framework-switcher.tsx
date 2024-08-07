import { useStore } from "@nanostores/react"
import { useEffect, useState } from "react"

import { $framework, type Framework } from "@/atoms/framework"
import {
  Select,
  SelectContent,
  SelectControl,
  SelectItem,
  SelectItemGroup,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"

const frameworks = [
  {
    value: "react",
    label: "React",
  },
  {
    value: "vue",
    label: "Vue",
  },
  {
    value: "solid",
    label: "Solid",
    disabled: true,
  },
]

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
      items={frameworks}
    >
      <SelectControl>
        <SelectTrigger className="h-7 text-xs">
          <span className="text-muted-foreground">Framework: </span>
          <SelectValueText />
        </SelectTrigger>
      </SelectControl>
      <SelectContent>
        <SelectItemGroup>
          {frameworks.map((framework) => (
            <SelectItem
              className="text-xs"
              item={framework}
              key={framework.value}
            >
              {framework.label}
            </SelectItem>
          ))}
        </SelectItemGroup>
      </SelectContent>
    </Select>
  )
}
