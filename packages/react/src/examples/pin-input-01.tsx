import {
  PinInput,
  PinInputControl,
  PinInputGroup,
  PinInputInput,
  PinInputLabel,
  PinInputSeparator,
} from "@/components/ui/pin-input"

export default function PinInputDemo() {
  return (
    <PinInput className="flex max-w-fit flex-col gap-2">
      <PinInputLabel>Label</PinInputLabel>
      <PinInputControl>
        <PinInputGroup>
          <PinInputInput index={0} />
          <PinInputInput index={1} />
          <PinInputInput index={2} />
        </PinInputGroup>
        <PinInputSeparator />
        <PinInputGroup>
          <PinInputInput index={3} />
          <PinInputInput index={4} />
        </PinInputGroup>
      </PinInputControl>
    </PinInput>
  )
}
