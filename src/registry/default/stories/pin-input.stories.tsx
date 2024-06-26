import type { Meta } from "@storybook/react"

import {
  PinInput,
  PinInputControl,
  PinInputHiddenInput,
  PinInputInput,
  PinInputLabel,
} from "../ui/pin-input"

export default {
  title: "Components/Pin Input",
} satisfies Meta

export const Basic = () => (
  <PinInput>
    <PinInputLabel>Label</PinInputLabel>
    <PinInputControl className="relative flex items-center gap-2">
      <PinInputInput
        className="size-10 rounded-md border border-input text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
        index={0}
      />
      <PinInputInput
        className="size-10 rounded border border-input text-center"
        index={1}
      />
      <PinInputInput
        className="size-10 rounded border border-input text-center"
        index={2}
      />
      <PinInputInput
        className="size-10 rounded border border-input text-center"
        index={3}
      />
    </PinInputControl>
    <PinInputHiddenInput />
  </PinInput>
)
