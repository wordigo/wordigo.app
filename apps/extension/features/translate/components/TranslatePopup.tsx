import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
  Skeleton,
  Textarea,
  buttonVariants,
  useToast
} from "@wordigo/ui"
import { motion } from "framer-motion"
import { ArrowRightLeft, Copy, Settings, Volume2 } from "lucide-react"
import type { MouseEvent } from "react"
import { useEffect, useMemo } from "react"
import ReactCountryFlag from "react-country-flag"

import { sendToBackground } from "@plasmohq/messaging"

import { AllCountryLanguages } from "~../../packages/common"
import trpc from "~libs/trpc"
import { TRANSLATE_CARD_WIDTH } from "~utils/constants"

import { useContextPopover } from "../context/popover"
import { DictionarySelector } from "./DictionarySelector"

const TranslatePopup = () => {
  const toast = useToast()

  const { cordinate, selectedText, setPopup, targetLanguage } = useContextPopover()
  const { mutate: handleTranslate, isLoading, data, reset } = trpc.translation.translate.useMutation({})

  const getSourceLanguageFlag = useMemo(
    () => AllCountryLanguages.find((lang) => lang.code === data?.sourceLanguage?.toUpperCase()),
    [data?.sourceLanguage]
  )

  const getTargetLanguageFlag = useMemo(
    () => AllCountryLanguages.find((lang) => lang.code === data?.targetLanguage?.toUpperCase()),
    [data?.targetLanguage]
  )

  useEffect(() => {
    handleTranslate({ query: selectedText, sourceLanguage: null, targetLanguage })
  }, [selectedText])

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

  const copyTranslatedText = () => {
    void navigator.clipboard.writeText(data.translatedText as string)
    toast.toast({
      title: "Successful",
      description: "The translated text was successfully copied."
    })
  }

  return (
    <motion.div
      id="el-translate-container"
      className="absolute"
      initial={{
        top: cordinate.y - 5,
        left: cordinate.x - 5,
        width: TRANSLATE_CARD_WIDTH
      }}
      animate={{
        top: cordinate.y,
        left: cordinate.x
      }}>
      <Card tabIndex={1} className="flex-col flex h-60">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 px-4 py-2">
          <CardTitle className="!text-lg">Wordigo Translator</CardTitle>
          {isLoading ? (
            <Skeleton className="h-8 w-20 rounded-lg" />
          ) : (
            <div
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "flex gap-x-2 items-center rounded-lg !h-8"
              })}>
              <ReactCountryFlag
                style={{
                  fontSize: "1em",
                  lineHeight: "1em"
                }}
                svg
                countryCode={getSourceLanguageFlag?.icon}
              />
              <ArrowRightLeft className="!text-gray-300" size={12} />
              <ReactCountryFlag
                style={{
                  fontSize: "1em",
                  lineHeight: "1em"
                }}
                svg
                countryCode={getTargetLanguageFlag?.icon}
              />
            </div>
          )}
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
            <Button onClick={textToSpeech} className="h-9 w-9" variant="outline" size="icon">
              <Volume2 size={18} />
            </Button>
            <Button onClick={copyTranslatedText} className="h-9 w-9" variant="outline" size="icon">
              <Copy size={18} />
            </Button>
            <Button onClick={openSettingsPage} className="h-9 w-9" variant="outline" size="icon">
              <Settings size={18} />
            </Button>
          </div>
          <DictionarySelector />
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

TranslatePopup.Loading = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
  )
}

export default TranslatePopup
