import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function Component() {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    
    if (newValue.length < 10) {
      setError("消息至少需要10个字符")
    } else {
      setError("")
    }
  }

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="message-3">您的消息</Label>
      <Textarea
        placeholder="请输入至少10个字符..."
        id="message-3"
        value={value}
        onChange={handleChange}
        className={cn(error && "border-destructive focus-visible:ring-destructive")}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
}