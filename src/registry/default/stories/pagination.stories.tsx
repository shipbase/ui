import type { Meta } from "@storybook/react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

import { buttonVariants } from "../ui/button"
import {
  Pagination,
  PaginationContext,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from "../ui/pagination"

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
