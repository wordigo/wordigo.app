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
      className="ui-absolute ui-z-50"
      initial={{
        top: top - 20,
        left: left - 200,
        width: TRANSLATE_CARD_WIDTH
      }}
      animate={{
        top: top + 20,
        left: left - 200
      }}>
      <Card className="border-1 ui-border-gray-300 ui-shadow-md ui-flex ui-items-center ui-space-x-1 ui-rounded-md ui-p-3 ui-flex-col ui-gap-y-3 bg-background">
        <div className="ui-flex ui-items-center ui-justify-between ui-h-8 ui-w-full">
          <div className="ui-flex ui-items-center ui-gap-x-1">
            <Logo className="ui-h-8 ui-w-8 ui-bg-transparent ui-cursor-pointer" />
            <p className="ui-font-bold ui-text-lg text-gray-950 dark:ui-text-white">{getLocalMessage("translate")}</p>
          </div>
          <div className="ui-flex ui-items-center ui-gap-x-1">
            <div
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "ui-flex ui-gap-x-2 ui-items-center ui-rounded-lg !h-7"
              })}>
              {isLoading || !getSourceLanguageFlag ? <Skeleton className="ui-w-4 ui-h-4" /> : <TranslatePopup.CountryFlag countryCode={getSourceLanguageFlag?.icon} />}
              <ArrowRightLeft className="!text-gray-300" size={12} />
              <TranslatePopup.CountryFlag countryCode={getTargetLanguageFlag?.icon} />
            </div>
            <Button onClick={handleClose} className="!h-8 !w-8 ui-text-gray-500 dark:text-accent-foreground" variant="ghost" size="icon">
              <X size={18} />
            </Button>
          </div>
        </div>
        <div className="ui-w-full ui-gap-y-2 ui-flex ui-flex-col">
          <div className="ui-relative">
            <div className="ui-border-gray-200 dark:!border-gray-700 border-[1.5px] ui-w-full ui-h-32 ui-max-h-32 ui-rounded !opacity-75 disabled:!cursor-default ui-text-sm text-primary ui-p-2">
              {isLoading ? <TranslatePopup.Loader /> : <div className="line-clamp-4 ui-overflow-y-visible">{result?.data?.translatedText}</div>}
            </div>
            <div className="ui-absolute ui-bottom-2 ui-right-3 ui-flex ui-items-center ui-justify-between ui-gap-x-2">
              <TranslatePopup.AudioPlayer message={selectedText} targetLanguage={targetLanguage} />
              <TextCopy text={result?.data?.translatedText} />
            </div>
          </div>
        </div>
        <div className="ui-w-full ui-flex ui-items-center ui-justify-between">
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
    <div className="ui-flex ui-flex-col ui-gap-y-1">
      <Skeleton className="ui-rounded-sm ui-h-4 ui-w-full" />
      <Skeleton className="ui-rounded-sm ui-h-4 ui-w-full" />
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
