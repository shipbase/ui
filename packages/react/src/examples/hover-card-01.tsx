import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function Component() {
  return (
    <HoverCard positioning={{ placement: "top" }} openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Button
          className="size-auto overflow-hidden rounded-full bg-transparent p-0 hover:bg-transparent"
          aria-label="My profile"
          asChild
        >
          <a href="https://github.com/shipbase/ui">
            <img
              src="/src/assets/avatar-40-01.jpg"
              width={40}
              height={40}
              alt="Avatar"
            />
          </a>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-[340px]">
        <div className="flex items-start gap-3">
          <img
            className="shrink-0 rounded-full"
            src="/src/assets/avatar-40-01.jpg"
            width={40}
            height={40}
            alt="Avatar"
          />
          <div className="space-y-1">
            <p className="font-medium text-sm">shipbase/ui</p>
            <p className="text-muted-foreground text-sm">
              Beautiful UI components built with Tailwind CSS and Next.js.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
