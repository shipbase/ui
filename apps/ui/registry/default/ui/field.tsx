"use client";

import * as React from "react";

import { useRender } from "@/registry/default/lib/render";
import { cn } from "@/registry/default/lib/utils";
import { useFormContext } from "@/registry/default/ui/form";

type FieldContextValue = {
  disabled: boolean;
  error?: string;
  invalid: boolean;
  name?: string;
};

const FieldContext = React.createContext<FieldContextValue>({
  disabled: false,
  invalid: false,
});

type FieldProps = React.ComponentProps<"div"> & {
  disabled?: boolean;
  name?: string;
  render?: React.ReactElement | ((props: any) => React.ReactElement);
};

function getFirstError(
  errors: Record<string, string | string[] | undefined>,
  name?: string,
) {
  if (!name) {
    return undefined;
  }

  const value = errors[name];
  if (Array.isArray(value)) {
    return value.find(Boolean);
  }

  return value;
}

function Field({
  className,
  disabled = false,
  name,
  render,
  "aria-invalid": ariaInvalid,
  ...props
}: FieldProps) {
  const { errors } = useFormContext();
  const error = getFirstError(errors, name);
  const invalid =
    ariaInvalid === true || ariaInvalid === "true" || Boolean(error);

  const rootProps = {
    ...props,
    "aria-invalid": invalid || undefined,
    className: cn("flex flex-col items-start gap-2", className),
    "data-disabled": disabled ? "true" : undefined,
    "data-invalid": invalid ? "true" : undefined,
    "data-slot": "field",
  } as any;

  const renderElement =
    typeof render === "function" ? render(rootProps) : render;

  const root = useRender({
    defaultTagName: "div",
    props: rootProps,
    render: renderElement,
  });

  return (
    <FieldContext.Provider value={{ disabled, error, invalid, name }}>
      {root}
    </FieldContext.Provider>
  );
}

function FieldLabel({ className, ...props }: React.ComponentProps<"label">) {
  const state = React.useContext(FieldContext);

  return (
    <label
      className={cn(
        "inline-flex items-center gap-2 font-medium text-base/4.5 text-foreground sm:text-sm/4",
        className,
      )}
      data-disabled={state.disabled ? "true" : undefined}
      data-slot="field-label"
      {...props}
    />
  );
}

function FieldItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex", className)} data-slot="field-item" {...props} />
  );
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-muted-foreground text-xs", className)}
      data-slot="field-description"
      {...props}
    />
  );
}

function FieldError({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  const state = React.useContext(FieldContext);
  const content = children ?? state.error;

  if (!content) {
    return null;
  }

  return (
    <p
      className={cn("text-destructive-foreground text-xs", className)}
      data-slot="field-error"
      {...props}
    >
      {content}
    </p>
  );
}

function FieldControl({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="field-control" {...props}>
      {children}
    </div>
  );
}

function FieldValidity({
  children,
}: {
  children: React.ReactNode | ((state: FieldContextValue) => React.ReactNode);
}) {
  const state = React.useContext(FieldContext);

  if (typeof children === "function") {
    return <>{children(state)}</>;
  }

  return <>{children}</>;
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldControl,
  FieldItem,
  FieldValidity,
};
