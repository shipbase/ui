"use client";

import { createAnatomy } from "@ark-ui/react/anatomy";
import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import * as React from "react";

import { cn } from "@/registry/default/lib/utils";

const anatomy = createAnatomy("input").parts("root");
const parts = anatomy.build();

type InputProps = Omit<HTMLArkProps<"input">, "size"> & {
  size?: "sm" | "default" | "lg";
  unstyled?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = "text", size = "default", unstyled = false, ...props },
    ref,
  ) => {
    return (
      <ark.input
        ref={ref}
        {...parts.root.attrs}
        className={cn(
          !unstyled &&
            "flex w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          !unstyled &&
            "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          !unstyled &&
            "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          !unstyled && size === "sm" && "h-8",
          !unstyled && size === "default" && "h-9",
          !unstyled && size === "lg" && "h-10",
          type === "search" &&
            "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
          type === "file" &&
            "p-0 pr-3 text-muted-foreground/70 italic file:me-3 file:h-full file:border-0 file:border-input file:border-r file:border-solid file:bg-transparent file:px-3 file:font-medium file:text-foreground file:text-sm file:not-italic",
          className,
        )}
        type={type}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
export type { InputProps };
