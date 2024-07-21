import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs"

interface Props {
  preview?: React.ReactNode
  code?: React.ReactNode
}

const PreviewTabs = ({ preview, code }: Props) => {
  return (
    <Tabs defaultValue="preview" className="my-4 w-full">
      <TabsList className="mb-5 flex h-8 justify-start rounded-none border-b bg-transparent p-0">
        <TabsTrigger
          value="preview"
          className="h-full font-semibold data-[selected]:text-foreground"
        >
          Preview
        </TabsTrigger>
        <TabsTrigger
          value="code"
          className="h-full font-semibold data-[selected]:text-foreground"
        >
          Code
        </TabsTrigger>
        <TabsIndicator className="bottom-[-1px] h-[2px] rounded-none bg-primary" />
      </TabsList>
      <TabsContent value="preview">{preview}</TabsContent>
      <TabsContent value="code">{code}</TabsContent>
    </Tabs>
  )
}

export { PreviewTabs as Tabs }
