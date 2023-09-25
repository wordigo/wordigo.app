import { Button, TooltipProvider, type ButtonProps } from "@wordigo/ui"
import FloatingButton from "@wordigo/ui/components/extension/floating-button"
import { motion } from "framer-motion"
import { BookMarked, Languages, MoreVertical, Volume2 } from "lucide-react"
import type { PropsWithChildren } from "react"
import { useRef } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import { usePopoverStore } from "~stores/popover"
import { getPopupCordinate } from "~utils"
import { getLocalMessage } from "~utils/locale"

import Logo from "./Logo"

const Floating = () => {
  const playerRef = useRef<HTMLAudioElement>()
  const { cordinate, setFloating, setPopup, selectedText, targetLanguage } = usePopoverStore()
  const { top, left } = getPopupCordinate(cordinate)

  const handleTogglePopup = () => {
    setFloating(false)
    setPopup(true)
  }

  const textToSpeech = () => {
    void playerRef?.current?.play()
  }

  const openSettingsPage = async () => {
    const opeendSettings = await sendToBackground({
      name: "openSettings"
    })
    opeendSettings && setPopup(false)
  }

  const computedUrl = `https://translate.googleapis.com/translate_tts?client=gtx&tl=${targetLanguage}&q=${encodeURIComponent(selectedText)}`

  return (
    <TooltipProvider>
      <audio src={computedUrl} ref={playerRef} />
      <motion.div
        tabIndex={500}
        id="el-popup-container"
        className="ui-absolute ui-cursor-pointer ui-z-50"
        initial={{
          top: top - 20,
          left: left - 135
        }}
        animate={{
          top: top + 10,
          left: left - 135
        }}>
        <div className="ui-border-gray-200 ui-shadow-md ui-flex ui-items-center ui-space-x-1 ui-rounded !font-thin ui-border bg-background dark:bg-gray-950">
          <Logo className="ui-h-7 ui-w-7 ui-bg-transparent ui-cursor-pointer hover:ui-bg-gray-200 dark:hover:ui-bg-gray-600 ui-rounded-none ui-select-none" />
          <div className="ui-flex ui-space-x-1.5 ui-items-center">
            <FloatingButton onClick={handleTogglePopup}>
              <Languages size={14} />
              {getLocalMessage("translate")}
            </FloatingButton>
            <FloatingButton onClick={textToSpeech}>
              <Volume2 size={15} />
              {getLocalMessage("voice")}
            </FloatingButton>
            <FloatingButton>
              <BookMarked size={14} />
              {getLocalMessage("add")}
            </FloatingButton>
            <div className="ui-h-7 ui-w-1 ui-border-r ui-border-gray-200 dark:ui-border-gray-500"></div>
          </div>
          <Button onClick={openSettingsPage} className="more-button" variant="ghost" size="sm">
            <MoreVertical size={14} />
          </Button>
        </div>
      </motion.div>
    </TooltipProvider>
  )
}

export default Floating
