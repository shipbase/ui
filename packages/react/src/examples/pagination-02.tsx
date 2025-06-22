import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/pagination"

export default function Component() {
  return (
    <Pagination count={100}>
      <PaginationContent className="w-full justify-between gap-3">
        <PaginationPrevTrigger className="group" variant="ghost">
          <ArrowLeftIcon
            className="-ms-1 group-hover:-translate-x-0.5 opacity-60 transition-transform"
            size={16}
            aria-hidden="true"
          />
          Previous
        </PaginationPrevTrigger>
        <PaginationNextTrigger className="group" variant="ghost">
          Next
          <ArrowRightIcon
            className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
            size={16}
            aria-hidden="true"
          />
        </PaginationNextTrigger>
      </PaginationContent>
    </Pagination>
  )
}
