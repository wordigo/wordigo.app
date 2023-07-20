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
  buttonVariants,
  useToast
} from "@wordigo/ui"
import { motion } from "framer-motion"
import { ArrowRightLeft, Copy, Settings, Volume2 } from "lucide-react"
import { useEffect, useMemo } from "react"
import ReactCountryFlag from "react-country-flag"

import { sendToBackground } from "@plasmohq/messaging"
import { useStorage } from "@plasmohq/storage/hook"

import DictionarySelector from "~features/translate/components/DictionarySelector"
import trpc from "~libs/trpc"
import { TRANSLATE_CARD_WIDTH } from "~utils/constants"

import { useContextPopover } from "../context/popover"

const TranslatePopup = () => {
  const toast = useToast()
  const [theme] = useStorage("theme")

  console.log(theme)

  const { cordinate, selectedText, setPopup, targetLanguage } = useContextPopover()
  const { mutate: handleTranslate, isLoading, data } = trpc.translation.translate.useMutation({})

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

  const openSettingsPage = async () => {
    const opeendSettings = await sendToBackground({
      name: "openSettings"
    })
    opeendSettings && setPopup(false)
  }

  const textToSpeech = () => {
    const speech = new SpeechSynthesisUtterance(data.translatedText as string)
    // Initialize the speech synthesis
    speech.rate = 1
    speech.pitch = 1
    speech.volume = 1
    speech.voice = speechSynthesis.getVoices()[0]
    speech.lang = "en_US"
    window.speechSynthesis.speak(speech)
  }

  const copyTranslatedText = () => {
    void navigator.clipboard.writeText(data.translatedText as string)
    toast.toast({
      variant: "primary",
      title: "Successful",
      description: "The translated text was successfully copied."
    })
  }

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
      <Toaster />
      <Card tabIndex={1} className="flex-col flex h-60">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 px-4 py-2">
          <CardTitle className="!text-lg dark:text-white text-primary">Wordigo Translator</CardTitle>
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
        <CardContent className="px-5 py-3 h-full">
          {isLoading ? (
            <TranslatePopup.Loading />
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
            <Button disabled={isLoading} onClick={textToSpeech} className="h-9 w-9" variant="outline" size="icon">
              <Volume2 size={18} />
            </Button>
            <Button disabled={isLoading} onClick={copyTranslatedText} className="h-9 w-9" variant="outline" size="icon">
              <Copy size={18} />
            </Button>
            <Button onClick={openSettingsPage} className="h-9 w-9" variant="outline" size="icon">
              <Settings size={18} />
            </Button>
          </div>
          <DictionarySelector translatedText={data?.translatedText as string} sourceLangauge={data?.sourceLanguage as string} />
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
