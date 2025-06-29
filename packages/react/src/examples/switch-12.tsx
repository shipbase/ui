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
      <SwitchControl className="absolute inset-0 h-[inherit] w-auto data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50">
        <SwitchThumb className="data-[state=checked]:rtl:-translate-x-full h-full w-1/2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:translate-x-full" />
      </SwitchControl>
      <span className="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center group-data-[state=checked]:text-muted-foreground/70">
        <MoonIcon size={16} aria-hidden="true" />
      </span>
      <span className="pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center group-data-[state=unchecked]:text-muted-foreground/70">
        <SunIcon size={16} aria-hidden="true" />
      </span>
      <SwitchLabel className="sr-only">Labeled switch</SwitchLabel>
    </Switch>
  )
}
