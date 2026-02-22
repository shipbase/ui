import { cn } from "@coss/ui/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"hr"> & {
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <hr
      className={cn(
        "shrink-0 border-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-auto data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
        className,
      )}
      data-orientation={orientation}
      data-slot="separator"
      {...props}
    />
  );
}

export { Separator };
