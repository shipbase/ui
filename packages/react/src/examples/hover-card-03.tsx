import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <div className="max-w-md text-sm">
      <HoverCard
        positioning={{ placement: "right" }}
        openDelay={0}
        closeDelay={0}
      >
        <HoverCardTrigger asChild>
          <a className="flex size-16 overflow-hidden rounded-md" href="#ui">
            <img
              className="size-full object-cover"
              src="/src/assets/avatar.jpg"
              width={382}
              height={216}
              alt="Content img"
            />
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-[320px]">
          <HoverCardArrow />
          <div className="space-y-3">
            <div className="space-y-1">
              <h2 className="font-semibold">
                Building a Design System with Next.js and Tailwind CSS
              </h2>
              <p className="text-muted-foreground text-sm">
                Learn how to build a comprehensive design system using Tailwind
                CSS, including component architecture, and theme customization.
              </p>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <span>8 min read</span>
              <span>·</span>
              <span>Updated 2 days ago</span>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
