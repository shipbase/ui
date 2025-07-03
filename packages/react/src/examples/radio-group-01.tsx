import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
} from "@/components/ui/radio-group"

export default function Component() {
  return (
    <RadioGroup defaultValue="1">
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
