import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="message-4">您的消息</Label>
      <Textarea
        placeholder="此输入框已禁用"
        id="message-4"
        disabled
        value="这是一个禁用的文本区域"
      />
    </div>
  )
}