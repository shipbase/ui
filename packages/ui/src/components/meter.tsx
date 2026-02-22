"use client";

import * as React from "react";

import { cn } from "@coss/ui/lib/utils";

const MeterContext = React.createContext({
  max: 100,
  min: 0,
  value: 0,
});

function Meter({
  className,
  children,
  min = 0,
  value = 0,
  max = 100,
  ...props
}: React.ComponentProps<"div"> & {
  min?: number;
  value?: number;
  max?: number;
}) {
  return (
    <MeterContext.Provider value={{ max, min, value }}>
      <div
        className={cn("flex w-full flex-col gap-2", className)}
        data-slot="meter"
        {...props}
      >
        {children ? (
          children
        ) : (
          <MeterTrack>
            <MeterIndicator />
          </MeterTrack>
        )}
      </div>
    </MeterContext.Provider>
  );
}

function MeterLabel({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("font-medium text-foreground text-sm", className)}
      data-slot="meter-label"
      {...props}
    />
  );
}

function MeterTrack({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "block h-2 w-full overflow-hidden rounded-full bg-input",
        className,
      )}
      data-slot="meter-track"
      {...props}
    />
  );
}

function MeterIndicator({ className, ...props }: React.ComponentProps<"div">) {
  const { max, min, value } = React.useContext(MeterContext);
  const range = max - min || 1;
  const percentage = Math.max(0, Math.min(100, ((value - min) / range) * 100));

  return (
    <div
      className={cn("h-full bg-primary transition-all duration-500", className)}
      data-slot="meter-indicator"
      style={{ width: `${percentage}%` }}
      {...props}
    />
  );
}

function MeterValue({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<"span">, "children"> & {
  children?:
    | React.ReactNode
    | ((formatted: string, value: number) => React.ReactNode);
}) {
  const { max, min, value } = React.useContext(MeterContext);
  const range = max - min || 1;
  const formatted = `${Math.round(((value - min) / range) * 100)}%`;

  if (typeof children === "function") {
    const renderValue = children as (
      formatted: string,
      value: number,
    ) => React.ReactNode;

    return (
      <span
        className={cn("text-foreground text-sm tabular-nums", className)}
        data-slot="meter-value"
        {...props}
      >
        {renderValue(formatted, value)}
      </span>
    );
  }

  return (
    <span
      className={cn("text-foreground text-sm tabular-nums", className)}
      data-slot="meter-value"
      {...props}
    >
      {children ?? formatted}
    </span>
  );
}

export { Meter, MeterLabel, MeterTrack, MeterIndicator, MeterValue };
