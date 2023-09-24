import { WORDIGO_JWT_TOKEN_COOKIE } from "@wordigo/common"
import styleText from "data-text:~/styles/globals.css"
import type { PlasmoCSConfig } from "plasmo"
import { Fragment, useEffect, useState } from "react"

import "~/styles/globals.css"

import FloatingButton from "~features/translate/components/FlaotingButton"
import TranslatePopup from "~features/translate/components/TranslatePopup"
import Provider from "~providers"
import { useAuthStore } from "~stores/auth"
import { useDictionaryStore } from "~stores/dictionary"
import { usePopoverStore } from "~stores/popover"
import { TARGET_LANGUAGE_STORAGE, TRANSLATE_OPTION_STORAGE, translateOptionEnums } from "~utils/constants"
import { localStorage } from "~utils/storage"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

export const getShadowHostId = () => "wordigo-translate-content"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

const Translate = () => {
  const translatorShadowContent = document.querySelector("#wordigo-translate-content")

  const { setCordinate, isFloating, isPopup, setFloating, setPopup, setSelectedText, translateOption } = usePopoverStore()

  const handleMouseUp = (event) => {
    const tag = event?.target?.tagName

    const targetElement = event.target as HTMLElement
    const popupContainer = document.querySelector("#el-popup-container")
    const rootTranslatorContainer = document.querySelector<HTMLElement>("#el-translate-container")

    if (
      popupContainer?.contains(targetElement) ||
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

      if (translateOption === translateOptionEnums.translate_button) {
        setFloating(true)
        setPopup(false)
      } else {
        setPopup(true)
      }
    } else {
      setFloating(false)
      setPopup(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <Fragment>
      <head>
        <meta name="referrer" content="no-referrer" />
      </head>
      {isFloating && <FloatingButton />}
      {isPopup && <TranslatePopup />}
    </Fragment>
  )
}

Translate.Layout = () => {
  const { getDictionaries } = useDictionaryStore()
  const [mounted, setMounted] = useState(false)
  const { setTargetLanguage, setTranslateOption } = usePopoverStore()
  const { setToken } = useAuthStore()

  localStorage.watch({
    [WORDIGO_JWT_TOKEN_COOKIE]: (state) => {
      setToken(state.newValue)
    },
    [TRANSLATE_OPTION_STORAGE]: (state) => {
      setTranslateOption(state.newValue)
    },
    [TARGET_LANGUAGE_STORAGE]: (state) => {
      setTargetLanguage(state.newValue)
    }
  })

  const getStorages = async () => {
    const tokenStorage = await localStorage.get(WORDIGO_JWT_TOKEN_COOKIE)
    const targetLanguage = await localStorage.get(TARGET_LANGUAGE_STORAGE)
    const translateOption = await localStorage.get(TRANSLATE_OPTION_STORAGE)

    setToken(tokenStorage)
    setTargetLanguage(targetLanguage)
    setTranslateOption(translateOption)
    setMounted(true)

    if (tokenStorage) void getDictionaries()
  }

  useEffect(() => {
    void getStorages()
  }, [])

  return <Provider>{mounted && <Translate />}</Provider>
}

export default Translate.Layout
