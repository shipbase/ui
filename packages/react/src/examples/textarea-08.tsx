import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="custom">自定义样式</Label>
      <Textarea
        placeholder="自定义样式的文本区域..."
        id="custom"
        className="min-h-[100px] border-2 border-dashed border-primary/50 bg-primary/5 placeholder:text-primary/70 focus-visible:border-primary focus-visible:ring-primary/30"
      />
    </div>
  )
}