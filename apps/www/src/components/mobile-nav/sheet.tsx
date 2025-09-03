import { Button } from "@ui/react/button"
import { Sheet, SheetContent, SheetTrigger } from "@ui/react/sheet"
import { MenuIcon } from "lucide-react"

export function MobileNavSheet({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <MenuIcon />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="z-[50] pr-0" side="left">
        {children}
      </SheetContent>
    </Sheet>
  )
}
