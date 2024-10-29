import type { Registry } from "./schema"

export const ui: Registry = [
  {
    name: "accordion",
    type: "registry:ui",
    files: ["ui/accordion.tsx"],
    tailwind: {
      config: {
        theme: {
          extend: {
            keyframes: {
              "collapse-down": {
                from: { height: "0" },
                to: { height: "var(--height)" },
              },
              "collapse-up": {
                from: { height: "var(--height)" },
                to: { height: "0" },
              },
            },
            animation: {
              "accordion-down": "collapse-down 0.2s ease-out",
              "accordion-up": "collapse-up 0.2s ease-out",
            },
          },
        },
      },
    },
  },
  {
    name: "avatar",
    type: "registry:ui",
    files: ["ui/avatar.tsx"],
  },
  {
    name: "button",
    type: "registry:ui",
    files: ["ui/button.tsx"],
  },
  {
    name: "card",
    type: "registry:ui",
    files: ["ui/card.tsx"],
  },
  {
    name: "checkbox",
    type: "registry:ui",
    files: ["ui/checkbox.tsx"],
  },
  {
    name: "collapsible",
    type: "registry:ui",
    files: ["ui/collapsible.tsx"],
  },
  {
    name: "combobox",
    type: "registry:ui",
    files: ["ui/combobox.tsx"],
  },
  {
    name: "dialog",
    type: "registry:ui",
    files: ["ui/dialog.tsx"],
  },
  {
    name: "drawer",
    type: "registry:ui",
    files: ["ui/drawer.tsx"],
  },
  {
    name: "hover-card",
    type: "registry:ui",
    files: ["ui/hover-card.tsx"],
  },
  {
    name: "input",
    type: "registry:ui",
    files: ["ui/input.tsx"],
  },
  {
    name: "label",
    type: "registry:ui",
    files: ["ui/label.tsx"],
  },
  {
    name: "menu",
    type: "registry:ui",
    files: ["ui/menu.tsx"],
  },
  {
    name: "number-input",
    type: "registry:ui",
    files: ["ui/number-input.tsx"],
  },
  {
    name: "pagination",
    type: "registry:ui",
    files: ["ui/pagination.tsx"],
  },
  {
    name: "pin-input",
    type: "registry:ui",
    files: ["ui/pin-input.tsx"],
  },
  {
    name: "popover",
    type: "registry:ui",
    files: ["ui/popover.tsx"],
  },
  {
    name: "progress",
    type: "registry:ui",
    files: ["ui/progress.tsx"],
  },
  {
    name: "radio-group",
    type: "registry:ui",
    files: ["ui/radio-group.tsx"],
  },
  {
    name: "rating-group",
    type: "registry:ui",
    files: ["ui/rating-group.tsx"],
  },
  {
    name: "select",
    type: "registry:ui",
    files: ["ui/select.tsx"],
  },
  {
    name: "sheet",
    type: "registry:ui",
    files: ["ui/sheet.tsx"],
  },
  {
    name: "slider",
    type: "registry:ui",
    files: ["ui/slider.tsx"],
  },
  {
    name: "switch",
    type: "registry:ui",
    files: ["ui/switch.tsx"],
  },
  {
    name: "tabs",
    type: "registry:ui",
    files: ["ui/tabs.tsx"],
  },
  {
    name: "tags-input",
    type: "registry:ui",
    files: ["ui/tags-input.tsx"],
  },
  {
    name: "textarea",
    type: "registry:ui",
    files: ["ui/textarea.tsx"],
  },
  {
    name: "toast",
    type: "registry:ui",
    files: ["ui/toast.tsx"],
  },
  {
    name: "toggle",
    type: "registry:ui",
    files: ["ui/toggle.tsx"],
  },
  {
    name: "toggle-group",
    type: "registry:ui",
    files: ["ui/toggle-group.tsx"],
  },
  {
    name: "tooltip",
    type: "registry:ui",
    files: ["ui/tooltip.tsx"],
  },
  {
    name: "tree-view",
    type: "registry:ui",
    files: ["ui/tree-view.tsx"],
  },
]
