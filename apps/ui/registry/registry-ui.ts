import type { Registry } from "shadcn/schema";

export const ui: Registry["items"] = [
  {
    name: "ui",
    registryDependencies: [
      "@coss/accordion",
      "@coss/alert",
      "@coss/alert-dialog",
      "@coss/autocomplete",
      "@coss/avatar",
      "@coss/badge",
      "@coss/breadcrumb",
      "@coss/button",
      "@coss/calendar",
      "@coss/card",
      "@coss/checkbox",
      "@coss/checkbox-group",
      "@coss/collapsible",
      "@coss/combobox",
      "@coss/command",
      "@coss/dialog",
      "@coss/empty",
      "@coss/field",
      "@coss/fieldset",
      "@coss/form",
      "@coss/frame",
      "@coss/group",
      "@coss/input",
      "@coss/input-group",
      "@coss/kbd",
      "@coss/label",
      "@coss/menu",
      "@coss/meter",
      "@coss/number-field",
      "@coss/pagination",
      "@coss/popover",
      "@coss/preview-card",
      "@coss/progress",
      "@coss/radio-group",
      "@coss/scroll-area",
      "@coss/select",
      "@coss/separator",
      "@coss/sheet",
      "@coss/sidebar",
      "@coss/skeleton",
      "@coss/slider",
      "@coss/spinner",
      "@coss/switch",
      "@coss/table",
      "@coss/tabs",
      "@coss/textarea",
      "@coss/toast",
      "@coss/toggle",
      "@coss/toggle-group",
      "@coss/toolbar",
      "@coss/tooltip",
    ],
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/accordion.tsx",
        type: "registry:ui",
      },
    ],
    name: "accordion",
    type: "registry:ui",
  },
  {
    cssVars: {
      dark: {
        "destructive-foreground": "var(--color-red-400)",
        info: "var(--color-blue-500)",
        "info-foreground": "var(--color-blue-400)",
        success: "var(--color-emerald-500)",
        "success-foreground": "var(--color-emerald-400)",
        warning: "var(--color-amber-500)",
        "warning-foreground": "var(--color-amber-400)",
      },
      light: {
        "destructive-foreground": "var(--color-red-700)",
        info: "var(--color-blue-500)",
        "info-foreground": "var(--color-blue-700)",
        success: "var(--color-emerald-500)",
        "success-foreground": "var(--color-emerald-700)",
        warning: "var(--color-amber-500)",
        "warning-foreground": "var(--color-amber-700)",
      },
    },
    files: [
      {
        path: "ui/alert.tsx",
        type: "registry:ui",
      },
    ],
    name: "alert",
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/alert-dialog.tsx",
        type: "registry:ui",
      },
    ],
    name: "alert-dialog",
    registryDependencies: ["@coss/render"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/autocomplete.tsx",
        type: "registry:ui",
      },
    ],
    name: "autocomplete",
    registryDependencies: ["@coss/combobox"],
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/avatar.tsx",
        type: "registry:ui",
      },
    ],
    name: "avatar",
    type: "registry:ui",
  },
  {
    cssVars: {
      dark: {
        "destructive-foreground": "var(--color-red-400)",
        info: "var(--color-blue-500)",
        "info-foreground": "var(--color-blue-400)",
        success: "var(--color-emerald-500)",
        "success-foreground": "var(--color-emerald-400)",
        warning: "var(--color-amber-500)",
        "warning-foreground": "var(--color-amber-400)",
      },
      light: {
        "destructive-foreground": "var(--color-red-700)",
        info: "var(--color-blue-500)",
        "info-foreground": "var(--color-blue-700)",
        success: "var(--color-emerald-500)",
        "success-foreground": "var(--color-emerald-700)",
        warning: "var(--color-amber-500)",
        "warning-foreground": "var(--color-amber-700)",
      },
    },
    files: [
      {
        path: "ui/badge.tsx",
        type: "registry:ui",
      },
    ],
    name: "badge",
    registryDependencies: ["@coss/render"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/breadcrumb.tsx",
        type: "registry:ui",
      },
    ],
    name: "breadcrumb",
    registryDependencies: ["@coss/render"],
    type: "registry:ui",
  },
  {
    cssVars: {
      dark: {
        "destructive-foreground": "var(--color-red-400)",
      },
      light: {
        "destructive-foreground": "var(--color-red-700)",
      },
    },
    files: [
      {
        path: "ui/button.tsx",
        type: "registry:ui",
      },
    ],
    name: "button",
    registryDependencies: ["@coss/render"],
    type: "registry:ui",
  },
  {
    dependencies: ["react-day-picker", "lucide-react"],
    files: [
      {
        path: "ui/calendar.tsx",
        type: "registry:ui",
      },
    ],
    name: "calendar",
    registryDependencies: [],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/card.tsx",
        type: "registry:ui",
      },
    ],
    name: "card",
    registryDependencies: ["@coss/render"],
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/checkbox.tsx",
        type: "registry:ui",
      },
    ],
    name: "checkbox",
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/checkbox-group.tsx",
        type: "registry:ui",
      },
    ],
    name: "checkbox-group",
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/collapsible.tsx",
        type: "registry:ui",
      },
    ],
    name: "collapsible",
    registryDependencies: ["@coss/render"],
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/combobox.tsx",
        type: "registry:ui",
      },
    ],
    name: "combobox",
    registryDependencies: ["@coss/render", "@coss/scroll-area"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/command.tsx",
        type: "registry:ui",
      },
    ],
    name: "command",
    registryDependencies: ["@coss/autocomplete", "@coss/dialog"],
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/dialog.tsx",
        type: "registry:ui",
      },
    ],
    name: "dialog",
    registryDependencies: ["@coss/render"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/empty.tsx",
        type: "registry:ui",
      },
    ],
    name: "empty",
    type: "registry:ui",
  },
  {
    cssVars: {
      dark: {
        "destructive-foreground": "var(--color-red-400)",
      },
      light: {
        "destructive-foreground": "var(--color-red-700)",
      },
    },
    files: [
      {
        path: "ui/field.tsx",
        type: "registry:ui",
      },
    ],
    name: "field",
    registryDependencies: ["@coss/form", "@coss/render"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/fieldset.tsx",
        type: "registry:ui",
      },
    ],
    name: "fieldset",
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/form.tsx",
        type: "registry:ui",
      },
    ],
    name: "form",
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/frame.tsx",
        type: "registry:ui",
      },
    ],
    name: "frame",
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/group.tsx",
        type: "registry:ui",
      },
    ],
    name: "group",
    registryDependencies: ["@coss/render", "@coss/separator"],
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/input.tsx",
        type: "registry:ui",
      },
    ],
    name: "input",
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/input-group.tsx",
        type: "registry:ui",
      },
    ],
    name: "input-group",
    registryDependencies: ["@coss/input", "@coss/textarea"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/kbd.tsx",
        type: "registry:ui",
      },
    ],
    name: "kbd",
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/label.tsx",
        type: "registry:ui",
      },
    ],
    name: "label",
    registryDependencies: ["@coss/render"],
    type: "registry:ui",
  },
  {
    cssVars: {
      dark: {
        "destructive-foreground": "var(--color-red-400)",
      },
      light: {
        "destructive-foreground": "var(--color-red-700)",
      },
    },
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/menu.tsx",
        type: "registry:ui",
      },
    ],
    name: "menu",
    registryDependencies: ["@coss/render"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/meter.tsx",
        type: "registry:ui",
      },
    ],
    name: "meter",
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/number-field.tsx",
        type: "registry:ui",
      },
    ],
    name: "number-field",
    registryDependencies: ["@coss/label", "@coss/render"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/pagination.tsx",
        type: "registry:ui",
      },
    ],
    name: "pagination",
    registryDependencies: ["@coss/button", "@coss/render"],
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/popover.tsx",
        type: "registry:ui",
      },
    ],
    name: "popover",
    registryDependencies: ["@coss/render"],
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/preview-card.tsx",
        type: "registry:ui",
      },
    ],
    name: "preview-card",
    registryDependencies: ["@coss/render"],
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/progress.tsx",
        type: "registry:ui",
      },
    ],
    name: "progress",
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/radio-group.tsx",
        type: "registry:ui",
      },
    ],
    name: "radio-group",
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/scroll-area.tsx",
        type: "registry:ui",
      },
    ],
    name: "scroll-area",
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/select.tsx",
        type: "registry:ui",
      },
    ],
    name: "select",
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/separator.tsx",
        type: "registry:ui",
      },
    ],
    name: "separator",
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/sheet.tsx",
        type: "registry:ui",
      },
    ],
    name: "sheet",
    registryDependencies: ["@coss/render"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/sidebar.tsx",
        type: "registry:ui",
      },
    ],
    name: "sidebar",
    registryDependencies: [
      "@coss/button",
      "@coss/input",
      "@coss/render",
      "@coss/scroll-area",
      "@coss/separator",
      "@coss/sheet",
      "@coss/skeleton",
      "@coss/tooltip",
      "@coss/use-mobile",
    ],
    type: "registry:ui",
  },
  {
    css: {
      "@keyframes skeleton": {
        to: {
          "background-position": "-200% 0",
        },
      },
    },
    cssVars: {
      theme: {
        "--animate-skeleton": "skeleton 2s -1s infinite linear",
      },
    },
    files: [
      {
        path: "ui/skeleton.tsx",
        type: "registry:ui",
      },
    ],
    name: "skeleton",
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/slider.tsx",
        type: "registry:ui",
      },
    ],
    name: "slider",
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/spinner.tsx",
        type: "registry:ui",
      },
    ],
    name: "spinner",
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/switch.tsx",
        type: "registry:ui",
      },
    ],
    name: "switch",
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/table.tsx",
        type: "registry:ui",
      },
    ],
    name: "table",
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/tabs.tsx",
        type: "registry:ui",
      },
    ],
    name: "tabs",
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/textarea.tsx",
        type: "registry:ui",
      },
    ],
    name: "textarea",
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/toast.tsx",
        type: "registry:ui",
      },
    ],
    name: "toast",
    registryDependencies: ["@coss/button"],
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/toggle.tsx",
        type: "registry:ui",
      },
    ],
    name: "toggle",
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/toggle-group.tsx",
        type: "registry:ui",
      },
    ],
    name: "toggle-group",
    registryDependencies: ["@coss/toggle"],
    type: "registry:ui",
  },
  {
    files: [
      {
        path: "ui/toolbar.tsx",
        type: "registry:ui",
      },
    ],
    name: "toolbar",
    registryDependencies: ["@coss/render"],
    type: "registry:ui",
  },
  {
    dependencies: ["@ark-ui/react"],
    files: [
      {
        path: "ui/tooltip.tsx",
        type: "registry:ui",
      },
    ],
    name: "tooltip",
    registryDependencies: ["@coss/render"],
    type: "registry:ui",
  },
];
