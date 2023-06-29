import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Skeleton
} from "@acme/ui"

import "@acme/ui/styles/globals.css"

import styleText from "data-text:@acme/ui/styles/globals.css"
import { useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"

import trpc from "~libs/trpc"

const storage = new Storage({
  area: "local"
})

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

const CTranslate = () => {
  const [toggleState, setToggleState] = useState(false)
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 })
  const [translatedText, setTranslatedText] = useState("")

  const handleMouseUp = async (event) => {
    const selectedText = window.getSelection().toString()

    if (selectedText.trim() !== "") {
      const { pageX: x, pageY: y } = event
      setTranslatedText("")
      setCordinate({ x, y })
      setToggleState(true)
      const post = await trpc.translation.translate.mutate({
        query: selectedText,
        sourceLanguage: "en",
        targetLanguage: "tr"
      })
      setTranslatedText(post.translatedText)
    } else {
      setToggleState(false)
    }
  }

  useEffect(() => {
    chrome.runtime.onMessage.addListener(
      async (request, sender, sendResponse) => {
        if (request.action === "translate_popup") {
          console.log(request.text)
        }
      }
    )
    storage.get("translateStatus").then((result) => {
      console.log("değişti")

      if (result) document.addEventListener("mouseup", handleMouseUp)
    })
    storage.watch({
      translateStatus: (c) => {
        console.log(c)

        if (c.newValue) {
          console.log("1 kez çalıştı")

          document.addEventListener("mouseup", handleMouseUp)
        } else {
          console.log("çalıştı")
          document.removeEventListener("mouseup", handleMouseUp)
        }
      }
    })
    ;() => {
      chrome.runtime.onMessage.removeListener(null)
      document.removeEventListener("mouseup", handleMouseUp)
      storage.unwatchAll()
    }
  }, [])

  return (
    <Card
      className={`w-[380px] absolute p-2 flex-col ${
        toggleState ? "flex" : "hidden"
      }`}
      style={{ top: cordinate.y + 10, left: cordinate.x }}>
      <CardHeader>
        <CardTitle>Translate</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {!translatedText ? (
          <div className="flex flex-col space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[250px]" />
          </div>
        ) : (
          <span>{translatedText}</span>
        )}
        <Button>Save to library</Button>
      </CardContent>
    </Card>
  )
}

export default CTranslate
