import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="help">反馈意见</Label>
      <Textarea
        placeholder="请告诉我们您的想法..."
        id="help"
        className="min-h-[100px]"
      />
      <p className="text-sm text-muted-foreground">
        您的反馈将帮助我们改进产品。请详细描述您遇到的问题或建议。
      </p>
    </div>
  )
}