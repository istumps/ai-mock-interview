import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Answer</Label>
      <Textarea placeholder="Type your answer here." id="message" />
    </div>
  )
}
