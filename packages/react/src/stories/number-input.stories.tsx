import "@ark-ui/react/number-input"

import type { Meta } from "@storybook/react"

import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
} from "@/components/ui/number-input"

export default {
  title: "Components/Number Input",
} satisfies Meta

export const Basic = () => {
  return (
    <NumberInput className="max-w-sm">
      <NumberInputLabel>Label</NumberInputLabel>
      <NumberInputControl>
        <NumberInputInput />
        <NumberInputIncrementTrigger />
        <NumberInputDecrementTrigger />
      </NumberInputControl>
    </NumberInput>
  )
}
