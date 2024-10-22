import {
  Pagination,
  PaginationContext,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/pagination"

export default function PaginationDemo() {
  return (
    <Pagination count={100}>
      <PaginationPrevTrigger />
      <PaginationContext>
        {(context) =>
          context.pages.map((page, index) =>
            page.type === "page" ? (
              <PaginationItem key={index} {...page}>
                {page.value}
              </PaginationItem>
            ) : (
              <PaginationEllipsis key={index} index={index} />
            )
          )
        }
      </PaginationContext>
      <PaginationNextTrigger />
    </Pagination>
  )
}
