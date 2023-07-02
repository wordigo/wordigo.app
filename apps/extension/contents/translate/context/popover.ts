import type { Dispatch, SetStateAction } from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

export interface IPopoverOptions {
  isFloating: boolean
  isPopup: boolean
  setFloating: Dispatch<SetStateAction<boolean>>
  setPopup: Dispatch<SetStateAction<boolean>>
  selectedTex?: string
  cordinate: {
    x: number
    y: number
  }
}

export const usePopover = ({ }) => {
  const rootTranslatorContainer = document.querySelector("#wordigo-translate-content")
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
  const handleToggle = () => { }

  const handleMouseUp = (event: MouseEvent) => {
    const targetElement = event.target as HTMLElement

    if (rootTranslatorContainer?.contains(targetElement)) {
      return
    }

    const selectedText = window.getSelection().toString()?.trim()
    setSelectedText(selectedText)

    const { pageX: x, pageY: y } = event
    setCordinate({ x, y })
    console.log("true ssetlendi")

    setFloating(true)
    console.log("test")
    console.log(rootTranslatorContainer)
  }

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp)
      ; () => {
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
