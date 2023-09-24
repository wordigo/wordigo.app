import { Button, TooltipProvider, type ButtonProps } from "@wordigo/ui"
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
        className="absolute cursor-pointer z-50"
        initial={{
          top: top - 20,
          left: left - 135
        }}
        animate={{
          top: top + 10,
          left: left - 135
        }}>
        <div className="border-gray-200 shadow-md flex items-center space-x-1 rounded !font-thin border bg-background dark:bg-gray-950">
          <Logo className="h-7 w-7 bg-transparent cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 rounded-none select-none" />
          <div className="flex space-x-1.5 items-center">
            <Floating.Button onClick={handleTogglePopup}>
              <Languages size={14} />
              {getLocalMessage("translate")}
            </Floating.Button>
            <Floating.Button onClick={textToSpeech}>
              <Volume2 size={15} />
              {getLocalMessage("voice")}
            </Floating.Button>
            <Floating.Button>
              <BookMarked size={14} />
              {getLocalMessage("add")}
            </Floating.Button>
            <div className="h-7 w-1 border-r border-gray-200 dark:border-gray-500"></div>
          </div>
          <Button onClick={openSettingsPage} className="more-button" variant="ghost" size="sm">
            <MoreVertical size={14} />
          </Button>
        </div>
      </motion.div>
    </TooltipProvider>
  )
}

Floating.Button = ({ children, ...attr }: PropsWithChildren<ButtonProps>) => (
  <Button {...attr} className="!flex !h-7 !items-center !gap-x-1 !rounded-none !px-1 !text-sm !font-normal !text-accent-foreground" variant="ghost" size="sm">
    {children}
  </Button>
)

export default Floating
