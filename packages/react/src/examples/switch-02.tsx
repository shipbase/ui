import {
  Switch,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
} from "@/components/ui/switch"

export default function Component() {
  return (
    <Switch>
      <SwitchControl className="h-5 w-8">
        <SwitchThumb className="data-[state=checked]:rtl:-translate-x-3 size-4 data-[state=checked]:translate-x-3" />
      </SwitchControl>
      <SwitchLabel className="sr-only">Small switch</SwitchLabel>
    </Switch>
  )
}
