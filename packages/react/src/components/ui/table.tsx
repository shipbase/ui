import type * as React from "react"

import { createAnatomy } from "@ark-ui/react/anatomy"

import { cn } from "@/lib/utils"

const anatomy = createAnatomy("table", [
  "root",
  "container",
  "header",
  "body",
  "footer",
  "row",
  "head",
  "cell",
  "caption",
])
const parts = anatomy.build()

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div {...parts.container.attrs} className="relative w-full overflow-x-auto">
      <table
        {...parts.root.attrs}
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      {...parts.body.attrs}
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  return (
    <caption
      {...parts.caption.attrs}
      className={cn("mt-4 text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      {...parts.cell.attrs}
      className={cn(
        "whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      {...parts.footer.attrs}
      className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      {...parts.head.attrs}
      className={cn(
        "h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return <thead {...parts.header.attrs} className={cn("[&_tr]:border-b", className)} {...props} />
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      {...parts.row.attrs}
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className,
      )}
      {...props}
    />
  )
}

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow }
