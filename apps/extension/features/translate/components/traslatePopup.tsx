import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  Textarea
} from "@wordigo/ui"
import { motion } from "framer-motion"
import { ArrowRightLeft, Copy, Settings, Volume2 } from "lucide-react"
import type { MouseEvent } from "react"
import { useEffect } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import trpc from "~libs/trpc"
import { TRANSLATE_CARD_WIDTH } from "~utils/constants"

import { useContextPopover } from "../context/popover"
import LanguageSelector from "./LanguageSelector"

const TranslatePopup = () => {
  const { cordinate, selectedText, setPopup } = useContextPopover()
  const { mutate: handleTranslate, isLoading, data, reset } = trpc.translation.translate.useMutation({})

  useEffect(() => {
    handleTranslate({ query: selectedText, sourceLanguage: "en", targetLanguage: "tr" })
  }, [handleTranslate, selectedText])

  const openSettingsPage = async () => {
    const opeendSettings = await sendToBackground({
      name: "openSettings"
    })
    opeendSettings && setPopup(false)
  }

  const handleAddLibrary = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
  }

  const textToSpeech = () => {
    const msg = new SpeechSynthesisUtterance(data.translatedText as string)
    msg.lang = "en_US"
    window.speechSynthesis.speak(msg)
  }

  const closeTranslationPopup = () => {
    setPopup(false)
    reset()
  }

  return (
    <motion.div
      id="el-translate-container"
      className="absolute"
      initial={{
        top: cordinate.y - 5,
        left: cordinate.x,
        width: TRANSLATE_CARD_WIDTH
      }}
      animate={{
        top: cordinate.y,
        left: cordinate.x
      }}>
      <Card tabIndex={1} className="flex-col flex w-[600px] h-60">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 px-4 py-2">
          <CardTitle className="!text-lg">Wordigo Translator</CardTitle>
          <div className="flex gap-x-2 items-center">
            <LanguageSelector defaultValue={"en"} onSelect={() => {}} className="w-[150px] !h-9" />
            <ArrowRightLeft size={14} />
            <LanguageSelector defaultValue={"tr"} onSelect={() => {}} className="w-[150px] !h-9" />
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="!p-3 h-full">
          {isLoading ? (
            <TranslatePopup.Loading />
          ) : (
            <Textarea className="!border-0 !opacity-75 disabled:!cursor-default" disabled rows={2} value={data?.translatedText} />
          )}
        </CardContent>
        <Separator />
        <CardFooter className="!p-3 flex items-center justify-between">
          <div className="flex flex-row gap-x-2 items-center justify-end">
            <Button className="h-9 w-9" variant="outline" size="icon">
              <Volume2 size={18} />
            </Button>
            <Button className="h-9 w-9" variant="outline" size="icon">
              <Copy size={18} />
            </Button>
            <Button className="h-9 w-9" variant="outline" size="icon">
              <Settings size={18} />
            </Button>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Dictionary" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="default">Default Dictionary</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="software">Software</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
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
