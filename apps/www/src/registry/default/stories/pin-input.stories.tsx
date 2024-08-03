import type { Meta } from "@storybook/react"

import {
  PinInput,
  PinInputControl,
  PinInputInput,
  PinInputLabel,
  PinInputSeparator,
} from "../ui/pin-input"

export default {
  title: "Components/Pin Input",
} satisfies Meta

export const Basic = () => (
  <PinInput className="space-y-2">
    <PinInputLabel>Label</PinInputLabel>
    <div className="flex items-center gap-2">
      <PinInputControl>
        <PinInputInput index={0} />
        <PinInputInput index={1} />
        <PinInputInput index={2} />
      </PinInputControl>
      <PinInputSeparator />
      <PinInputControl>
        <PinInputInput index={3} />
        <PinInputInput index={4} />
      </PinInputControl>
    </div>
  </PinInput>
)
