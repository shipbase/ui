import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="grid w-full max-w-sm items-center gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="small">小尺寸</Label>
        <Textarea
          placeholder="小尺寸文本区域"
          id="small"
          className="min-h-[60px] text-xs"
        />
      </div>
      
      <div className="grid gap-1.5">
        <Label htmlFor="medium">中等尺寸</Label>
        <Textarea
          placeholder="中等尺寸文本区域"
          id="medium"
          className="min-h-[80px]"
        />
      </div>
      
      <div className="grid gap-1.5">
        <Label htmlFor="large">大尺寸</Label>
        <Textarea
          placeholder="大尺寸文本区域"
          id="large"
          className="min-h-[120px] text-base"
        />
      </div>
    </div>
  )
}