import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
} from "@/components/ui/number-input"

export default function Component() {
  return (
    <NumberInput className="w-80 space-y-2">
      <NumberInputLabel>Number input with chevrons</NumberInputLabel>
      <NumberInputControl>
        <NumberInputInput />
        <div className="flex h-[calc(100%+2px)] flex-col">
          <NumberInputIncrementTrigger>
            <ChevronUpIcon size={16} />
          </NumberInputIncrementTrigger>
          <NumberInputDecrementTrigger>
            <ChevronDownIcon size={16} />
          </NumberInputDecrementTrigger>
        </div>
      </NumberInputControl>
    </NumberInput>
  )
}
