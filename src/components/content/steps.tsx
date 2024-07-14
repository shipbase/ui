import { cn } from "@/lib/utils"

export const Steps = ({ ...props }) => (
  <div
    className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
    {...props}
  />
)

export const Step = ({ className, ...props }: React.ComponentProps<"h3">) => (
  <h3
    className={cn(
      "step font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
      className
    )}
    {...props}
  />
)
