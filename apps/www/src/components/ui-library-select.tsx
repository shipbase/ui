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
import { useEffect } from "react"
import { pascalCase } from "scule"

import {
  UI_LIBRARY_KEY_STORAGE_KEY,
  type UiLibrary,
  uiLibraries,
  uiLibraryAtom,
} from "@/store/atoms/ui-library"

const uiLibrariesCollection = createListCollection({
  items: uiLibraries.map((library) => ({
    value: library,
    label: pascalCase(library),
  })),
})

export function FrameworkSwitcher() {
  const uiLibrary = useAtom(uiLibraryAtom)

  useEffect(() => {
    const initialValue = localStorage.getItem(UI_LIBRARY_KEY_STORAGE_KEY)

    if (initialValue) {
      uiLibraryAtom.set(initialValue as UiLibrary)
    }

    const subscription = uiLibraryAtom.subscribe((uiLibrary) => {
      localStorage.setItem(UI_LIBRARY_KEY_STORAGE_KEY, uiLibrary)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <Select
      className="w-20"
      value={[uiLibrary]}
      onValueChange={(details) => {
        uiLibraryAtom.set(details.value[0] as UiLibrary)
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
