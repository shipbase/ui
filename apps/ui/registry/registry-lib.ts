import type { Registry } from "shadcn/schema";

export const lib: Registry["items"] = [
  {
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "lib/utils.ts",
        type: "registry:lib",
      },
    ],
    name: "utils",
    type: "registry:lib",
  },
  {
    files: [
      {
        path: "lib/render.tsx",
        type: "registry:lib",
      },
    ],
    name: "render",
    type: "registry:lib",
  },
];
