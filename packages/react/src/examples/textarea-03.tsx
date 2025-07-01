import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  const [value, setValue] = useState("")
  const maxLength = 100

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="message-2">您的消息</Label>
      <div className="relative">
        <Textarea
          placeholder="在这里输入您的消息..."
          id="message-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
        />
        <div className="mt-2 text-xs text-muted-foreground text-right">
          {value.length}/{maxLength}
        </div>
      </div>
    </div>
  )
}