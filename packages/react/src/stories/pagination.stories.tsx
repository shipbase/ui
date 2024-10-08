import type { Meta } from "@storybook/react"

import {
  Pagination,
  PaginationContext,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "@/components/ui/pagination"

export default {
  title: "Components/Pagination",
} satisfies Meta

export const Basic = () => {
  return (
    <Pagination count={300} pageSize={10} siblingCount={1}>
      <PaginationPrevTrigger />
      <PaginationContext>
        {(context) =>
          context.pages.map((page, index) =>
            page.type === "page" ? (
              <PaginationItem key={page.value} {...page}>
                {page.value}
              </PaginationItem>
            ) : (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <PaginationEllipsis key={index} index={index} />
            )
          )
        }
      </PaginationContext>
      <PaginationNextTrigger />
    </Pagination>
  )
}
