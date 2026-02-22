"use client";

import {
  createToaster,
  Toaster as ToasterPrimitive,
  Toast as ToastPrimitive,
} from "@ark-ui/react/toast";
import {
  CircleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
  LoaderCircleIcon,
  TriangleAlertIcon,
} from "lucide-react";

import { cn } from "@/registry/default/lib/utils";
import { buttonVariants } from "@/registry/default/ui/button";

const TOAST_ICONS = {
  error: CircleAlertIcon,
  info: InfoIcon,
  loading: LoaderCircleIcon,
  success: CircleCheckIcon,
  warning: TriangleAlertIcon,
} as const;

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

type ToastType = keyof typeof TOAST_ICONS;

type CompatToastOptions = {
  actionProps?: {
    children?: React.ReactNode;
    onClick?: () => void;
  };
  data?: Record<string, unknown>;
  description?: string;
  timeout?: number;
  title?: string;
  type?: ToastType;
  positionerProps?: Record<string, unknown>;
};

function toPlacement(position: ToastPosition) {
  switch (position) {
    case "top-left":
      return "top-start" as const;
    case "top-center":
      return "top" as const;
    case "top-right":
      return "top-end" as const;
    case "bottom-left":
      return "bottom-start" as const;
    case "bottom-center":
      return "bottom" as const;
    default:
      return "bottom-end" as const;
  }
}

function normalizeToastOptions(
  options: CompatToastOptions,
  fallbackType?: ToastType,
) {
  const action = options.actionProps
    ? {
        label:
          typeof options.actionProps.children === "string"
            ? options.actionProps.children
            : "Action",
        onClick: options.actionProps.onClick ?? (() => {}),
      }
    : undefined;

  return {
    action,
    description: options.description,
    duration: options.timeout,
    meta: options.data,
    title: options.title,
    type: (options.type ?? fallbackType) as ToastType | undefined,
  };
}

function createCompatToastManager(defaultPosition: ToastPosition) {
  const toaster = createToaster({
    overlap: true,
    placement: toPlacement(defaultPosition),
  });

  return {
    _toaster: toaster,
    add(options: CompatToastOptions) {
      return toaster.create(normalizeToastOptions(options));
    },
    close(id: string | null | undefined) {
      if (!id) return;
      toaster.dismiss(id);
    },
    async promise<T>(
      promise: Promise<T>,
      states: {
        error: ((error: any) => CompatToastOptions) | CompatToastOptions;
        loading?: CompatToastOptions;
        success: ((value: T) => CompatToastOptions) | CompatToastOptions;
      },
    ) {
      const loadingId = states.loading
        ? toaster.create(normalizeToastOptions(states.loading, "loading"))
        : null;

      try {
        const result = await promise;
        if (loadingId) {
          toaster.dismiss(loadingId);
        }

        const next =
          typeof states.success === "function"
            ? states.success(result)
            : states.success;
        toaster.create(normalizeToastOptions(next, "success"));
        return result;
      } catch (error) {
        if (loadingId) {
          toaster.dismiss(loadingId);
        }

        const next =
          typeof states.error === "function"
            ? states.error(error)
            : states.error;
        toaster.create(normalizeToastOptions(next, "error"));
        throw error;
      }
    },
  };
}

const toastManager = createCompatToastManager("bottom-right");
const anchoredToastManager = createCompatToastManager("bottom-right");

function ToastViewport({
  toaster,
}: {
  toaster: ReturnType<typeof createToaster>;
}) {
  const ToastRoot = ToastPrimitive.Root as any;

  return (
    <ToasterPrimitive toaster={toaster}>
      {(toast) => {
        const Icon = toast.type ? TOAST_ICONS[toast.type as ToastType] : null;
        const tooltipStyle = (
          toast.meta as { tooltipStyle?: boolean } | undefined
        )?.tooltipStyle;

        return (
          <ToastRoot
            className={cn(
              "z-[--z-index] flex h-[--height] w-full scale-[--scale] items-center justify-between gap-2 rounded-lg border bg-popover p-3 text-popover-foreground opacity-[--opacity] shadow-lg/5 transition-all will-change-[translate,opacity,scale] [translate:var(--x)_var(--y)_0] data-[state=closed]:animate-out data-[state=open]:animate-in",
              tooltipStyle && "w-auto max-w-64 px-2 py-1.5 text-xs",
            )}
            toast={toast}
          >
            <div className="flex items-center gap-2">
              {Icon && (
                <Icon className="size-4 shrink-0 in-data-[type=loading]:animate-spin" />
              )}
              <div className="flex min-w-0 flex-col gap-0.5">
                <ToastPrimitive.Title className="font-medium" />
                <ToastPrimitive.Description className="text-muted-foreground text-sm" />
              </div>
            </div>
            {toast.action && (
              <ToastPrimitive.ActionTrigger
                className={buttonVariants({ size: "xs" })}
              >
                {toast.action.label}
              </ToastPrimitive.ActionTrigger>
            )}
          </ToastRoot>
        );
      }}
    </ToasterPrimitive>
  );
}

function ToastProvider({
  children,
}: React.ComponentProps<"div"> & { position?: ToastPosition }) {
  return (
    <>
      {children}
      <ToastViewport toaster={toastManager._toaster} />
    </>
  );
}

function AnchoredToastProvider({ children }: React.ComponentProps<"div">) {
  return (
    <>
      {children}
      <ToastViewport toaster={anchoredToastManager._toaster} />
    </>
  );
}

export {
  ToastProvider,
  type ToastPosition,
  toastManager,
  AnchoredToastProvider,
  anchoredToastManager,
};
