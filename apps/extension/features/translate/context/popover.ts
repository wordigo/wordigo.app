import type { Dispatch, SetStateAction } from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

export interface IPopoverOptions {
  isFloating: boolean
  isPopup: boolean
  setFloating: Dispatch<SetStateAction<boolean>>
  setPopup: Dispatch<SetStateAction<boolean>>
  selectedText?: string
  cordinate: {
    x: number
    y: number
  }
}

export const usePopover = ({}) => {
  const translatorShadowContent = document.querySelector("#wordigo-translate-content")
  const [isFloating, setFloating] = useState<boolean>(false)
  const [isPopup, setPopup] = useState<boolean>(false)
  const [selectedText, setSelectedText] = useState<string>()
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 })
  const [translateOption, setTranslateOption] = useStorage({
    key: "translate_option",
    instance: new Storage({
      area: "local"
    })
  })
  const handleMouseUp = (event) => {
    const tag = event?.target?.tagName

    const targetElement = event.target as HTMLElement
    const languageSelectorContainer = document.querySelector("#el-language-container")
    const rootTranslatorContainer = document.querySelector<HTMLElement>("#el-translate-container")

    if (
      languageSelectorContainer?.contains(targetElement) ||
      translatorShadowContent?.contains(targetElement) ||
      rootTranslatorContainer?.contains(targetElement) ||
      tag === "INPUT" ||
      tag === "VIDEO" ||
      tag === "TEXTAREA"
    )
      return

    const selectedText = window.getSelection().toString()?.trim()

    if (selectedText !== "") {
      setSelectedText(selectedText)

      const { pageX: x, pageY: y } = event
      setCordinate({ x, y })
      if (isPopup) setPopup(false)
      setFloating(true)
    } else {
      setFloating(false)
      setPopup(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp)
    ;() => {
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return useMemo(
    () => ({ selectedText, setSelectedText, isFloating, setFloating, isPopup, setPopup, cordinate, setCordinate }),
    [selectedText, setSelectedText, isFloating, setFloating, isPopup, setPopup, cordinate, setCordinate]
  )
}

export const PopoverContext = createContext({} as IPopoverOptions)

export const useContextPopover = () => {
  return useContext(PopoverContext)
}
