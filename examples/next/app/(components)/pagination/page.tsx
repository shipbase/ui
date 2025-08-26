import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationContext,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/pagination"

export default function Component() {
  return (
    <Pagination count={100}>
      <PaginationContent className="w-full justify-between gap-3">
        <PaginationPrevTrigger>
          <ChevronLeftIcon
            className="-ms-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
          Previous
        </PaginationPrevTrigger>
        <PaginationNextTrigger>
          Next
          <ChevronRightIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </PaginationNextTrigger>
      </PaginationContent>
    </Pagination>
  )
}
