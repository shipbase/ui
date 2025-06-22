import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationContext,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/pagination"

export default function Component() {
  return (
    <Pagination count={100}>
      <PaginationContext>
        {(pagination) => (
          <PaginationContent>
            {/* Previous page button */}
            <PaginationPrevTrigger variant="ghost">
              <ChevronLeftIcon size={16} aria-hidden="true" />
              Previous
            </PaginationPrevTrigger>

            {pagination.pages.map((page, index) =>
              page.type === "page" ? (
                /* Page number links */
                <PaginationItem
                  key={index}
                  type={page.type}
                  value={page.value}
                  variant={pagination.page === page.value ? "outline" : "ghost"}
                >
                  {page.value}
                </PaginationItem>
              ) : (
                /* Ellipsis */
                <PaginationEllipsis key={index} index={index} />
              )
            )}

            {/* Next page button */}
            <PaginationNextTrigger variant="ghost">
              Next
              <ChevronRightIcon size={16} aria-hidden="true" />
            </PaginationNextTrigger>
          </PaginationContent>
        )}
      </PaginationContext>
    </Pagination>
  )
}
