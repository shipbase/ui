import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="readonly">只读文本</Label>
      <Textarea
        id="readonly"
        readOnly
        value="这是一个只读的文本区域。用户可以看到内容但无法编辑。这通常用于显示信息或确认已提交的数据。"
        className="bg-muted cursor-default focus-visible:ring-0"
      />
    </div>
  )
}