import {
  Switch,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
} from "@/components/ui/switch"
import { MoonIcon, SunIcon } from "lucide-react"

export default function Component() {
  return (
    <Switch className="group relative inline-grid h-9 grid-cols-[1fr_1fr] items-center font-medium text-sm">
      <SwitchControl className="absolute inset-0 h-[inherit] w-auto data-[state=unchecked]:bg-input/50">
        <SwitchThumb className="data-[state=checked]:rtl:-translate-x-full z-10 h-full w-1/2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:translate-x-full" />
      </SwitchControl>
      <span className="group-data-[state=unchecked]:rtl:-translate-x-full pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=checked]:invisible group-data-[state=unchecked]:translate-x-full">
        <MoonIcon size={16} aria-hidden="true" />
      </span>
      <span className="group-data-[state=checked]:-translate-x-full pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=unchecked]:invisible group-data-[state=checked]:text-background group-data-[state=checked]:rtl:translate-x-full">
        <SunIcon size={16} aria-hidden="true" />
      </span>
      <SwitchLabel className="sr-only">Labeled switch</SwitchLabel>
    </Switch>
  )
}
