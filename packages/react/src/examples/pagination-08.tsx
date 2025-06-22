import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationContext,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils"

export default function Component() {
  return (
    <Pagination count={100}>
      <PaginationContext>
        {(pagination) => (
          <PaginationContent className="-space-x-px inline-flex gap-0 rounded-md shadow-xs rtl:space-x-reverse">
            {/* Previous page button */}
            <PaginationPrevTrigger
              size="icon"
              className="rounded-none rounded-s-md rounded-e-none shadow-none focus-visible:z-10"
            >
              <ChevronLeftIcon size={16} />
            </PaginationPrevTrigger>

            {pagination.pages.map((page, index) =>
              page.type === "page" ? (
                /* Page number links */
                <PaginationItem
                  key={index}
                  type={page.type}
                  value={page.value}
                  size="icon"
                  variant="outline"
                  className={cn(
                    "rounded-none shadow-none focus-visible:z-10",
                    pagination.page === page.value && "bg-accent"
                  )}
                >
                  {page.value}
                </PaginationItem>
              ) : (
                /* Ellipsis */
                <PaginationEllipsis
                  key={index}
                  index={index}
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                    }),
                    "pointer-events-none rounded-none shadow-none"
                  )}
                />
              )
            )}

            {/* Next page button */}
            <PaginationNextTrigger
              size="icon"
              className="rounded-none rounded-s-none rounded-e-md shadow-none focus-visible:z-10"
            >
              <ChevronRightIcon size={16} />
            </PaginationNextTrigger>
          </PaginationContent>
        )}
      </PaginationContext>
    </Pagination>
  )
}
