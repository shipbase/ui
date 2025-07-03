import {
  Switch,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
} from "@/components/ui/switch"

export default function Component() {
  return (
    <Switch className="inline-flex items-center gap-2">
      <SwitchLabel className="flex-1 cursor-pointer text-right font-medium text-sm data-[state=checked]:text-muted-foreground/70">
        Off
      </SwitchLabel>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel className="flex-1 cursor-pointer text-left font-medium text-sm data-[state=unchecked]:text-muted-foreground/70">
        On
      </SwitchLabel>
    </Switch>
  )
}
