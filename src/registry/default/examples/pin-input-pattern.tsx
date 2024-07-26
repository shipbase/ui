import {
  PinInput,
  PinInputControl,
  PinInputInput,
  PinInputLabel,
  PinInputSeparator,
} from "../ui/pin-input"

export default function PinInputPattern() {
  return (
    <PinInput className="space-y-2" pattern="[a-z]">
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
}
