import { Button, Card, CardContent, CardDescription, CardHeader } from "@acme/ui"

import "@acme/ui/styles/globals.css"

import styleText from "data-text:@acme/ui/styles/globals.css"
import type { MouseEvent } from "react"
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
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [toggleState, setToggleState] = useState(false)
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 })
  const [translatedText, setTranslatedText] = useState("")

  const handleMouseUp = async (event) => {
    const selectedText = window.getSelection().toString()

    if (selectedText.trim() !== "") {
      const { pageX: x, pageY: y } = event
      setIsLoading(true)
      setCordinate({ x, y })
      setToggleState(true)
      const post = await trpc.translation.translate.mutate({
        query: selectedText,
        sourceLanguage: "en",
        targetLanguage: "tr"
      })
      setTranslatedText(post.translatedText)
      setIsLoading(false)
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

  const handleAddLibrary = (event: MouseEvent<HTMLElement>) => {
    alert("test")
    event.preventDefault()
  }

  if (!isLoading && toggleState)
    return (
      <Card
        tabIndex={0}
        className={`w-[300px] absolute p-2 flex-col flex`}
        style={{ top: cordinate.y + 10, left: cordinate.x - 50 }}>
        <CardHeader>
          <CardDescription>
            <Button variant="link" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-volume-2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            </Button>
            <span>{translatedText}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2">
          <Button variant="outline" size="sm" onClick={handleAddLibrary}>
            Save to library
          </Button>
        </CardContent>
      </Card>
    )
}

export default CTranslate
