import {
  Switch,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
} from "@/components/ui/switch"
import { MoonIcon, SunIcon } from "lucide-react"

export default function Component() {
  return (
    <Switch className="inline-flex items-center gap-2">
      <SwitchLabel className="flex-1 cursor-pointer text-right font-medium text-sm data-[state=checked]:text-muted-foreground/70">
        <MoonIcon size={16} aria-hidden="true" />
      </SwitchLabel>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel className="flex-1 cursor-pointer text-left font-medium text-sm data-[state=unchecked]:text-muted-foreground/70">
        <SunIcon size={16} aria-hidden="true" />
      </SwitchLabel>
    </Switch>
  )
}
