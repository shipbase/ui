import type { Meta } from "@storybook/react"

import { Button } from "@/components/ui/button"
import {
  TagsInput,
  TagsInputClearTrigger,
  TagsInputContext,
  TagsInputControl,
  TagsInputInput,
  TagsInputItem,
  TagsInputLabel,
} from "@/components/ui/tags-input"

export default {
  title: "Components/Tags Input",
} satisfies Meta

export const Basic = () => {
  return (
    <TagsInput>
      <TagsInputLabel>Frameworks</TagsInputLabel>
      <TagsInputControl>
        <TagsInputContext>
          {(context) =>
            context.value.map((value, index) => (
              <TagsInputItem key={value} index={index} value={value} />
            ))
          }
        </TagsInputContext>
        <TagsInputInput placeholder="Add Framework" />
      </TagsInputControl>
      <TagsInputClearTrigger asChild>
        <Button className="mt-2 w-full" variant="outline">
          Clear all
        </Button>
      </TagsInputClearTrigger>
    </TagsInput>
  )
}
