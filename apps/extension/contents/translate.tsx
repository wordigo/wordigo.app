import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton
} from "@acme/ui"
import { Settings, Volume2, X } from "lucide-react"

import "@acme/ui/styles/globals.css"

import styleText from "data-text:@acme/ui/styles/globals.css"
import type { MouseEvent, PropsWithChildren } from "react"
import { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"

import { cn } from "~../../packages/ui/lib/utils"
import { supportLanguages } from "~common/supportedLanguages"
import trpc from "~libs/trpc"
import { TRPCProvider } from "~options/providers/trpc-provider"

const storage = new Storage({
  area: "local"
})

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

const CTranslateLayout = () => {
  return (
    <TRPCProvider>
      <CTranslate className="el-translator-contaier" />
    </TRPCProvider>
  )
}

export const getShadowHostId = () => "el-translate-container"

const CTranslate = ({ className }: PropsWithChildren<{ className: string }>) => {
  const [toggleState, setToggleState] = useState(false)
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 })

  const { mutateAsync: handleTranslate, isLoading, data, reset } = trpc.translation.translate.useMutation({})

  const handleMouseUp = async (event) => {
    const currentElement = event.target
    const targetElement = document.querySelector("#el-translate-container")
    const { pageX: x, pageY: y } = event

    if (targetElement && targetElement.contains(currentElement)) {
      return
    }

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
      }
    })
    ;() => {
      document.removeEventListener("mouseup", handleMouseUp)
      storage.unwatchAll()
    }
  }, [])

  const openSettingsPage = async () => {
    console.log("test")

    const opeendSettings = await sendToBackground({
      name: "openSettings"
    })
    console.log(opeendSettings)
  }

  const handleAddLibrary = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
  }

  const textToSpeech = () => {
    const msg = new SpeechSynthesisUtterance(data.translatedText)
    msg.lang = "en_US"
    window.speechSynthesis.speak(msg)
  }

  const closeTranslationPopup = () => {
    setToggleState(false)
    reset()
  }

  if (toggleState)
    return (
      <Card
        tabIndex={50}
        className={cn("w-[400px] absolute flex-col flex", className)}
        style={{ top: cordinate.y + 10, left: cordinate.x - 50 }}>
        <CardHeader className="flex flex-col space-y-0 px-4 py-2">
          <div className="flex flex-row gap-x-2 items-center justify-between">
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue defaultValue="tr" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {supportLanguages.map((lang) => {
                    return (
                      <SelectItem key={lang[0]} value={lang[0]}>
                        {lang[1]}
                      </SelectItem>
                    )
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="flex gap-x-2">
              <Button onClick={openSettingsPage} size="icon" variant="outline">
                <Settings size={16} />
              </Button>
              <Button onClick={closeTranslationPopup} size="icon" variant="outline">
                <X size={16} />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="!px-4 !py-2">{isLoading ? <CTranslate.Loading /> : data.translatedText}</CardContent>
        <CardFooter className="flex gap-x-2 !px-4 !py-2">
          <Button onClick={textToSpeech} size="icon" variant="outline">
            <Volume2 className="cursor-pointer" size={16} />
          </Button>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <Button onClick={handleAddLibrary} disabled variant="default">
              Save to library
            </Button>
          </div>
        </CardFooter>
      </Card>
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
