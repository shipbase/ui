import {
  TagsInput,
  TagsInputContext,
  TagsInputControl,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputLabel,
} from "@/components/ui/tags-input"

export default function TagsInputDemo() {
  return (
    <TagsInput className="w-full *:not-first:mt-2">
      <TagsInputLabel>TagsInput</TagsInputLabel>
      <TagsInputControl>
        <TagsInputContext>
          {(context) =>
            context.value.map((value, index) => (
              <TagsInputItem key={value} index={index} value={value}>
                <TagsInputItemPreview>
                  <TagsInputItemText>{value}</TagsInputItemText>
                  <TagsInputItemDeleteTrigger />
                </TagsInputItemPreview>
              </TagsInputItem>
            ))
          }
        </TagsInputContext>
        <TagsInputInput />
      </TagsInputControl>
    </TagsInput>
  )
}
