import type { Framework } from "@/constants/frameworks"
import { frameworks } from "@/constants/frameworks"
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
import { useState } from "react"
import { pascalCase } from "scule"

interface Props {
  framework: Framework
}

const frameworksCollection = createListCollection({
  items: frameworks.map((framework) => ({
    value: framework,
    label: pascalCase(framework),
  })),
})

export function FrameworkSelect({ framework }: Props) {
  const [currentFramework, setCurrentFramework] = useState(framework)

  return (
    <Select
      className="w-20"
      value={[currentFramework]}
      onValueChange={(details) => {
        const newFramework = details.value[0] as Framework
        setCurrentFramework(newFramework)
        const newUrl = window.location.pathname.replace(framework, newFramework)
        window.location.href = newUrl
      }}
      collection={frameworksCollection}
      positioning={{ sameWidth: true }}
    >
      <SelectControl className="border-none hover:bg-accent hover:text-accent-foreground">
        <SelectTrigger>
          <SelectValueText placeholder="Select a framework" />
          <SelectIndicator />
        </SelectTrigger>
      </SelectControl>
      <SelectContent className="z-10">
        {frameworksCollection.items.map((item) => (
          <SelectItem key={item.value} item={item}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
