import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="message">您的消息</Label>
      <Textarea placeholder="在这里输入您的消息..." id="message" />
    </div>
  )
}