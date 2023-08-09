import { AllCountryLanguages } from "@wordigo/common"
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
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  buttonVariants
} from "@wordigo/ui"
import { motion } from "framer-motion"
import { ArrowRightLeft, Copy, Settings } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import ReactCountryFlag from "react-country-flag"
import { useMutation } from "react-query"

import { sendToBackground } from "@plasmohq/messaging"

import { TranslateApi } from "~api/translate"
import { TRANSLATE_CARD_WIDTH } from "~utils/constants"

import { useContextPopover } from "../context/popover"
import AuidoPlayer from "./AudioPlayer"
import DictionarySelector from "./DictionarySelector"

const TranslatePopup = () => {
  const { cordinate, selectedText, setPopup, targetLanguage } = useContextPopover()
  const { mutate: handleTranslate, isLoading, data } = useMutation(TranslateApi)

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
        top: cordinate.y - 5,
        left: cordinate.x - 5,
        width: TRANSLATE_CARD_WIDTH
      }}
      animate={{
        top: cordinate.y,
        left: cordinate.x
      }}>
      <head>
        <meta name="referrer" content="no-referrer" />
      </head>
      <Toaster />
      <Card tabIndex={1} className="flex-col flex !h-60">
        <CardHeader className="flex flex-row items-center justify-between px-4 !py-[8px]">
          <CardTitle className="!text-lg dark:text-white !text-primary">Wordigo Translator</CardTitle>
          <div
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className: "flex gap-x-2 items-center rounded-lg !h-8"
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
        </CardHeader>
        <Separator />
        <CardContent className="!px-5 !py-3 !h-full">
          {isLoading ? (
            <div className="flex flex-col gap-y-1">
              <Skeleton className="rounded h-5 w-full" />
              <Skeleton className="rounded h-5 w-full" />
              <Skeleton className="rounded h-5 w-full" />
            </div>
          ) : (
            <Textarea
              className="!border-0 !p-0 !opacity-75 disabled:!cursor-default !h-full"
              disabled
              value={data?.translatedText}
            />
          )}
        </CardContent>
        <Separator />
        <CardFooter className="!p-3 flex items-center justify-between relative">
          <div className="flex flex-row gap-x-2 items-center justify-end">
            <TranslatePopup.SettingsAction />
            <TranslatePopup.CopyTranslatedText text={data?.translatedText} />
            <TranslatePopup.AudioPlayer translatedText={data?.translatedText} />
          </div>
          <DictionarySelector translatedText={data?.translatedText} sourceLangauge={data?.sourceLanguage} />
        </CardFooter>
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
          <Button className="!h-9 !w-9" variant="outline" size="icon">
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
          <Button onClick={openSettingsPage} className="!h-9 !w-9" variant="outline" size="icon">
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
