import { Button, Card, CardContent, CardFooter, CardHeader, Separator, Skeleton, Textarea } from "@wordigo/ui"

import { sendToBackground } from "@plasmohq/messaging"

import "../context/popup"

import LanguageSelector from "@wordigo/ui/components/ui/language-selector"
import lightLogo from "data-base64:~assets/logo-light.png"
import { ArrowRightLeft, Settings } from "lucide-react"
import type { ChangeEventHandler } from "react"
import { useEffect, useState } from "react"
import { useMutation } from "react-query"

import CopyText from "~/components/CopyText"
import { TranslateApi } from "~api/translate"
import AuidoPlayer from "~features/translate/components/AudioPlayer"
import Provider from "~providers"
import { usePopoverStore } from "~stores/popover"
import { TARGET_LANGUAGE_STORAGE, TRANSLATE_OPTION_STORAGE } from "~utils/constants"
import { getLocalMessage } from "~utils/locale"
import { localStorage } from "~utils/storage"

const ExtensionPopup = () => {
  const [value, setValue] = useState("")
  const { targetLanguage: defaultTargetLanguage } = usePopoverStore()
  const [targetLanguage, setTargetLanguage] = useState(defaultTargetLanguage)

  const { mutate: handleTranslate, isLoading, data: result, reset } = useMutation(TranslateApi)

  const openSettingsPage = async () => {
    const opeendSettings = await sendToBackground({
      name: "openSettings"
    })
  }

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      handleTranslate({ query: value, sourceLanguage: null, targetLanguage: targetLanguage.toLowerCase() })
    }, 1000)

    return () => clearTimeout(typingTimeout)
  }, [value])

  return (
    <Card tabIndex={1} className="flex-col w-[500px] flex border-0 rounded-none bg-white bg-opacity-40 relative h-56 !shadow-none">
      <CardHeader className="flex flex-col items-center bg-primary-blue-500 h-36 space-y-0 px-4 py-2 gap-y-3 border-0 rounded-bl-2xl rounded-br-2xl">
        <div className="flex flex-row items-center w-full justify-center relative">
          <img src={lightLogo} width={100} height={70} alt="Logo" />
          <div className="flex flex-row gap-x-2 items-center justify-end text-white absolute right-0">
            <Button onClick={openSettingsPage} className="h-8 w-8 hover:bg-gray-300 !bg-opacity-30" variant="ghost" size="icon">
              <Settings size={18} />
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-2 justify-between w-full mt-2">
          <LanguageSelector
            defaultValue={result?.data?.sourceLanguage}
            className="!border-lg w-[200px] !bg-gray-300 !bg-opacity-30 !border-opacity-30 !border-gray-300 !text-white"
            targetLanguageSelect
            providerLanguages
          />
          <ArrowRightLeft className="!text-gray-300" size={20} />
          <LanguageSelector
            defaultValue={targetLanguage}
            onSelect={(lang) => setTargetLanguage(lang)}
            className="!border-lg w-[200px] !bg-gray-300 !bg-opacity-30 !border-opacity-30 !border-gray-300 !text-white"
            providerLanguages
          />
        </div>
      </CardHeader>
      <CardContent className="!p-3 h-full flex flex-col gap-y-2 absolute top-[103px] left-0 right-0 !border-0 !shadow-none">
        <ExtensionPopup.Textarea placeholder={getLocalMessage("translate_placeholder")} value={value} onChange={(event) => setValue(event.target.value)} />
        <ExtensionPopup.Textarea isLoading={isLoading} disabled value={isLoading ? "" : result?.data?.translatedText} onChange={(event) => {}} />
      </CardContent>
    </Card>
  )
}

ExtensionPopup.Textarea = ({
  value,
  onChange,
  isLoading,
  ...attr
}: {
  value: string
  isLoading?: boolean
  onChange: ChangeEventHandler<HTMLTextAreaElement> | undefined
  disabled?: boolean
  placeholder?: string
}) => {
  const { targetLanguage } = usePopoverStore()

  return (
    <div className="relative">
      <Textarea className="bg-white w-full h-full disabled:!cursor-auto disabled:!opacity-100" rows={4} value={value} onChange={onChange} {...attr} />
      {isLoading && (
        <div className="absolute right-10 top-3 left-3 flex flex-col gap-y-2">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </div>
      )}
      <div className="absolute right-3 bottom-3 flex gap-x-2 items-center justify-center">
        <CopyText className="!w-4 !h-4 flex items-center justify-center !text-gray-500" text={value} />
        <AuidoPlayer className="!w-4 !h-4 flex items-center justify-center !text-gray-500" message={value} targetLanguage={targetLanguage} />
      </div>
    </div>
  )
}

ExtensionPopup.Loading = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
  )
}

ExtensionPopup.Layout = () => {
  const [mounted, setMounted] = useState(false)
  const { setTargetLanguage, setTranslateOption } = usePopoverStore()

  localStorage.watch({
    [TRANSLATE_OPTION_STORAGE]: (state) => {
      setTranslateOption(state.newValue)
    },
    [TARGET_LANGUAGE_STORAGE]: (state) => {
      setTargetLanguage(state.newValue)
    }
  })

  const getStorages = async () => {
    const targetLanguage = await localStorage.get(TARGET_LANGUAGE_STORAGE)
    const translateOption = await localStorage.get(TRANSLATE_OPTION_STORAGE)

    setTargetLanguage(targetLanguage)
    setTranslateOption(translateOption)
    setMounted(true)
  }

  useEffect(() => {
    void getStorages()
  }, [])

  return <Provider>{mounted && <ExtensionPopup />}</Provider>
}

export default ExtensionPopup.Layout
