import type { Framework } from "@/constants/frameworks"
import { frameworks } from "@/constants/frameworks"
import { frameworkAtom } from "@/store/atoms/framework"
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
import { useAtom } from "@xstate/store/react"
import { pascalCase } from "scule"

const frameworksCollection = createListCollection({
  items: frameworks.map((framework) => ({
    value: framework,
    label: pascalCase(framework),
  })),
})

export function FrameworkSelect() {
  const framework = useAtom(frameworkAtom)

  return (
    <Select
      className="w-20"
      value={[framework]}
      onValueChange={(details) => {
        const newFramework = details.value[0] as Framework
        frameworkAtom.set(newFramework)
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
