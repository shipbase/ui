import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useState } from "react"

import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRootProvider,
  usePagination,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectControl,
  SelectItem,
  SelectTrigger,
  SelectValueText,
  createListCollection,
} from "@/components/ui/select"

export default function Component() {
  const pagination = usePagination({ count: 100 })
  const [pageSize] = useState(
    createListCollection({
      items: [
        { value: "10", label: "10 / page" },
        { value: "20", label: "20 / page" },
        { value: "50", label: "50 / page" },
        { value: "100", label: "100 / page" },
      ],
    })
  )

  return (
    <div className="flex items-center justify-between gap-3">
      {/* Page number information */}
      <p
        className="flex-1 whitespace-nowrap text-muted-foreground text-sm"
        aria-live="polite"
      >
        Page <span className="text-foreground">{pagination.page}</span> of{" "}
        <span className="text-foreground">{pagination.totalPages}</span>
      </p>

      {/* Pagination */}
      <div className="grow">
        <PaginationRootProvider value={pagination}>
          <PaginationContent>
            {/* Previous page button */}
            <PaginationPrevTrigger size="icon" variant="ghost">
              <ChevronLeftIcon size={16} aria-hidden="true" />
            </PaginationPrevTrigger>

            {pagination.pages.map((page, index) =>
              page.type === "page" ? (
                /* Page number links */
                <PaginationItem
                  key={index}
                  type={page.type}
                  value={page.value}
                  size="icon"
                  variant={page.value === pagination.page ? "outline" : "ghost"}
                >
                  {page.value}
                </PaginationItem>
              ) : (
                /* Ellipsis */
                <PaginationEllipsis key={index} index={index} />
              )
            )}

            {/* Next page button */}
            <PaginationNextTrigger size="icon" variant="ghost">
              <ChevronRightIcon size={16} aria-hidden="true" />
            </PaginationNextTrigger>
          </PaginationContent>
        </PaginationRootProvider>
      </div>

      {/* Results per page */}
      <div className="flex flex-1 justify-end">
        <Select
          className="w-fit"
          positioning={{ sameWidth: true }}
          collection={pageSize}
          defaultValue={["10"]}
        >
          <SelectControl>
            <SelectTrigger className="whitespace-nowrap">
              <SelectValueText placeholder="Select number of results" />
            </SelectTrigger>
          </SelectControl>
          <SelectContent>
            {pageSize.items.map((item) => (
              <SelectItem item={item.value} key={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
