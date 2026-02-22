"use client";

import { createAnatomy } from "@ark-ui/react/anatomy";
import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import * as React from "react";

import { cn } from "@/registry/default/lib/utils";

const anatomy = createAnatomy("textarea").parts("root");
const parts = anatomy.build();

type TextareaProps = Omit<HTMLArkProps<"textarea">, "size"> & {
  size?: "sm" | "default" | "lg";
  unstyled?: boolean;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size = "default", unstyled = false, ...props }, ref) => {
    return (
      <ark.textarea
        ref={ref}
        {...parts.root.attrs}
        className={cn(
          !unstyled &&
            "flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          !unstyled && size === "sm" && "min-h-16",
          !unstyled && size === "default" && "min-h-19.5",
          !unstyled && size === "lg" && "min-h-24",
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
export type { TextareaProps };
