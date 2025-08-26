import { MinusIcon, PlusIcon } from "lucide-react"

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
      <NumberInputLabel>Number input with plus/minus buttons</NumberInputLabel>
      <NumberInputControl>
        <NumberInputDecrementTrigger className="-ms-px me-0 mt-0 aspect-square h-[inherit] w-max flex-none rounded-s-md">
          <MinusIcon size={16} />
        </NumberInputDecrementTrigger>
        <NumberInputInput className="w-full grow text-center" />
        <NumberInputIncrementTrigger className="-me-px ms-0 mt-0 aspect-square h-[inherit] w-max flex-none rounded-e-md">
          <PlusIcon size={16} />
        </NumberInputIncrementTrigger>
      </NumberInputControl>
    </NumberInput>
  )
}
