import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCard positioning={{ placement: "top" }} openDelay={0} closeDelay={0}>
      <div className="flex items-center gap-3">
        <img
          className="shrink-0 rounded-full"
          src="/src/assets/avatar-40-05.jpg"
          width={40}
          height={40}
          alt="Avatar"
        />
        <div className="space-y-0.5">
          <HoverCardTrigger asChild>
            <p>
              <a className="font-medium text-sm hover:underline" href="#ui">
                Keith Kennedy
              </a>
            </p>
          </HoverCardTrigger>
          <p className="text-muted-foreground text-xs">@k.kennedy</p>
        </div>
      </div>
      <HoverCardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img
              className="shrink-0 rounded-full"
              src="/src/assets/avatar-40-05.jpg"
              width={40}
              height={40}
              alt="Avatar"
            />
            <div className="space-y-0.5">
              <p className="font-medium text-sm">Keith Kennedy</p>
              <p className="text-muted-foreground text-xs">@k.kennedy</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            Designer at{" "}
            <strong className="font-medium text-foreground">@Origin UI</strong>.
            Crafting web experiences with Tailwind CSS.
          </p>
          <div className="flex items-center gap-2">
            <div className="-space-x-1.5 flex">
              <img
                className="rounded-full ring-1 ring-background"
                src="/src/assets/avatar-20-04.jpg"
                width={20}
                height={20}
                alt="Friend 01"
              />
              <img
                className="rounded-full ring-1 ring-background"
                src="/src/assets/avatar-20-05.jpg"
                width={20}
                height={20}
                alt="Friend 02"
              />
              <img
                className="rounded-full ring-1 ring-background"
                src="/src/assets/avatar-20-06.jpg"
                width={20}
                height={20}
                alt="Friend 03"
              />
            </div>
            <div className="text-muted-foreground text-xs">
              3 mutual friends
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
