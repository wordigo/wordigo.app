import styleText from "data-text:~styles/globals.css"
import { useEffect, useState } from "react"

import trpc from "~libs/trpc"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

const PlasmoOverlay = () => {
  const [toggleState, setToggleState] = useState(false)
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 })
  const [translatedText, setTranslatedText] = useState("")

  const handleMouseUp = async (event) => {
    const selectedText = window.getSelection().toString()

    if (selectedText !== "") {
      const { pageX: x, pageY: y } = event

      setCordinate({ x, y })
      setToggleState((prevState) => !prevState)
      setTranslatedText("")
      const post = await trpc.translation.translate.mutate({
        query: selectedText,
        sourceLanguage: "en",
        targetLanguage: "tr"
      })
      setTranslatedText(post.translatedText)
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
    ;() => {
      chrome.runtime.onMessage.removeListener(() => {})
    }
  }, [])

  document.addEventListener("mouseup", handleMouseUp)

  return (
    <div
      className={`absolute bg-red-500 p-2`}
      style={{ top: cordinate.y + 10, left: cordinate.x }}>
      {!translatedText ? <div>loading</div> : <span>{translatedText}</span>}
    </div>
  )
}

export default PlasmoOverlay
