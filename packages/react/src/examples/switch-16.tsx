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
      <div className="flex grow items-start gap-2">
        <svg
          className="shrink-0"
          width={32}
          height={24}
          viewBox="0 0 32 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="32" height="24" rx="4" fill="#252525" />
          <path
            d="M19.0537 6.49742H12.9282V17.5026H19.0537V6.49742Z"
            fill="#FF5A00"
          />
          <path
            d="M13.3359 12C13.3359 9.76408 14.3871 7.77961 16 6.49741C14.8129 5.56408 13.3155 5 11.6822 5C7.81295 5 4.68221 8.13074 4.68221 12C4.68221 15.8693 7.81295 19 11.6822 19C13.3155 19 14.8129 18.4359 16 17.5026C14.3848 16.2385 13.3359 14.2359 13.3359 12Z"
            fill="#EB001B"
          />
          <path
            d="M27.3178 12C27.3178 15.8693 24.1871 19 20.3178 19C18.6845 19 17.1871 18.4359 16 17.5026C17.6333 16.2181 18.6641 14.2359 18.6641 12C18.6641 9.76408 17.6129 7.77961 16 6.49741C17.1848 5.56408 18.6822 5 20.3155 5C24.1871 5 27.3178 8.15113 27.3178 12Z"
            fill="#F79E1B"
          />
        </svg>
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
      </div>
    </Switch>
  )
}
