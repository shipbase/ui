import { Button } from "@ui/react/button"
import { Sheet, SheetContent, SheetTrigger } from "@ui/react/sheet"

import { Icons } from "../icons"

export function MobileNavSheet({ children }: { children: React.ReactNode }) {
  return (
    <Sheet side="left">
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Icons.menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="pr-0">{children}</SheetContent>
    </Sheet>
  )
}
