import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

interface Props {
  manual?: React.ReactNode
  cli?: React.ReactNode
}

export const ComponentInstall = ({ manual, cli }: Props) => {
  return (
    <Tabs defaultValue="manual" className="relative mt-6 w-full">
      <TabsList className="mb-5 flex h-8 justify-start rounded-none border-b bg-transparent p-0">
        <TabsTrigger
          value="manual"
          className="h-full font-semibold data-[selected]:text-foreground"
        >
          Manual
        </TabsTrigger>
        <TabsTrigger
          value="cli"
          className="h-full font-semibold data-[selected]:text-foreground"
        >
          CLI
        </TabsTrigger>
        <TabsIndicator className="bottom-[-1px] h-[2px] rounded-none bg-primary" />
      </TabsList>
      <TabsContent value="manual">{manual}</TabsContent>
      <TabsContent value="cli">{cli}</TabsContent>
    </Tabs>
  )
}
