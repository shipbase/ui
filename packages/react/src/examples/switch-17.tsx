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
      <div className="flex grow items-center gap-2">
        <svg
          className="shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          aria-hidden="true"
        >
          <circle cx="16" cy="16" r="16" fill="#121212" />
          <g clipPath="url(#sb-a)">
            <path
              fill="url(#sb-b)"
              d="M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z"
            />
            <path
              fill="url(#sb-c)"
              fillOpacity=".2"
              d="M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z"
            />
            <path
              fill="#3ECF8E"
              d="M14.375 6.367c.506-.638 1.532-.289 1.544.525l.078 11.903H8.094c-1.45 0-2.258-1.674-1.357-2.81l7.638-9.618Z"
            />
          </g>
          <defs>
            <linearGradient
              id="sb-b"
              x1="15.907"
              x2="23.02"
              y1="15.73"
              y2="18.713"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#249361" />
              <stop offset="1" stopColor="#3ECF8E" />
            </linearGradient>
            <linearGradient
              id="sb-c"
              x1="12.753"
              x2="15.997"
              y1="11.412"
              y2="17.519"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <clipPath id="sb-a">
              <path fill="#fff" d="M6.354 6h19.292v20H6.354z" />
            </clipPath>
          </defs>
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
