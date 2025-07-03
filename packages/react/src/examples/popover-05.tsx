"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

const tips = [
  {
    title: "Welcome to Dashboard",
    description:
      "This is your new workspace. Here you'll find all your projects, recent activities, settings, and more.",
  },
  {
    title: "Quick Actions",
    description:
      "Use the toolbar above to create new projects, invite team members, or access settings.",
  },
  {
    title: "Need Help?",
    description:
      "Click the support icon in the top right corner to access our help center and documentation.",
  },
]

export default function Component() {
  const [currentTip, setCurrentTip] = useState(0)

  const handleNavigation = () => {
    if (currentTip === tips.length - 1) {
      setCurrentTip(0)
    } else {
      setCurrentTip(currentTip + 1)
    }
  }

  return (
    <Popover positioning={{ placement: "top" }}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="mt-48">
          Tooltip-like with steps
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[280px] py-3 shadow-none">
        <div className="space-y-3">
          <div className="space-y-1">
            <PopoverTitle className="font-medium text-[13px]">
              {tips[currentTip].title}
            </PopoverTitle>
            <PopoverDescription className="text-muted-foreground text-xs">
              {tips[currentTip].description}
            </PopoverDescription>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-muted-foreground text-xs">
              {currentTip + 1}/{tips.length}
            </span>
            <button
              type="button"
              className="font-medium text-xs hover:underline"
              onClick={handleNavigation}
            >
              {currentTip === tips.length - 1 ? "Start over" : "Next"}
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
