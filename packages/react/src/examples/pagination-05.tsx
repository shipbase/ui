import { Button, buttonVariants } from "@/components/ui/button"
import {
  PaginationContent,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRootProvider,
  usePagination,
} from "@/components/ui/pagination"

export default function Component() {
  const pagination = usePagination({ count: 100 })

  return (
    <div className="flex items-center justify-between gap-3">
      <p className="grow text-muted-foreground text-sm" aria-live="polite">
        Page <span className="text-foreground">{pagination.page}</span> of{" "}
        <span className="text-foreground">{pagination.totalPages}</span>
      </p>
      <PaginationRootProvider value={pagination}>
        <PaginationContent className="w-auto justify-end gap-3">
          <PaginationPrevTrigger>Previous</PaginationPrevTrigger>
          <PaginationNextTrigger>Next</PaginationNextTrigger>
        </PaginationContent>
      </PaginationRootProvider>
    </div>
  )
}
