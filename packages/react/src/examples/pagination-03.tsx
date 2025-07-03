import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationContext,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/pagination"

export default function Component() {
  return (
    <Pagination count={100} pageSize={10}>
      <PaginationContext>
        {({ page, totalPages }) => (
          <PaginationContent className="w-full justify-between">
            <PaginationPrevTrigger size="icon">
              <ChevronLeftIcon size={16} aria-hidden="true" />
            </PaginationPrevTrigger>
            <p className="text-muted-foreground text-sm" aria-live="polite">
              Page <span className="text-foreground">{page}</span> of{" "}
              <span className="text-foreground">{totalPages}</span>
            </p>
            <PaginationNextTrigger size="icon">
              <ChevronRightIcon size={16} aria-hidden="true" />
            </PaginationNextTrigger>
          </PaginationContent>
        )}
      </PaginationContext>
    </Pagination>
  )
}
