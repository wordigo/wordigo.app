import { Settings, Volume2, X } from "lucide-react"

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ScrollArea,
  Skeleton,
  Textarea,
} from "@acme/ui"

import "@acme/ui/styles/globals.css"
import { sendToBackground } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"
import { Portal } from "@radix-ui/react-portal"
import styleText from "data-text:@acme/ui/styles/globals.css"
import { ChevronDown } from "lucide-react"
import type { MouseEvent } from "react"
import { useEffect, useState } from "react"
import { supportLanguages } from "~common/supportedLanguages"
import trpc from "~libs/trpc"
import { TRPCProvider } from "~options/providers/trpc-provider"

const storage = new Storage({
  area: "local",
})

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

const CTranslateLayout = () => {
  return (
    <TRPCProvider>
      <div className="deneme">
        <CTranslate />
      </div>
    </TRPCProvider>
  )
}

export const getShadowHostId = () => "el-translate-content"

const CTranslate = () => {
  const [toggleState, setToggleState] = useState(false)
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 })
  const targetElement = document.querySelector<HTMLElement>("#el-translate-content")
  const { mutateAsync: handleTranslate, isLoading, data, reset } = trpc.translation.translate.useMutation({})

  const handleMouseUp = async (event) => {
    const { pageX: x, pageY: y } = event
    const tag = event?.target?.tagName

    const currentElement = event.target as HTMLElement
    const languageSelectorContainer = document.querySelector("#el-language-container")
    const rootTranslatorContainer = document.querySelector<HTMLElement>("#el-translate-container")

    if (
      languageSelectorContainer?.contains(currentElement) ||
      targetElement?.contains(currentElement) ||
      rootTranslatorContainer?.contains(currentElement) ||
      tag === "INPUT" ||
      tag === "VIDEO" ||
      tag === "TEXTAREA"
    )
      return

    const selectedText = window.getSelection().toString()

    if (selectedText.trim() !== "") {
      setCordinate({ x, y })
      setToggleState(true)
      await handleTranslate({ query: selectedText, sourceLanguage: "en", targetLanguage: "tr" })
    } else {
      setToggleState(false)
    }
  }

  useEffect(() => {
    storage.get("translateStatus").then((result) => result && document.addEventListener("mouseup", handleMouseUp))
    storage.watch({
      translateStatus: (c) => {
        if (c.newValue) document.addEventListener("mouseup", handleMouseUp)
        else document.removeEventListener("mouseup", handleMouseUp)
      },
    });
    () => {
      document.removeEventListener("mouseup", handleMouseUp)
      storage.unwatchAll()
    }
  }, [])

  const openSettingsPage = async () => {
    const opeendSettings = await sendToBackground({
      name: "openSettings",
    })
    opeendSettings && setToggleState(false)
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
    setToggleState(false)
    reset()
  }

  if (toggleState)
    return (
      <Portal>
        <Card
          tabIndex={1}
          id="el-translate-container"
          className="w-[400px] absolute flex-col flex"
          style={{ top: cordinate.y + 10, left: cordinate.x - 50 }}
        >
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
              <CTranslate.Loading />
            ) : (
              <Textarea className="!opacity-75 disabled:!cursor-default" disabled rows={2} value={data.translatedText} />
            )}
          </CardContent>
          <CardFooter className="flex justify-between !px-4 !py-2">
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
          </CardFooter>
        </Card>
      </Portal>
    )
}

CTranslate.Loading = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
  )
}

export default CTranslateLayout
