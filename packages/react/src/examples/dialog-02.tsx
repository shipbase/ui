import { CircleAlertIcon } from "lucide-react"
import { useId, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const PROJECT_NAME = "shipbase/ui"

export default function Component() {
  const id = useId()
  const [inputValue, setInputValue] = useState("")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete project</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <CircleAlertIcon className="opacity-80" size={16} />
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              Final confirmation
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              This action cannot be undone. To confirm, please enter the project
              name <span className="text-foreground">shipbase/ui</span>.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <div className="*:not-first:mt-2">
            <Label htmlFor={id}>Project name</Label>
            <Input
              id={id}
              type="text"
              placeholder="Type shipbase/ui to confirm"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <DialogFooter>
            <DialogCloseTrigger asChild>
              <Button type="button" variant="outline" className="flex-1">
                Cancel
              </Button>
            </DialogCloseTrigger>
            <Button
              type="button"
              className="flex-1"
              disabled={inputValue !== PROJECT_NAME}
            >
              Delete
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
