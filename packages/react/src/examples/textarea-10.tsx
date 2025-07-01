import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="grid w-full max-w-sm gap-2">
      <div className="grid gap-1.5">
        <Label htmlFor="form-message">留言</Label>
        <Textarea
          placeholder="请输入您的留言..."
          id="form-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="min-h-[100px]"
        />
      </div>
      <Button type="submit" disabled={!message.trim() || submitted}>
        {submitted ? "已提交!" : "提交留言"}
      </Button>
    </form>
  )
}