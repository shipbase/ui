import type { Meta } from "@storybook/react"

import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
} from "@/components/ui/radio-group"

export default {
  title: "Components/Radio Group",
} satisfies Meta

export const Basic = () => {
  return (
    <RadioGroup>
      <RadioGroupItem value="default" disabled>
        <RadioGroupItemControl />
        <RadioGroupItemText>Default</RadioGroupItemText>
      </RadioGroupItem>
      <RadioGroupItem value="comfortable">
        <RadioGroupItemControl />
        <RadioGroupItemText>Comfortable</RadioGroupItemText>
      </RadioGroupItem>
      <RadioGroupItem value="compact">
        <RadioGroupItemControl />
        <RadioGroupItemText>Compact</RadioGroupItemText>
      </RadioGroupItem>
    </RadioGroup>
  )
}
