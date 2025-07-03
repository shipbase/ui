import {
  Switch,
  SwitchControl,
  SwitchLabel,
  SwitchThumb,
} from "@/components/ui/switch"

export default function Component() {
  return (
    <Switch className="relative flex w-full items-start gap-2 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50">
      <SwitchControl className=" order-1 h-4 w-6 [&_span]:size-3">
        <SwitchThumb className="data-[state=checked]:rtl:-translate-x-2 size-3 data-[state=checked]:translate-x-2" />
      </SwitchControl>
      <div className="grid grow gap-2">
        <SwitchLabel>
          Label{" "}
          <span className="font-normal text-muted-foreground text-xs leading-[inherit]">
            (Sublabel)
          </span>
        </SwitchLabel>
        <p className="text-muted-foreground text-xs">
          A short description goes here.
        </p>
      </div>
    </Switch>
  )
}
