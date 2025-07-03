import {
  Switch,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
} from "@/components/ui/switch"
import { MoonIcon, SunIcon } from "lucide-react"

export default function Component() {
  return (
    <Switch
      aria-label="Toggle switch"
      className="inline-flex items-center gap-2"
    >
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel className="group font-medium text-sm">
        <span className="sr-only">Toggle switch</span>
        <SunIcon
          size={16}
          className="hidden group-data-[state=checked]:block"
          aria-hidden="true"
        />
        <MoonIcon
          size={16}
          className="hidden group-data-[state=unchecked]:block"
          aria-hidden="true"
        />
      </SwitchLabel>
    </Switch>
  )
}
