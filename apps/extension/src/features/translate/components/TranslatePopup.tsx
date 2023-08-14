import { AllCountryLanguages } from "@wordigo/common"
import {
  Button,
  Card,
  Input,
  Skeleton,
  Textarea,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  buttonVariants
} from "@wordigo/ui"
import { motion } from "framer-motion"
import { ArrowRightLeft, Copy, Settings, X } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import ReactCountryFlag from "react-country-flag"
import { useMutation } from "react-query"

import { sendToBackground } from "@plasmohq/messaging"

import { TranslateApi } from "~api/translate"
import { getPopupCordinate } from "~utils"
import { TRANSLATE_CARD_WIDTH } from "~utils/constants"

import { useContextPopover } from "../context/popover"
import AuidoPlayer from "./AudioPlayer"
import DictionarySelector from "./DictionarySelector"
import Logo from "./Logo"

const TranslatePopup = () => {
  const { cordinate, selectedText, targetLanguage } = useContextPopover()
  const { mutate: handleTranslate, isLoading, data } = useMutation(TranslateApi)
  const { top, left } = getPopupCordinate(cordinate)

  const getSourceLanguageFlag = useMemo(
    () => AllCountryLanguages.find((lang) => lang.code === (data?.sourceLanguage || "").toUpperCase()),
    [data?.sourceLanguage]
  )

  const getTargetLanguageFlag = useMemo(
    () => AllCountryLanguages.find((lang) => lang.code === (data?.targetLanguage || targetLanguage)?.toUpperCase()),
    [data?.targetLanguage]
  )

  useEffect(() => {
    handleTranslate({ query: selectedText, sourceLanguage: null, targetLanguage })
  }, [selectedText])

  return (
    <motion.div
      tabIndex={50}
      id="el-translate-container"
      className="absolute z-50"
      initial={{
        top: top + 30,
        left: left - 150,
        width: TRANSLATE_CARD_WIDTH
      }}
      animate={{
        top: top + 10,
        left: left - 200
      }}>
      <head>
        <meta name="referrer" content="no-referrer" />
      </head>
      <Toaster />
      <Card className="border-1 border-gray-300 shadow-md flex items-center space-x-1 rounded-md p-3 flex-col gap-y-3 bg-background">
        <div className="flex items-center justify-between h-8 w-full">
          <div className="flex items-center gap-x-1">
            <Logo className="h-8 w-8 bg-transparent cursor-pointer" />
            <p className="font-bold text-lg text-gray-950 dark:text-white">Translate</p>
          </div>
          <div className="flex items-center gap-x-1">
            <div
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "flex gap-x-2 items-center rounded-lg !h-7"
              })}>
              {isLoading || !getSourceLanguageFlag ? (
                <Skeleton className="w-4 h-4" />
              ) : (
                <ReactCountryFlag
                  style={{
                    fontSize: "1em",
                    lineHeight: "1em"
                  }}
                  svg
                  countryCode={getSourceLanguageFlag?.icon || "DT"}
                />
              )}
              <ArrowRightLeft className="!text-gray-300" size={12} />
              <ReactCountryFlag
                style={{
                  fontSize: "1em",
                  lineHeight: "1em"
                }}
                svg
                countryCode={getTargetLanguageFlag?.icon || "DT"}
              />
            </div>
            <Button className="!h-8 !w-8 text-gray-500" variant="ghost" size="icon">
              <X size={18} />
            </Button>
          </div>
        </div>
        <div className="w-full gap-y-2 flex flex-col">
          <Input
            value={selectedText}
            disabled
            className="rounded border-gray-300 border-[1.5px] !opacity-75 disabled:!cursor-default"
          />
          <div>
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm text-gray-950 font-medium">Sonuç</p>
              <div className="flex items-center gap-x-1">
                <TranslatePopup.CopyTranslatedText text={data?.translatedText} />
                <TranslatePopup.AudioPlayer text={selectedText} translatedText={data?.translatedText} />
              </div>
            </div>
            <Textarea
              disabled
              value={data?.translatedText}
              className="border-gray-200 border-[1.5px] rounded !opacity-75 disabled:!cursor-default"
            />
          </div>
          {/* {isLoading ? (
            <div className="flex flex-col gap-y-1">
              <Skeleton className="rounded h-5 w-full" />
              <Skeleton className="rounded h-5 w-full" />
              <Skeleton className="rounded h-5 w-full" />
            </div>
          ) : ( */}
          {/* )} */}
        </div>
        {/* <Separator /> */}
        <div className="w-full flex items-center justify-between">
          <TranslatePopup.SettingsAction />
          <DictionarySelector translatedText={data?.translatedText} sourceLangauge={data?.sourceLanguage} />
        </div>
      </Card>
    </motion.div>
  )
}

TranslatePopup.AudioPlayer = AuidoPlayer

TranslatePopup.CopyTranslatedText = ({ text }: { text: string }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false)

  const copyTranslatedText = () => {
    void navigator.clipboard.writeText(text)
    setCopiedStatus(true)
    setTimeout(() => setCopiedStatus(false), 700)
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip open={visible}>
        <TooltipTrigger
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          onClick={copyTranslatedText}
          asChild>
          <Button className="!w-7 !h-7 text-gray-500 dark:text-gray-200" variant="ghost" size="icon">
            <Copy size={18} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="!py-0.5">
          <p>{copiedStatus ? "Translation copied" : "Copy to clipboard"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

TranslatePopup.SettingsAction = () => {
  const { setPopup } = useContextPopover()

  const openSettingsPage = async () => {
    const opeendSettings = await sendToBackground({
      name: "openSettings"
    })
    opeendSettings && setPopup(false)
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={openSettingsPage} className="!h-8 !w-8 text-gray-500 dark:text-gray-200" variant="outline" size="icon">
            <Settings size={18} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="!py-0.5">
          <p>Open Settings page</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TranslatePopup
