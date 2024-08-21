import * as React from "react"

import {
  PinInput,
  PinInputControl,
  PinInputInput,
  PinInputLabel,
  PinInputSeparator,
} from "@/components/ui/pin-input"

export default function PinInputControlled() {
  const [value, setValue] = React.useState<string[]>([])
  const [valueString, setValueString] = React.useState<string>()
  return (
    <div className="space-y-2">
      <PinInput
        className="space-y-2"
        value={value}
        onValueChange={(detail) => {
          setValueString(detail.valueAsString)
          setValue(detail.value)
        }}
      >
        <PinInputLabel>Label</PinInputLabel>
        <div className="flex items-center gap-2">
          <PinInputControl>
            <PinInputInput index={0} />
            <PinInputInput index={1} />
          </PinInputControl>
          <PinInputSeparator />
          <PinInputControl>
            <PinInputInput index={2} />
            <PinInputInput index={3} />
          </PinInputControl>
          <PinInputSeparator />
          <PinInputControl>
            <PinInputInput index={4} />
            <PinInputInput index={5} />
          </PinInputControl>
        </div>
      </PinInput>
      <div className="text-center text-sm">
        {!valueString ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {value}</>
        )}
      </div>
    </div>
  )
}
