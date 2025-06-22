import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupItemText,
} from "@/components/ui/radio-group"

export default function Component() {
  return (
    <div className="inline-flex h-9 rounded-md bg-input/50 p-0.5">
      <RadioGroup
        defaultValue="2"
        className="group relative inline-grid grid-cols-[1fr_1fr] items-center gap-0 font-medium text-sm"
      >
        <RadioGroupItem
          value="1"
          className="relative z-10 inline-flex h-full min-w-8 cursor-pointer select-none items-center justify-center whitespace-nowrap px-4 transition-colors"
        >
          <RadioGroupItemText className="data-[state=unchecked]:text-muted-foreground/70">
            Bill Monthly
          </RadioGroupItemText>
        </RadioGroupItem>
        <RadioGroupItem
          value="2"
          className="group relative z-10 inline-flex h-full min-w-8 cursor-pointer select-none items-center justify-center whitespace-nowrap px-4 transition-colors"
        >
          <RadioGroupItemText className="data-[state=unchecked]:text-muted-foreground/70">
            Bill Yearly{" "}
            <span className="transition-colors group-data-[state=checked]:text-emerald-500 group-data-[state=unchecked]:text-muted-foreground/70">
              -20%
            </span>
          </RadioGroupItemText>
        </RadioGroupItem>
        <RadioGroupIndicator className="rounded-sm bg-background shadow-xs duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
      </RadioGroup>
    </div>
  )
}
