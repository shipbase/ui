import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
} from "../ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <RadioGroupItem value="default">
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
