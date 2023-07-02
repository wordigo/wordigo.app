import { Portal } from "@radix-ui/react-portal"
import { ChevronDown } from "lucide-react"
import { useEffect } from "react"

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ScrollArea,
  Skeleton,
  Textarea
} from "~../../packages/ui"
import { supportLanguages } from "~common/supportedLanguages"
import trpc from "~libs/trpc"

import { usePopover } from "../context/popover"

const TranslatePopup = () => {
  const { cordinate } = usePopover({})
  const { mutate: handleTranslate, isLoading, data, reset } = trpc.translation.translate.useMutation({})

  console.log("cordinate", cordinate)

  useEffect(() => {
    handleTranslate()
  }, [handleTranslate])

  return (
    <Portal>
      <Card
        tabIndex={1}
        id="el-translate-container"
        className="w-[400px] absolute flex-col flex"
        style={{ top: cordinate.y + 10, left: cordinate.x - 50 }}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 px-4 py-2">
          <CardTitle className="!text-lg">Wordigo Translator</CardTitle>
          <div className="flex flex-row gap-x-2 items-center justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" size="default" className="rounded-md !h-8 flex justify-between items-center gap-x-2">
                  Türkçe
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent id="el-language-container">
                <ScrollArea className="w-full h-60 rounded-md">
                  {supportLanguages.map((lang) => {
                    return <DropdownMenuItem key={lang[0]}>{lang[1]}</DropdownMenuItem>
                  })}
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="!px-4 !pt-1 !pb-2">
          {isLoading ? (
            <TranslatePopup.Loading />
          ) : (
            <Textarea className="!opacity-75 disabled:!cursor-default" disabled rows={2} value={data?.translatedText} />
          )}
        </CardContent>
        {/* <CardFooter className="flex justify-between !px-4 !py-2">
        <div className="flex gap-x-1">
          <Button onClick={textToSpeech} size="icon" variant="outline">
            <Volume2 className="cursor-pointer" size={16} />
          </Button>
          <Button onClick={handleAddLibrary} disabled variant="default">
            Save to library
          </Button>
        </div>
        <div className="flex gap-x-1">
          <Button onClick={openSettingsPage} size="icon" variant="outline">
            <Settings size={16} />
          </Button>
          <Button onClick={closeTranslationPopup} size="icon" variant="outline">
            <X size={16} />
          </Button>
        </div>
      </CardFooter> */}
      </Card>
    </Portal>
  )
}

TranslatePopup.Loading = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
  )
}

export default TranslatePopup
