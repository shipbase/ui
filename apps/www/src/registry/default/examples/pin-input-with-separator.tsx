import {
  PinInput,
  PinInputControl,
  PinInputInput,
  PinInputLabel,
  PinInputSeparator,
} from "../ui/pin-input"

export default function PinInputWithSeparator() {
  return (
    <PinInput className="space-y-2" pattern="[a-z]">
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
  )
}
