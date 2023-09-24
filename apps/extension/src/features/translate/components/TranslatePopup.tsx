import { AllCountryLanguages } from "@wordigo/common"
import { Button, Card, Skeleton, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, buttonVariants } from "@wordigo/ui"
import { motion } from "framer-motion"
import { ArrowRightLeft, Settings, X } from "lucide-react"
import { useEffect, useMemo } from "react"
import ReactCountryFlag from "react-country-flag"
import { useMutation } from "react-query"

import { sendToBackground } from "@plasmohq/messaging"

import TextCopy from "~/components/CopyText"
import { TranslateApi } from "~api/translate"
import { usePopoverStore } from "~stores/popover"
import { getPopupCordinate } from "~utils"
import { TRANSLATE_CARD_WIDTH } from "~utils/constants"
import { getLocalMessage } from "~utils/locale"

import AuidoPlayer from "./AudioPlayer"
import DictionarySelector from "./DictionarySelector"
import Logo from "./Logo"

const TranslatePopup = () => {
  const { cordinate, selectedText, targetLanguage, setPopup } = usePopoverStore()
  const { mutate: handleTranslate, isLoading, data: result } = useMutation(TranslateApi)
  const { top, left } = getPopupCordinate(cordinate)

  const getSourceLanguageFlag = useMemo(() => AllCountryLanguages.find((lang) => lang.code === (result?.data?.sourceLanguage || "").toUpperCase()), [result?.data?.sourceLanguage])

  const getTargetLanguageFlag = useMemo(() => AllCountryLanguages.find((lang) => lang.code === targetLanguage.toUpperCase()), [result?.data?.targetLanguage])

  useEffect(() => {
    handleTranslate({
      query: selectedText,
      sourceLanguage: "auto",
      targetLanguage: targetLanguage.toLowerCase()
    })
  }, [selectedText])

  const handleClose = () => {
    setPopup(false)
  }

  return (
    <motion.div
      tabIndex={50}
      id="el-translate-container"
      className="absolute z-50"
      initial={{
        top: top - 20,
        left: left - 200,
        width: TRANSLATE_CARD_WIDTH
      }}
      animate={{
        top: top + 20,
        left: left - 200
      }}>
      <Card className="border-1 border-gray-300 shadow-md flex items-center space-x-1 rounded-md p-3 flex-col gap-y-3 bg-background">
        <div className="flex items-center justify-between h-8 w-full">
          <div className="flex items-center gap-x-1">
            <Logo className="h-8 w-8 bg-transparent cursor-pointer" />
            <p className="font-bold text-lg text-gray-950 dark:text-white">{getLocalMessage("translate")}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <div
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "flex gap-x-2 items-center rounded-lg !h-7"
              })}>
              {isLoading || !getSourceLanguageFlag ? <Skeleton className="w-4 h-4" /> : <TranslatePopup.CountryFlag countryCode={getSourceLanguageFlag?.icon} />}
              <ArrowRightLeft className="!text-gray-300" size={12} />
              <TranslatePopup.CountryFlag countryCode={getTargetLanguageFlag?.icon} />
            </div>
            <Button onClick={handleClose} className="!h-8 !w-8 text-gray-500 dark:text-accent-foreground" variant="ghost" size="icon">
              <X size={18} />
            </Button>
          </div>
        </div>
        <div className="w-full gap-y-2 flex flex-col">
          <div className="relative">
            <div className="border-gray-200 dark:!border-gray-700 border-[1.5px] w-full h-32 max-h-32 rounded !opacity-75 disabled:!cursor-default text-sm text-primary p-2">
              {isLoading ? <TranslatePopup.Loader /> : <div className="line-clamp-4 overflow-y-visible">{result?.data?.translatedText}</div>}
            </div>
            <div className="absolute bottom-2 right-3 flex items-center justify-between gap-x-2">
              <TranslatePopup.AudioPlayer message={selectedText} targetLanguage={targetLanguage} />
              <TextCopy text={result?.data?.translatedText} />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <TranslatePopup.SettingsAction />
          <DictionarySelector translatedText={result?.data?.translatedText} sourceLangauge={result?.data?.sourceLanguage} />
        </div>
      </Card>
    </motion.div>
  )
}

TranslatePopup.AudioPlayer = AuidoPlayer

TranslatePopup.SettingsAction = () => {
  const { setPopup } = usePopoverStore()

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
          <Button onClick={openSettingsPage} className="!h-8 !w-8 text-accent-foreground dark:text-accent-foreground" variant="outline" size="icon">
            <Settings size={17} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="!py-0.5">
          <p>{getLocalMessage("open_settings")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

TranslatePopup.Loader = () => {
  return (
    <div className="flex flex-col gap-y-1">
      <Skeleton className="rounded-sm h-4 w-full" />
      <Skeleton className="rounded-sm h-4 w-full" />
    </div>
  )
}

TranslatePopup.CountryFlag = ({ countryCode }: { countryCode: string }) => {
  return (
    <ReactCountryFlag
      style={{
        fontSize: "1em",
        lineHeight: "1em"
      }}
      svg
      countryCode={countryCode || "DT"}
    />
  )
}

export default TranslatePopup
