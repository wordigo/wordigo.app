import { AllCountryLanguages } from "@wordigo/common"
import { Button, Card, CardContent, CardFooter, CardHeader, Separator, Skeleton, Textarea, useToast } from "@wordigo/ui"
import type { MouseEvent } from "react"
import { useMemo } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import trpc from "~libs/trpc"

import "../context/popup"

import LanguageSelector from "@wordigo/ui/components/ui/language-selector"
import lightLogo from "data-base64:~assets/logo-light.png"
import { ArrowRightLeft, BookMarked, Settings } from "lucide-react"

const TranslatePopup = () => {
  const toast = useToast()

  // const { mutate: handleTranslate, isLoading, data, reset } = trpc.translation.translate.useMutation({})

  // const getSourceLanguageFlag = useMemo(
  //   () => AllCountryLanguages.find((lang) => lang.code === data?.sourceLanguage?.toUpperCase()),
  //   [data?.sourceLanguage]
  // )

  // const getTargetLanguageFlag = useMemo(
  //   () => AllCountryLanguages.find((lang) => lang.code === data?.targetLanguage?.toUpperCase()),
  //   [data?.targetLanguage]
  // )

  // useEffect(() => {
  //   // handleTranslate({ query: selectedText, sourceLanguage: null, targetLanguage })
  // }, [selectedText])

  const openSettingsPage = async () => {
    const opeendSettings = await sendToBackground({
      name: "openSettings"
    })
  }

  const handleAddLibrary = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
  }

  const textToSpeech = () => {
    const msg = new SpeechSynthesisUtterance("data.translatedText" as string)
    msg.lang = "en_US"
    window.speechSynthesis.speak(msg)
  }

  const copyTranslatedText = () => {
    void navigator.clipboard.writeText("data.translatedText" as string)
    toast.toast({
      title: "Successful",
      description: "The translated text was successfully copied."
    })
  }

  return (
    <Card tabIndex={1} className="flex-col w-[500px] flex border-0 rounded-none bg-gray-300 bg-opacity-40 relative h-56">
      <CardHeader className="flex flex-col items-center bg-primary-blue-500 h-36  space-y-0 px-4 py-2 gap-y-3 border-0 rounded-bl-2xl rounded-br-2xl">
        <div className="flex flex-row items-center w-full justify-center relative">
          <img src={lightLogo} width={100} height={70} alt="Logo" />
          <div className="flex flex-row gap-x-2 items-center justify-end text-white absolute right-0">
            <Button onClick={copyTranslatedText} className="h-8 w-8 hover:bg-gray-300 !bg-opacity-30" variant="ghost" size="icon">
              <BookMarked size={18} />
            </Button>
            <Button onClick={openSettingsPage} className="h-8 w-8 hover:bg-gray-300 !bg-opacity-30" variant="ghost" size="icon">
              <Settings size={18} />
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-2 justify-between w-full mt-2">
          <LanguageSelector
            className="!border-lg w-[200px] !bg-gray-300 !bg-opacity-30 !border-opacity-30 !border-gray-300 !text-white"
            targetLanguageSelect
            providerLanguages
          />
          <ArrowRightLeft className="!text-gray-300" size={20} />
          <LanguageSelector
            defaultValue="EN"
            className="!border-lg w-[200px] !bg-gray-300 !bg-opacity-30 !border-opacity-30 !border-gray-300 !text-white"
            providerLanguages
          />
        </div>
      </CardHeader>
      <CardContent className="!p-3 h-full flex flex-col gap-y-2 absolute top-[103px] left-0 right-0">
        <Textarea className="bg-white" rows={4} value={"data?.translatedText"} />
        <Textarea className="bg-white" rows={4} value={"data?.translatedText"} />
      </CardContent>
      <Separator />
      <CardFooter className="!p-3 flex items-center justify-between"></CardFooter>
    </Card>
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
