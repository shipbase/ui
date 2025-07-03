import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
} from "@/components/ui/radio-group"

export default function Component() {
  return (
    <RadioGroup
      defaultValue="1"
      className="[--primary:var(--color-indigo-500)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-500)] in-[.dark]:[--ring:var(--color-indigo-900)]"
    >
      <RadioGroupItem value="1">
        <RadioGroupItemControl />
        <RadioGroupItemText>Option 1</RadioGroupItemText>
      </RadioGroupItem>
      <RadioGroupItem value="2">
        <RadioGroupItemControl />
        <RadioGroupItemText>Option 2</RadioGroupItemText>
      </RadioGroupItem>
      <RadioGroupItem value="3">
        <RadioGroupItemControl />
        <RadioGroupItemText>Option 3</RadioGroupItemText>
      </RadioGroupItem>
    </RadioGroup>
  )
}
