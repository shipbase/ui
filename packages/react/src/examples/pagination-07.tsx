import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationContext,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/pagination"
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"

export default function Component() {
  return (
    <Pagination count={100}>
      <PaginationContext>
        {(pagination) => (
          <PaginationContent>
            {/* First page button */}
            <li>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Go to first page"
                disabled={pagination.page === 1}
                onClick={pagination.goToFirstPage}
              >
                <ChevronFirstIcon size={16} aria-hidden="true" />
              </Button>
            </li>

            {/* Previous page button */}
            <PaginationPrevTrigger variant="ghost" size="icon">
              <ChevronLeftIcon size={16} />
            </PaginationPrevTrigger>

            {pagination.pages.map((page, index) =>
              page.type === "page" ? (
                /* Page number links */
                <PaginationItem
                  key={index}
                  type={page.type}
                  value={page.value}
                  variant={pagination.page === page.value ? "outline" : "ghost"}
                  size="icon"
                >
                  {page.value}
                </PaginationItem>
              ) : (
                /* Ellipsis */
                <PaginationEllipsis key={index} index={index} />
              )
            )}

            {/* Next page button */}
            <PaginationNextTrigger variant="ghost" size="icon">
              <ChevronRightIcon size={16} />
            </PaginationNextTrigger>

            {/* Last page button */}
            <li>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Go to last page"
                disabled={pagination.page === pagination.totalPages}
                onClick={pagination.goToLastPage}
              >
                <ChevronLastIcon size={16} aria-hidden="true" />
              </Button>
            </li>
          </PaginationContent>
        )}
      </PaginationContext>
    </Pagination>
  )
}
