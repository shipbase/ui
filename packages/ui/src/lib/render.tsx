"use client";

import * as React from "react";

type AnyProps = Record<string, unknown>;

function isEventHandler(key: string, value: unknown) {
  return key.startsWith("on") && typeof value === "function";
}

export function mergeProps<TTag extends React.ElementType>(
  baseProps: React.ComponentPropsWithoutRef<TTag>,
  overrideProps: React.ComponentPropsWithoutRef<TTag>,
): React.ComponentPropsWithoutRef<TTag> {
  const result: AnyProps = {
    ...(baseProps as AnyProps),
    ...(overrideProps as AnyProps),
  };

  const base = baseProps as AnyProps;
  const override = overrideProps as AnyProps;

  for (const key of Object.keys(base)) {
    if (!(key in override)) {
      continue;
    }

    const baseValue = base[key];
    const overrideValue = override[key];

    if (key === "className") {
      result[key] = [baseValue, overrideValue].filter(Boolean).join(" ");
      continue;
    }

    if (key === "style") {
      result[key] = {
        ...(baseValue as object),
        ...(overrideValue as object),
      };
      continue;
    }

    if (isEventHandler(key, baseValue) && isEventHandler(key, overrideValue)) {
      result[key] = (...args: unknown[]) => {
        (baseValue as (...eventArgs: unknown[]) => void)(...args);
        (overrideValue as (...eventArgs: unknown[]) => void)(...args);
      };
    }
  }

  return result as React.ComponentPropsWithoutRef<TTag>;
}

export function useRender<TTag extends keyof React.JSX.IntrinsicElements>({
  defaultTagName,
  props,
  render,
}: {
  defaultTagName: TTag;
  props: React.ComponentPropsWithoutRef<TTag>;
  render?: React.ReactElement | null;
}) {
  if (render && React.isValidElement(render)) {
    const mergedProps = mergeProps(render.props as AnyProps, props as AnyProps);
    const children =
      props.children === undefined
        ? (render.props as AnyProps).children
        : props.children;

    return React.cloneElement(
      render as React.ReactElement<AnyProps>,
      mergedProps,
      children as React.ReactNode,
    );
  }

  return React.createElement(defaultTagName, props);
}

export namespace useRender {
  export type ComponentProps<TTag extends keyof React.JSX.IntrinsicElements> =
    React.ComponentPropsWithoutRef<TTag> & {
      render?: React.ReactElement;
    };
}

export function renderAsChild({
  children,
  render,
}: {
  children?: React.ReactNode;
  render?: React.ReactElement;
}) {
  if (!render) {
    return {
      asChild: false,
      child: children,
    };
  }

  const renderChildren =
    children === undefined ? (render.props as AnyProps).children : children;

  return {
    asChild: true,
    child: React.cloneElement(
      render as React.ReactElement<AnyProps>,
      undefined,
      renderChildren as React.ReactNode,
    ),
  };
}
